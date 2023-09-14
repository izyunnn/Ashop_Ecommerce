<template>
  <div class="header">
  <div class="right">
    <div class="logo">
      <router-link to="/" class="home_link">
        <h1 class="logo">ASHOP</h1>
      </router-link>
    </div>
  </div>
  </div>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap align-items-center justify-content-center">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-6">
          <h1 class="registerLogo">ASHOP</h1>
        </div>
        <div class="grid form grid p-fluid">
          <div class="field col-12 md:col-12">
            <label class="block text-900 font-medium mb-2">{{ $t('email') }}</label>
            <form><InputText v-model="email" name="email" class="w-full mb-3" autocomplete="off" /></form>
          </div> 
          <div class="field col-12 md:col-12">
            <label class="block text-900 font-medium mb-2">{{ $t('password') }}</label>
            <form><InputText v-model="password" name="password" class="w-full mb-3" autocomplete="off" /></form>
          </div>  
          <div class="field col-12 md:col-7">
            <label class="block text-900 font-medium mb-2">{{ $t('imageVerify') }}</label>
            <form><InputText v-model="imageVerify"  name="password" class="w-full mb-3" autocomplete="off" /></form>
          </div>
          <div class="field col-12 md:col-5 mt-3 img-verify">
            <canvas ref="verify" :width="width" :height="height" @click="handleDraw"></canvas>
          </div> 
          <div class="field col-12 md:col-12 text-right">
              <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer" @click="displayModal = true">{{ $t('forgotPassword') }}</a>
          </div>
          <Button :label="$t('login')" icon="pi pi-user" class="mt-3" @click.prevent="login"></Button>
          <div>
          <Divider align="center" type="solid">
            <p class="divider">第三方登入</p>
          </Divider>
          </div>
          <div class="center">
            <GoogleLogin :callback="callback"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, reactive, onMounted, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  name: 'login',
  components: {
  },
  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
    const verify = ref(null)
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const imageVerify = ref('')
    const isLoading = ref(false)
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
      width: 120,
      height: 30,
      imageCode: ''
    })

    //圖片驗證
    onMounted(() => {
      // 初始化圖片驗證碼
      state.imageCode = draw()
      console.log(state.imageCode)
    })
    // 點擊圖片重新生成
    const handleDraw = () => {
      state.imageCode = draw()
    }
    // 隨機數
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min)
    }
    // 隨機顏色
    const randomColor = (min, max) => {
      const r = randomNum(min, max)
      const g = randomNum(min, max)
      const b = randomNum(min, max)
      return `rgb(${r},${g},${b})`
    }
    // 繪製圖片
    const draw = () => {
      const ctx = verify.value.getContext('2d')
      // 填充顏色
      ctx.fillStyle = randomColor(180, 230)
      // 填充的位置
      ctx.fillRect(0, 0, state.width, state.height)
      // 隨機產生字符串，隨機順序
      let imageCode = ""
      for (let i = 0; i < 4; i++) {
        // 隨機一個字符
        const text = state.pool[randomNum(0, state.pool.length)]
        // 隨機字體大小
        const fontSize = randomNum(18, 40)
        // 字體隨機旋轉幅度
        const deg = randomNum(-30, 30)
        ctx.font = fontSize + 'px Simhei'
        ctx.textBaseline = 'top'
        ctx.fillStyle = randomColor(80, 150)
        ctx.save()
        ctx.translate(30 * i + 15, 15)
        ctx.rotate((deg * Math.PI) / 180)
        ctx.fillText(text, -15 + 5, -15)
        ctx.restore()
        imageCode += text;
      }
      return imageCode
    }

// 登入api
const login = () => {
      isLoading.value = true
      if (email.value.length <= 0) {
        isLoading.value = false
        Swal.fire({
          icon: 'error',
          title: t('enter_email')
        })
        return
      }
      if (password.value.length <= 0) {
        isLoading.value = false
        Swal.fire({
          icon: 'error',
          title:  t('enter_password'),
        })
        return
      }
      if (imageVerify.value != state.imageCode) {
        isLoading.value = false
        Swal.fire({
          icon: 'error',
          title: t('enter_verify'),
        })
        return
      }
      store.dispatch('auth/login', {
        email: email.value,
        password: password.value,
      }).then(() => {
            isLoading.value = false
            router.push('/')
          }).catch(err =>{
            console.log(err)
            isLoading.value = false
            Swal.fire({
              icon: 'error',
              title: t('帳號或密碼錯誤'),
          })
        })
    };


    const swapErrorCode = (error) => {
      const prefix = "error: "
      return t(prefix + error)
    }  

    return{
        locale,
        t,
        verify,
        ...toRefs(state),
        handleDraw,
        email,
        username,
        password,
        login,
        imageVerify,
        swapErrorCode
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/color.scss';
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
  }
}
.selectLang {
    width: 8.5vw;
    float: right;
}
.registerLogo {
    color: #000000;
    font-size: 4rem;
    letter-spacing: 0.1rem;
    animation: text 2s ease-in-out infinite alternate;
}
.p-divider-content {
  width: auto;
  height: 2vh;
  font-weight: 350;  
}
@keyframes text {
  0%, 30% {
    text-shadow: 
    5px 5px 0px #eb452b,
    10px 10px 0px #efa032,
    15px 15px 0px #46b59b,
    20px 20px 0px #017e7f,
    25px 25px 0px #0d5370,
    35px 35px 20px #1e1e25,
    50px 50px 40px #131318;
    transform: skewX(-25deg) skewY(2deg);
  }
  90%, 100% {
    text-shadow: none;
    transform: none;
  }
}
</style>