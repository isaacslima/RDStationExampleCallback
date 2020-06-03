import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component:  () => import(/* webpackChunkName: "Main" */"../components/Main")
    },
    {
      path: '/callback',
      name: 'Callback',
      component: () => import(/* webpackChunkName: "LaudosWhatsApp" */"../components/Callback")
    },
  ]
})
