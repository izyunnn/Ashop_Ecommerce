<template>
    <div class="container">
        <div class="card">
            <div class="flex flex align-items-center justify-content-center">
                <div class="w-full md:w-7 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div class="flex align-items-center gap-2">
                        <label class="col-3">{{ $t('email') }}</label>
                        <InputText id="email" type="email" class="col-5" />
                    </div>
                    <div class="flex align-items-center gap-2">
                        <label class="col-3">{{ $t('username') }}</label>
                        <InputText id="username" type="text" class="col-5" />
                    </div>
                    <div class="flex align-items-center gap-2">
                        <label class="col-3">{{ $t('password') }}</label>
                        <InputText id="password" type="password" class="col-5" />
                    </div>
                    <div class="flex align-items-center gap-2">
                        <label class="col-3">{{ $t('imageVerify') }}</label>
                        <InputText id="verify" type="verify" class="col-5" />
                        <div class="w-2 img-verify">
                        <canvas ref="verify" :width="width" :height="height" @click="handleDraw"></canvas>
                        </div>
                    </div>
                    <Button icon="pi pi-user" class="w-10rem">{{ $t('register') }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, reactive, onMounted, toRefs } from 'vue'
import AuthService from '@/service/auth.service'
export default {
  name: 'register',
  components: {
  },
  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
    const verify = ref(null)
    const state = reactive({
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
      width: 120,
      height: 40
    })
    const registerComponent = () => {
        const [username, setUsername] = ref("")
        const [email, setEmail] = ref("")
        const [password, setPassword] = ref("")
        const [role, setRole] = ref("")
    }
    onMounted(() => {
      // 初始化圖片驗證碼
          draw()
    })
    
    // 點擊圖片重新生成
    const handleDraw = () => {
       draw()
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
      }
    }
    return{
        locale,
        t,
        verify,
        ...toRefs(state),
        handleDraw
    }
  }
}
</script>

<style lang="scss">
.card {
    align-items: center;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 20%);
    border-radius: 3px;
    .img-verify canvas {
        cursor: pointer;
    }
}
</style>