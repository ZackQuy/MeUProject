// 存储localsession到本地
const saveLocal = (store, data) => {
  store.state.username=data.username;             //同步的改变store中的状态  
  store.state.userId=data.accountId;  
  store.state.isLogin=true;
  sessionStorage.setItem("username", data.username);  //添加到sessionStorage  
  sessionStorage.setItem("isLogin",true);  
  sessionStorage.setItem("userId",data.accountId); 

};
export {
  saveLocal
};
