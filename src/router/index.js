import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import addCategory from '../views/personalPage/addCategory.vue'
import HomePage from '../views/homePage.vue'
import Child from '../views/child.vue'
import Male from '../views/male.vue'
import Woman from '../views/woman.vue'
import Baby from '../views/baby.vue'
import Cart from '../views/personalPage/cartPage.vue'
import Product from '../views/product.vue'
import Register from '../views/personalPage/register.vue'
import Login from '../layout/components/login.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'homePage',
        component: HomePage
      },
      {
        path: '/male',
        name: 'malePage',
        component: Male
      },
      {
        path: '/child',
        name: 'childPage',
        component: Child
      },
      {
        path: '/woman',
        name: 'womanPage',
        component: Woman
      },
      {
        path: '/baby',
        name: 'babyPage',
        component: Baby
      },
      {
        path: '/cart',
        name: 'cartPage',
        component: Cart
      },
      {
        path: 'product',
        name: 'productPage',
        component: Product
      },
      {
        path: 'addCategory',
        name: 'addCategory',
        component: addCategory
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
