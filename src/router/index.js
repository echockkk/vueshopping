import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '../views/index/index.vue'
import My from '../views/my/index.vue'
import Order from '../views/order/index.vue'
import Sort from '../views/sort/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    }
  ]
})
