// 增加页签 ，参数：{name:'',path:'',comp:''}
const sysAddTab = ({commit}, target) => {
  commit('SYS_ADD_TAB', target);
};



export {
  sysAddTab
};
