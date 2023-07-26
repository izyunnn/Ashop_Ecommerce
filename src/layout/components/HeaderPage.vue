<template>
<div class="header">
  <div class="right">
    <div class="logo">
      <router-link to="/" class="home_link">
        <h1 class="logo">ASHOP</h1>
      </router-link>
    </div>
    <ul>
        <li v-for="item in tableList" :key="item">
          <router-link class="router-link" :to="item">{{ $t(`tabList.${item}`) }}</router-link>
        </li>
    </ul>
  </div>
  <div class="search">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText :placeholder="$t('search')" />
    </span>
  </div>
  <div class="left">
    <div class="loginBtn cursor-pointer w-2rem" @click=logout() >
      <font-awesome-icon :icon="['fas', 'right-to-bracket']" size="lg" style="color: #ffffff;" />
    </div>
    <div class="favBtn cursor-pointer w-2rem ml-1" @click="isShow = !isShow" >
      <font-awesome-icon :icon="['far', 'heart']" size="lg" style="color: #ffffff;" />
    </div>
    <div class="cartBtn cursor-pointer w-2rem ml-1">
      <router-link to="/cart" class="cart">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" size="lg" style="color: #ffffff;" />
      </router-link>
    </div>
    <div class="userBtn cursor-pointer w-2rem ml-1" @click="personalBar = !personalBar">
      <router-link to="/addCategory">
        <font-awesome-icon :icon="['fass', 'user']" size="lg" style="color: #ffffff;" />
      </router-link>
    </div>
    <div class="list" v-if="personalBar">
      <ul>
        <li v-for="item in langMenu" :key="item.id" @click="$i18n.locale = item.id,isShow = !isShow" @click.stop>{{item.name}}</li>
      </ul>
    </div>
    <div class="langBtn cursor-pointer ml-7 flex align-items-center justify-content-center text-center" @click="isShow = !isShow" >
      <font-awesome-icon :icon="['fas', 'earth-americas']" size="lg" style="color: #ffffff;" />
      <p>{{ $t('lang') }}</p>
    </div>
    <div class="list" v-if="isShow">
      <ul>
        <li v-for="item in langMenu" :key="item.id" @click="$i18n.locale = item.id,isShow = !isShow" @click.stop>{{item.name}}</li>
      </ul>
    </div>
  </div>
</div>
  <!-- <div class="Navbar2">
    <ul>
      <li v-for="item in menu" :key="item">
        <router-link class="router-link" to="/">{{ $t(`womanMenu.${item}`) }}</router-link>
      </li>
    </ul>
  </div> -->
</template>
  
<script>
import { reactive, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import "vuetify/dist/vuetify.min.css";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'headerPage',
  components: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const isShow = ref(false)
    const { locale, t } = useI18n({ useScope: 'global' })
    const tableList = reactive(['woman', 'male', 'child', 'baby'])
    const menu = reactive(["new", "cloth", "shoes", "accessories", "bag", "cosmetic", "sport"])
    const langMenu = reactive([
      { name: '繁體中文', id: 'zh-TW' },
      { name: 'English', id: 'en-US' },
      { name: '簡體中文', id: 'zh-CN' },
    ])

    const logout = () => {
      store.dispatch('auth/logout').then(
          () => {
            router.push('/login')
          },
          (error) => {
            console.log(error)
          }
      )
    }

    // reload page時不會變回預設語言
    watch(locale, (newlocale) => {
      localStorage.setItem('locale', newlocale)
    })
    return {
      tableList,
      locale,
      t,
      langMenu,
      isShow,
      menu,
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
@import 'primeicons/primeicons.css';

.header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9vh;
  background-color: $black-80;
  z-index: 10;
  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 2;
    a {
      text-decoration: none;
      .logo {
        margin-left: 2rem;
        width: 6vw;
        color: #ffffff;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }
    }
    ul {
      display: flex;
      justify-content: normal;
      align-items: normal;
      white-space: nowrap;
      width: 20vw;
      margin-left: 2rem;
      li {
        display: inline;
        justify-content: normal;
        align-items: normal;
        position: relative;
        margin:0 25px;
        a {
          color: $white;
          &.router-link-exact-active {
            color: #ffd699;
          }
        }
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    margin-left: 4rem;
    span {
      width: 40vw;
      i {
        width: 0vw;
      }
    }
  }
  .left {
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    margin-left: 2rem;
    .langBtn {
        width: 100px;
        height: 40px;
        cursor: pointer;
        p {
          color: white;
          font-size: 1em;
          white-space:nowrap;
        }
      }
      .list {
        position: absolute;
        text-align: center;
        margin-left: 5px;
        top: 50px;
        width: 132px;
        height: auto;
        margin-left: 14rem;
        z-index: 10;
        transition: height 1 s ease 0s;
        overflow: hidden;
        border-radius: 5%;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          background: $black;
          transition: margin-top 0.5;
          li {
            padding: 10px 0;
            width: 100%;
            height: 36px;
            color: $white;
            white-space: nowrap;
            overflow: hidden;
            cursor: pointer;
          }
          li.active {
            color: $orange;
          }
        }
      }
    }
  }
.Navbar2 {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  top: 9vh;
  background-color: #f5f5f5;
  box-shadow:3px 3px 5px 6px #cccccc;
  box-sizing: border-box;
  ul {
    display: flex;
    justify-content: normal;
    align-items: normal;
    white-space: nowrap;
    width: 20vw;
    margin-left: 9rem;
    li {
      display: inline;
      justify-content: normal;
      align-items: normal;
      position: relative;
      margin:0 25px;
      a {
        text-decoration: none;
        color: #000000;
        &.router-link-exact-active {
          color: #ffd699;
        }
      }
    }
  }
}
</style>  