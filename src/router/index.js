import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',//没有了#号
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '*',
      redirect: '/seller'
    }

  ]
})


