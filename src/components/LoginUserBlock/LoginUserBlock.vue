<template>
  <div class="user_boxs">
    <div class="user_img_boxs">
       <img v-bind:src="icourl"/>
    </div>
    <div class="user_name_boxs">
     <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="创建游记">创建游记</el-dropdown-item>
        <el-dropdown-item command="发布产品">发布产品</el-dropdown-item>
        <el-dropdown-item command="信息">信息</el-dropdown-item>
        <el-dropdown-item command="私信">私信</el-dropdown-item>
        <el-dropdown-item command="设置">设置</el-dropdown-item>
        <el-dropdown-item command="退出">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>  
    </div>
  </div>
</template>

<script>
import store from '../../vuex/store';
export default {
  name: '',
  data () {
    return {
          name:store.state.username,
          icourl:require('../../../static/Login/ico1.png')
    }
  },
methods:{
  handleLogin(msg){//登录成功，传值到父组件，切换到用户组件
         this.$emit(msg);
    },
  handleCommand(command) {
        let self = this;
        this.$message('点击了 ' + command);
        if(command === "退出")
        {
         sessionStorage.removeItem("username");  //移除sessionStorage  
         sessionStorage.removeItem("isLogin");  
         sessionStorage.removeItem("userico"); 
         store.state.userico=''  ;              //同步的改变story中的状态  
         store.state.username=''  ; 
         store.state.isLogin=false ;
          self.handleLogin("Login");
        }
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.user_boxs
{
    float:left;height:32px;margin-top:45px;margin-left:30px;
}

.user_img_boxs 
{
    float:left;width:32px;height:32px; margin-top:0px;
}
.user_img_boxs img{
  width: 100%;
  height: 100%;
}

.user_name_boxs 
{
    float:left;width:auto;height:32px;margin-top:0px;margin-left: 5px
}
.user_name_boxs span{
  color:#FFF;font-weight:300; font-size:16px;cursor:pointer;
}
</style>
