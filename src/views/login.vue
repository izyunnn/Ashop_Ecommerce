<template>
    <div class="container">
        <div class="card">
            <div class="flex flex align-items-center justify-content-center">
                <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div class="flex align-items-center gap-2">
                        <label>{{ $t('username') }}</label>
                        <InputText id="username" type="text" class="w-full" />
                    </div>
                    <div class="flex align-items-center gap-2">
                        <label>{{ $t('password') }}</label>
                        <InputText id="password" type="password" class="w-full" />
                    </div>
                    <Button icon="pi pi-user" class="w-10rem">{{ $t('login') }}</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'login',
  components: {
  },
  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
    return{
        locale,
        t
    }
  }
}
</script>