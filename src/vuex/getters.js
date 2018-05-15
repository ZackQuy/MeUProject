// 从sessionStorage中读取状态
export const isLogin = state => {
  if (!state.isLogin) {      
    state.isLogin=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态  
    state.username=sessionStorage.getItem('username');  
}  
return state.isLogin
};

