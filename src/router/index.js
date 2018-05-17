import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main_page/Main.vue'//主页
import Reg from '../views/Reg_page/Register'//
import store from '../vuex/store'

Vue.use(Router)



const router = new Router(
  {
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
          keepAlive: false, /* 用于在 <keep-alive> 中使用，判断是否需要进行缓存 */
          auth: true, /* 自定义属性，用于判断是否进行校验,在router.beforeEach中使用 */
          title: '首页' /* 可以通过$route.meta.title 后取当前的描述信息、菜单信息 */
        }
      },
      {
        path: '/Resister',
        name: 'Reg',
        component: Reg,
        meta: {
          keepAlive: false,
          auth: true
        }
      }
    ]
  }
);

router.beforeEach((to, from, next) => {// 注册一个全局前置守卫
  if (to.matched.some(m => m.meta.auth)) {// 判断是否需要校验
    if (store.state.isLogin) {// 获取
      if (to.name == 'Reg') {
        next(
          {// 校验失败，跳转至登录界面
          path: '/',
          query: {
            redirect: to.fullPath
          }// 将跳转的路由path作为参数，用于在登录成功后获取并跳转到该路径
        }
      );
      }
      else{
        next();// 校验通过，正常跳转到你设置好的页面
      }
    } 
    else {
      if(to.name == 'Main' || to.name == 'Reg')
    {   
      next();// 不需要校验，直接跳转
    }
    else{
      next(
        {// 校验失败，跳转至登录界面
        path: '/',
        query: {
          redirect: to.fullPath
        }// 将跳转的路由path作为参数，用于在登录成功后获取并跳转到该路径
      }
    );
    }
    }
  } 
  else {
    next();// 不需要校验，直接跳转
  }
});

export default router;