<template>
<div class="header">
  <p class="title">SHOPPING CART</p>
</div>
<div class="cart">
  <div class="right">
    <DataTable :value="products"  class="p-datatable-lg" showGridlines tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">購物車</span>
        </div>
      </template>
      <Column field="name" header="產品名稱"></Column>
      <Column header="產品預覽圖">
        <template #body="slotProps">
          <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
        </template>
      </Column>
      <Column field="price" header="價格">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="種類"></Column>
      <Column field="quantity" header="數量"></Column>
      <Column field="total" header="總價格"></Column>
      <template #footer>總共有{{ products ? products.length : 0 }}件商品</template>
    </DataTable>
  </div>
  <div class="left">
    <h2>總共金額</h2>
    <p>SHIPPING AND ADDITIONAL COSTS ARE CALCULATED BASED ON VALUES YOU HAVE ENTERED.</p>
    <table>
      <tbody>
        <tr>
          <td>
            <p class="text">Order Subtotal</p>
          </td>
          <td>
            <p class="money">$160.00</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text">Shipping Charges</p>
          </td>
          <td>
            <p class="money">$10.00</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text">Tax</p>
          </td>
          <td>
            <p class="money">$5.00</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="text">Total</p>
          </td>
          <td>
            <p class="money">$5.00</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
    
<script>
import { ref, onMounted, watch } from 'vue'
import { ProductService } from '@/service/ProductService'
import { useI18n } from 'vue-i18n'

export default {
  name: 'cartPage',
  components: {
  },
  setup () {
    const products = ref()
    const { locale, t } = useI18n({ useScope: 'global' })
    const formatCurrency = (value) => {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'TWD' });
    }
    onMounted(() => {
      ProductService.getProductsMini().then((data) => (products.value = data));
    })
    watch(locale, (newlocale) => {
      localStorage.setItem('locale', newlocale)
    })
    return {
      formatCurrency,
      products,
      locale,
      t
    }
  }
}
</script>
  
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
@import 'primeicons/primeicons.css';
.header {
  text-align: center;
  .title {
    padding-top: 2rem;
    font-size: 5rem;
    background: linear-gradient(178.6deg, rgb(20, 36, 50) 11.8%, rgb(124, 143, 161) 83.8%);
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.cart {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  min-height: 100%;
  padding: 2rem;
  .left {
    margin-left: 1.5rem; 
    padding: 1.5rem;
    background-color: #e6e6e6;
    h2 {
      margin: 5vh 0 5vh 0;
    }
    p {
      text-align: left;
      font-size: 1rem;
    }
    table {
      align-items: center;
      margin: 1rem;
      background-color: #fff;
      color: rgba(0,0,0,.87);
      width: 95%;
      border-collapse:collapse;
      border-spacing: 5px;
      border-radius: 2%;
      line-height:20px;
      tbody {
        vertical-align: middle;
        tr {
          height: 8vh;
          border: 1px solid #e6e6e6;
          td {
              p{
                font-size: 1.5rem;
              }
              .text {
                margin-left: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
    