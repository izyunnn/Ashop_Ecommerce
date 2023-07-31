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
  <div class="left align-items-center justify-content-center text-center flex">
    <div class="loginBtn cursor-pointer w-2rem ml-2" @click=logout() >
      <font-awesome-icon :icon="['fas', 'right-to-bracket']" size="lg" style="color: #ffffff;" />
    </div>
    <div class="favBtn cursor-pointer w-2" @click="isShow = !isShow" >
      <font-awesome-icon :icon="['far', 'heart']" size="lg" style="color: #ffffff;" />
    </div>
    <div class="userBtn cursor-pointer w-2 flex" @click="isPersonalBar = !isPersonalBar">
      <font-awesome-icon :icon="['fass', 'user']" size="lg" style="color: #ffffff;" />
      <p class="text-l text-white cursor-pointer white-space-nowrap ml-1">{{ getCurrentUser }}</p>
    </div>
    <div class="personalList" v-if="isPersonalBar">
      <ul>
        <li v-for="item in personalBar" :key="item.id" @click="$router.push(item.id), isPersonalBar = !isPersonalBar">{{ item.name }}</li>
      </ul>
    </div>
    <div class="langBtn cursor-pointer w-3 m-2 ml-6 flex" @click="isShow = !isShow" >
      <font-awesome-icon :icon="['fas', 'earth-americas']" size="lg" style="color: #ffffff;" />
      <p class="white-space-nowrap text-white ml-1">{{ $t('lang') }}</p>
    </div>
    <div class="langList" v-if="isShow">
      <ul>
        <li v-for="item in langMenu" :key="item.id" @click="$i18n.locale = item.id,isShow = !isShow" @click.stop>{{item.name}}</li>
      </ul>
    </div>
  </div>
</div>
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
    const isPersonalBar = ref(false)
    const { locale, t } = useI18n({ useScope: 'global' })
    const tableList = reactive(['woman', 'male', 'child', 'baby'])
    const menu = reactive(["new", "cloth", "shoes", "accessories", "bag", "cosmetic", "sport"])
    const langMenu = reactive([
      { name: '繁體中文', id: 'zh-TW' },
      { name: 'English', id: 'en-US' },
      { name: '簡體中文', id: 'zh-CN' },
    ])
    const selectPersonal = ref('')
    const personalBar = reactive([
      {name: '登陸', id: 'login'},
      {name: '我的購物車', id:'cart'},
      {name: '我的收藏', id: 'favorite'},
      {name: '個人資料', id:'profile'}
    ])
    const getCurrentUser = JSON.parse(localStorage.getItem('user'))

    const logout = () => {
      store.dispatch('auth/logout').then(
          () => {
            router.push('/')
            router.go()
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
      logout,
      selectPersonal,
      personalBar,
      isPersonalBar,
      getCurrentUser
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
    box-sizing: border-box;
      .langList {
        position: absolute;
        text-align: center;
        top: 50px;
        width: 8vw;
        height: auto;
        margin-left: 14rem;
        z-index: 10;
        overflow: hidden;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
        .langList:hover {
          transition: height 1s ease 0s;
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          background: #ffffff;
          transition: margin-top 0.5;
          li {
            padding: 10px 0;
            width: 100%;
            height: 36px;
            color: #000000;
            white-space: nowrap;
            overflow: hidden;
            cursor: pointer;
          }
          li.active {
            color: $orange;
          }
        }
      }
        .personalList {
        position: absolute;
        text-align: center;
        top: 50px;
        width: 8vw;
        height: auto;
        z-index: 10;
        transition: height 1 s ease 0s;
        overflow: hidden;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          background: #ffffff;
          transition: margin-top 0.5;
          li {
            padding: 10px 0;
            width: 100%;
            height: 36px;
            color: #000000;
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
</style>  