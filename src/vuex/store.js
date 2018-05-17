import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
//import * as getters from './getters';

Vue.use(Vuex);

let state = {
  isLogin: false, // 判断是否已经登录,
  username:'',
  userico:'',
  userId:'',
  code:''
};

let mutations = {
  saveLogin (state) {
    state.isLogin = true;
  }
};
let getters = {
  isLogin(state){
    if (!state.isLogin) {      
      state.isLogin=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态  
      state.username=sessionStorage.getItem('username');  
      state.userico=sessionStorage.getItem('userico'); 
      state.userId=sessionStorage.getItem('userId'); 
      state.code=sessionStorage.getItem('code'); 
  }  
  return state.isLogin
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
