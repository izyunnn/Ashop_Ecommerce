<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="text-center align-items-center">
          <h1 class="font-normal">{{ $t('addCategory') }}</h1>
        </div>
        <div class="mt-3">
          <h3>{{ $t('categoryName') }}</h3>
          <InputText type="text" v-model="categoryName"/>
        </div>
        <div class="mt-3">
          <h3>{{ $t('description') }}</h3>
          <InputText type="text" v-model="description"/>
        </div>
        <div class="mt-3">
          <h3>{{ $t('productImage') }}</h3>
          <InputText type="text" v-model="productImage"/>
        </div>
        <div class="mt-3">
          <h3>{{ $t('productPrice') }}</h3>
          <InputText type="number" v-model="productPrice"/>
        </div>
        <Button class="w-2 mt-5 align-items-center" @click="addCategory()" label="Submit" />
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'addCategory',
  components: {},
  setup () {
    const categoryName  = ref('')
    const description = ref('')
    const productImage = ref('')
    const productPrice = ref(0)
    const addCategory = () => {
      const newCategory = {
        categoryName: categoryName.value,
        description: description.value,
        productImage: productImage.value,
        productPrice: productPrice.value
      }
    }
    return {
      categoryName,
      description,
      productImage,
      productPrice,
      addCategory
    }
  }
}
</script>

<style lang="scss">

</style>  