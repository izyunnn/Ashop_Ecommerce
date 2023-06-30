<template>
  <div class="container mt-10">
    <div class="row">
      <!-- product preview pic -->
      <div class="productPreview col-5">
        <div class="card flex justify-content-center">
          <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 700px"
            :showThumbnails="false" :showIndicators="true" :showItemNavigators="true">
            <template #item="slotProps">
              <img class="h-30rem" :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
           </Galleria>
        </div>
      </div>
      <!-- product detail -->
      <div class="productDetails col-7 pl-10">
        <Breadcrumb  :model="breadcrums" class="text-xs w-7" style="border: none;"/>
        <div>
          <p class="text-4xl">Modern Black T-Shirt</p>
        </div>
        <div>
          <p class="text-2xl font-normal pt-3" style="display: flex;">$65.00 
            <del class="text-lg font-light">$80.00</del>
            <Rating v-model="rating" :cancel="false" class="w-2"/>
            <span class="font-light text-xs ml-4"> 25 REVIEWS</span>
          </p>
        </div>
        <p class="subtitle-1 font-weight-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.</p>
        <p class="mt-4 font-semibold text-xl">SIZE</p>
        <div class="flex flex-wrap gap-3 mt-4">
          <div class="flex align-items-center w-1">
            <RadioButton v-model="ingredient" inputId="ingredient1" name="XS" value="XS" />
            <label for="ingredient1" class="ml-2">XS</label>
          </div>
          <div class="flex align-items-center w-1">
            <RadioButton v-model="ingredient" inputId="ingredient2" name="S" value="S" />
            <label for="ingredient2" class="ml-2">S</label>
          </div>
          <div class="flex align-items-center w-1">
            <RadioButton v-model="ingredient" inputId="ingredient3" name="M" value="M" />
            <label for="ingredient3" class="ml-2">M</label>
          </div>
          <div class="flex align-items-center w-1">
            <RadioButton v-model="ingredient" inputId="ingredient4" name="L" value="L" />
            <label for="ingredient4" class="ml-2">L</label>
          </div>
          <div class="flex align-items-center w-1">
            <RadioButton v-model="ingredient" inputId="ingredient5" name="XL" value="XL" />
            <label for="ingredient5" class="ml-2">XL</label>
          </div>
        </div>
        <div>
          <p class="mt-4 font-semibold text-xl">ITEMS</p>
          <InputNumber class="w-2 mt-4 itemQuantity" v-model="item" inputId="items" showButtons :min="1" :max="100" incrementButtonClass="p-button-secondary" decrementButtonClass="p-button-secondary"/>
        </div>
        <div class="mt-4">
          <Button style="background-color: #252323f4; border: 1px solid #ffffff;" class="w-4 mr-4">
            <i class="pi pi-cart-plus w-2"></i>
            <span class="font-medium">ADD TO CART</span>
          </Button>
          <Button style="background-color: #ffffff; border: 1px solid #252323f4;" class="w-4">
            <i class="pi pi-heart-fill w-2 -ml-2" style="color: #252323f4;"></i>
            <span style="color: #252323f4;" class="font-medium">ADD TO WISHLIST</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <!-- product descriptions -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <TabView class="w-5">
          <TabPanel>
            <template #header>
              <span>Descriptions</span>
            </template>
            <p style="width: 80rem;" class="mt-5 line-height-4 text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel>
            <template #header>
              <span>Materials</span>
            </template>
            <p style="width: 80rem;" class="mt-5 line-height-4 text-lg font-light">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel>
            <template #header>
              <span>REVIEWS</span>
            </template>
            <div class="reviewHeadshot flex" :key="item" v-for="item in customerReview">
              <div class="headshot w-2">
                <Avatar :image="item.src" class="mr-2" size="xlarge" shape="circle" />
              </div>
              <div class="reviewContent">
                <p class="name font-medium">{{ item.name }}</p>
                <Rating v-model="reviewRating" :cancel="false" class="w-2 mt-2" readonly/>
                <p class="comment text-xs mt-2">{{ item.comment }}</p>
              </div>
            </div>  
          </TabPanel>
        </TabView>
      </div>
      <!-- more products -->
      <p class="font-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
      <Divider/>
      <div class="text-center align-items-center flex mb-3">
        <div class="col-2" :key="pro.id" v-for="pro in products">
          <Card style="height: 20em; width: 11em;">
            <template #header>
              <img class="h-12rem productPics" :aspect-ratio="16/9" :src="pro.src">
              <p class="-mt-6 ml-3 text-2xl text-white text-left"> {{pro.name}} </p>
            </template>
            <template #title>
              <p class="text-sm">{{pro.discount}}</p>
            </template>
            <template #content>
              <Button label="EXPLORE" severity="secondary" outlined class="w-9 -mt-3 font-semibold" />
            </template>  
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'
import { PhotoService } from '@/service/PhotoService'

