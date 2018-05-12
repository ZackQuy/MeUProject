import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main_page/Main.vue'//主页
import Reg from '../views/Reg_page/Register'//
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Resister',
      name: 'Reg',
      component: Reg
    },
  ]
})
