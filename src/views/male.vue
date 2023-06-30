<template>
  <div>
    <div class="container">
      <div class="ml-4 row">
        <!-- sidebar -->
        <div class="col-3 sidebar">
          <div class="card">
            <h2>Filters</h2>
            <Divider />
              <Tree :value="items" :filter="true" class="w-full md:w-16rem treeTable"></Tree>
            <Divider />
            <h2>Price</h2>
            <div class="card flex justify-content-center slider">
              <Slider v-model="range" :min="0" :max="10000" range class="w-14rem slider" />
            </div>
            <div class="grid choosePrice">
              <div class="col">
                <InputText :value="range[0]" />
              </div>
              <div class="col">
                <p>to</p>
              </div>
              <div class="col">
                <InputText :value="range[1]" />
              </div>
            </div>
            <Divider />
            <h2>Customer Rating</h2>
            <div v-for="rate of rating" :key="rate.key" class="flex align-items-center">
                <Checkbox v-model="selectedRating" :inputId="rate.key" name="rate" :value="rate.name" class="checkBox" />
                <label :for="rate.key" class="checkLabel">{{ rate.name }}</label>
            </div>
            <Divider />
            <h2>Size</h2>
              <div v-for="size of sizes" :key="size.key" class="flex align-items-center">
                  <Checkbox v-model="selectedSizes" :inputId="size.key" name="size" :value="size.name" class="checkBox"/>
                  <label :for="size.key" class="checkLabel">{{ size.name }}</label>
              </div>
          </div>
        </div>
        <!-- product -->
        <div class="col-9 category">
          <div class="col-6">
            <Breadcrumb  :model="breadcrums" class="breadcrumb"/>
          </div>
          <div class="flex">
            <p class="col-4 text-sm">Showing 1-12 of 200 products</p>
            <MultiSelect v-model="select" display="chip" :options="options" optionLabel="name" placeholder="Popularity" :maxSelectedLabels="1" class="w-full md:w-20rem selectOptions"/>
          </div>
          <Divider />
          <div class="row text-center">
            <div class="col-3" :key="pro.id" v-for="pro in products">
              <Card style="height: 18em">
                <template #header>
                  <img class="h-13rem productPics" :aspect-ratio="16/9" :src="pro.src">
                  <p class="-mt-6 ml-3 text-2xl text-white text-left"> {{pro.type}} </p>
                </template>
                <template #title>
                  <a href="/product" class="text-sm">{{pro.name}}</a>
                </template>
                <template #content>
                  <div class="-mt-4">${{pro.price}}</div>
                </template>  
              </Card>
            </div>
            <!-- page -->
            <Paginator :rows="10" :totalRecords="120" class="surface-200"></Paginator>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
  import { ref, reactive } from 'vue'
  import { NodeService } from '@/service/NodeService'
  
  export default {
    name: 'malePage',
    components: {
    },
    mounted() {
      NodeService.getTreeNodes().then((data) => (this.items = data));
    },
    setup () {
      const range = ref([0, 10000])
      const min = ref(0)
      const max = ref(10000)
      const select = ref()
      const options = reactive([
        { name: 'Default' },
        { name: 'Popularity' },
        { name: 'Relevance' }, 
        { name: 'Price: Low to High' } ,
        { name: 'Price: Hight to Low' } 
      ])
      const page = ref(1)
      const items = ref(null)
      const selectedSizes = ref(['XS'])
      const selectedRating = ref(['4 & above'])
      const breadcrums = reactive([
        { label: 'Home' },
        { label: 'Clothing' },
        { label: 'T-Shirts' }
      ])
      const sizes = reactive ([
        { name: 'XS', key: 'XS' },
        { name: 'S', key: 'S' },
        { name: 'M', key: 'M' },
        { name: 'L', key: 'L' },
        { name: 'XL', key: 'XL'}
      ])
      const rating = reactive([
        {name: '4 & above', key: '4 & above' },
        {name: '3 & above', key: '3 & above' },
        {name: '2 & above', key: '2 & above' },
        {name: '1 & above', key: '1 & above' }
      ])
      const products = reactive([
        {
          id:1,
          name:'BLACK TEE',
          type:'Jackets',
          price:'18.00',
          src:require('../assets/img/shop/1.jpg')
        },
        {
          id:2,
          name:'WHITE TEE',
          type:'Polo',
          price:'40.00',
          src:require('../assets/img/shop/2.jpg')
        },
        {
          id:3,
          name:'Zara limited...',
          type:'Denim',
          price:'25.00',
          src:require('../assets/img/shop/3.jpg')
        },
        {
          id:4,
          name:'SKULL TEE',
          type:'Jackets',
          price:'30.00',
          src:require('../assets/img/shop/4.jpg')
        },
        {
          id:5,
          name:'MANGO WINTER',
          type:'Sweaters',
          price:'50.00',
          src:require('../assets/img/shop/5.jpg')
        },
        {
          id:6,
          name:'SHIRT',
          type:'Denim',
          price:'34.00',
          src:require('../assets/img/shop/6.jpg')
        },
        {
          id:7,
          name:'TRUCKER JACKET',
          type:'Jackets',
          price:'38.00',
          src:require('../assets/img/shop/7.jpg')
        },
        {
          id:8,
          name:'COATS',
          type:'Jackets',
          price:'25.00',
          src:require('../assets/img/shop/8.jpg')
        },  
        {
          id:9,
          name:'MANGO WINTER',
          type:'Sweaters',
          price:'50.00',
          src:require('../assets/img/shop/9.jpg')
        },
        {
          id:10,
          name:'SHIRT',
          type:'Denim',
          price:'34.00',
          src:require('../assets/img/shop/10.jpg')
        },
        {
          id:11,
          name:'TRUCKER JACKET',
          type:'Jackets',
          price:'38.00',
          src:require('../assets/img/shop/11.jpg')
        },
        {
          id:12,
          name:'COATS',
          type:'Jackets',
          price:'25.00',
          src:require('../assets/img/shop/12.jpg')
        }
      ])
      return {
        range,
        min,
        max,
        select,
        options,
        page,
        breadcrums,
        items,
        products,
        sizes,
        selectedSizes,
        rating,
        selectedRating
      }
    }
  }
  </script>
  
<style lang="scss">
@import '~@/assets/scss/color.scss';
@import 'primeicons/primeicons.css';

.container {
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
  .row {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-flex: 1;
    margin-left: -12px;
    margin-right: -12px;
    .card {
      align-items: center;
      color: #495057;
      box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 20%);
      border-radius: 3px;
      h2 {
        margin-left: 1rem;
      }
      .slider {
        margin-top: 0.5rem;
      }
      .choosePrice {
        text-align: center;
        align-items: center;
        margin: 1rem 1rem 0 0;
        p {
          font-size: 1.25em;
        }
      } 
    }
    .sidebar {
      margin-top: 5vh;
      .treeTable {
        border: none;
      }
      .checkBox {
        margin-left: 1.5rem;
      }
      .checkLabel {
        margin: 0 3rem 0 2rem;
        font-size: 1.25rem;
      }
    }
    .category {
      margin-top: 5vh;
      .breadcrumb {
        color: #000000;
        border: none;
      }
      .selectOptions {
        margin-left: 20rem;
      }
      .productPics {
        object-fit: cover;
        object-position: center center;
      }
      a {
        color: #000000;
        font-weight: lighter;
      }
      nav {
        button {
          width: 2rem;
        }
        span {
          width: auto;
        }
      }
    }
  }
}
  </style>  