export default {
   name: 'productPage',
   components: {},
   setup() {
    const images = ref()
    const rating = ref(0)
    const reviewRating = ref(4)
    const ingredient =ref('')
    const item = ref(1)
    const responsiveOptions = reactive([
      {
        breakpoint: '991px',
        numVisible: 4
      },
      {
        breakpoint: '767px',
        numVisible: 3
      },
      {
        breakpoint: '575px',
        numVisible: 1
      }
    ])
    const breadcrums= reactive([
      { label: 'Home'  },
      { label: 'Clothing' },
      { label: 'T-Shirts' }
    ])
    const customerReview = reactive([
      {
        id:1,
        src: require('../assets/img/home/deal5.jpg'),
        name: 'Ann',
        comment: 'Good'
      },
      {
        id:2,
        src: require('../assets/img/home/photo4.jpg'),
        name: 'Alex',
        comment: 'Good'
      },      {
        id:3,
        src: require('../assets/img/home/deal6.jpg'),
        name: 'Abby',
        comment: 'Good'
      },
    ])
    const products = reactive([
        {
          id:1,
          name:'Bag',
          discount:'Upto 60% + Extra 10%Baggit, Zara, Fossil',
          price:'18.00',
          src:require('../assets/img/home/deal1.jpg')
        },
        {
          id:2,
          name:'T-Shirt',
          discount:'Upto 50% + Extra 10%Zara, Selected, Celio',
          price:'40.00',
          src:require('../assets/img/home/deal2.jpg')
        },
        {
          id:3,
          name:'Jeans',
          discount:'Upto 60% + Extra 10%Jack & Jones, Levis',
          price:'25.00',
          src:require('../assets/img/home/deal3.jpg')
        },
        {
          id:4,
          name:'Shoes',
          discount:'Upto 60% + Extra 10%Nike, Adidas, Puma',
          price:'30.00',
          src:require('../assets/img/home/deal4.jpg')
        },
        {
          id:5,
          name:'Jeans',
          discount:'Upto 60% + Extra 10%Nike, Adidas, Puma',
          price:'50.00',
          src:require('../assets/img/home/deal5.jpg')
        },
        {
          id:6,
          name:'Shirts',
          discount:'Upto 60% + Extra 10%Nike, Adidas, Puma',
          price:'34.00',
          src:require('../assets/img/home/deal6.jpg')
        }
    ])
    onMounted(() => {
      PhotoService.getImages().then((data) => (images.value = data))
      console.log(PhotoService.getImages())
    })
    return {
      images,
      responsiveOptions,
      breadcrums,
      rating,
      ingredient,
      item,
      reviewRating,
      products,
      customerReview
    }
   }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
@import '~primeicons/primeicons.css';
.row {
  margin-left: 8rem;
}
.container {
  display: flex;
  width: 100%;
  padding: 12px;
  margin: 0 10rem auto 0;
  .p-button-icon {
    width: 2rem;
  }
  .itemQuantity {
    .p-inputNumber-button-group {
      background-color: #252323f4;
    }
  }
}
</style>