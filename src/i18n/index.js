import { createI18n } from 'vue-i18n'
// 載入語言
import cn from '@/i18n/langs/zh-CN.json'
import zh from '@/i18n/langs/zh-TW.json'
import en from '@/i18n/langs/en-US.json'

const i18n = createI18n({
  legacy: false,
  // reload page時不會變回預設
  locale: localStorage.getItem('locale') ?? 'zh-TW',
  // fallbackLocale: 'zh-TW',
  legacy: false,
  globalInjection: true,
  messages: {
    cn,
    zh,
    en,
  }
})
export default i18n
