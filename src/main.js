// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import cloginvue from './components/TxtBtnLogin/LoginTxt';
import cHeadervue from './components/Header/Head';
import cFootvue from './components/Footer/Foot';
import clogindialog from './components/loginDialog/loginDialog';
import cloginuserblock from './components/LoginUserBlock/LoginUserBlock';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(router);
//注册全局组件，头部组件、foot组件、login组件、用户信息组件、登录窗口组件
Vue.component('cHeader',cHeadervue);//注册全局头部组件
Vue.component('cFoot',cFootvue);//注册全局footer组件
Vue.component('cLogin',cloginvue);//注册全局login组件
Vue.component('cLoginDialog',clogindialog);//注册全局login弹窗组件
Vue.component('cLoginUserBlock',cloginuserblock);//注册全局用户登录组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})







