<template>
  <div class="">
    <div class="align-items-center justify-content-center text-center relative">
      <Galleria :value="images" :showThumbnails="false" :showItemNavigators="true">
        <template #item="slotProps">
          <img class="h-30rem" :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block; object-fit: cover;" />
        </template>
      </Galleria>
    </div>
    <div class="row flex">
      <div class="col-6 relative align-items-center text-center" :key="picks" v-for="picks in topPicks">
        <img :src="picks.src" class="h-30rem" style="-webkit-filter:brightness(.7);"/>
        <h1 style="top: 7em; color: #ffffff;" class="absolute">{{ $t('topPicks') }}</h1>
        <div class="absolute" style="top: 18em;">
          <Button severity="secondary" outlined  class="w-2" style="color: #ffffff;">
            <a href="/woman" style="color: #ffffff;text-decoration: none;">{{ $t('shopNow') }}</a>
          </Button>
        </div>
      </div>
    </div>
    <div class="row flex">
      <div class="col-4 relative align-items-center text-center" :key="item" v-for="item in shopNow">
        <img :src="item.src" class="h-20rem" style="-webkit-filter:brightness(.7);">
        <h1 style="top: 4em; color: #ffffff;" class="absolute">Lorem & Ipsum</h1>
        <div class="absolute">
          <Button label="SHOP NOW" severity="secondary" outlined  class="w-3" style="top: -9em; color: #ffffff;">
            <a href="/woman" style="color: #ffffff;text-decoration: none;">{{ $t('shopNow') }}</a>
          </Button>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>{{ $t('DealsOfTheDay') }}</h3>
      <Divider />
      <div class="text-center align-items-center flex mb-3">
        <div class="col-3" :key="pro.id" v-for="pro in exploreProducts">
          <Card style="height: 22em; width: 16em;">
            <template #header>
              <img class="h-12rem productPics" :aspect-ratio="16/9" :src="pro.src">
              <p class="-mt-6 ml-3 text-2xl text-white text-left">{{ $t(`${pro.name}`) }}</p>
            </template>
            <template #title>
              <p class="text-lg mt-5">{{ $t(`${pro.discount}`) }}</p>
            </template>
            <template #content>
              <Button label="EXPLORE" severity="secondary" outlined class="w-9 font-semibold" style="color: #000000;" />
            </template>  
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { PhotoService } from '@/service/PhotoService'
import { onMounted, reactive, ref, } from 'vue'

export default {
  name: 'homePage',
  components: {},
  setup () {
    const images = ref()
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
    const topPicks = reactive([
      {
        id:1,
        src:require('../assets/img/home/deal5.jpg')
      },
      {
        id:2,
        src:require('../assets/img/home/photo4.jpg')
      }
    ])
    const shopNow = reactive([
      {
        id:1,
        src:require('../assets/img/home/deal5.jpg')
      },
      {
        id:2,
        src:require('../assets/img/home/photo4.jpg')
      },
      {
        id:3,
        src:require('../assets/img/home/photo4.jpg')
      }
    ])
    const exploreProducts = reactive([
        {
          id:1,
          name:'bag',
          discount:'upTo69%',
          price:'18.00',
          src:require('../assets/img/home/deal1.jpg')
        },
        {
          id:2,
          name:'T-Shirt',
          discount:'upTo50%',
          price:'40.00',
          src:require('../assets/img/home/deal2.jpg')
        },
        {
          id:3,
          name:'jeans',
          discount:'upTo50%',
          price:'25.00',
          src:require('../assets/img/home/deal3.jpg')
        },
        {
          id:4,
          name:'shoes',
          discount:'upTo69%',
          price:'30.00',
          src:require('../assets/img/home/deal4.jpg')
        }
      ])
    onMounted(() => {
      PhotoService.getImages().then((data) => (images.value = data))
    })
    return {
      responsiveOptions,
      images,
      exploreProducts,
      topPicks,
      shopNow
    }
  }
}
</script>
  