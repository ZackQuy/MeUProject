<template>
<div class="Top">
  <el-row :gutter="0">
      <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
          <div class="grid-content ">
              <div class ="t_logo">
                    <a @click="ToMain">
                        <img src="./assets/logo.png" />
                    </a>
                </div>
                 <div class ="t_show">
                    <div style=" margin-top:10px; margin-left:40px;">
                                                       <span style="color:#386d73; font:Arial, Helvetica, sans-serif; font-weight:bolder">唯心而行</span></div>
                                                       <div style=" margin-top:10px; margin-left:0px;">
                                                       <span style="color:#386d73; font:Arial, Helvetica, sans-serif; font-weight:bolder">无微不至</span>
                                                       </div>
                                                       <div style=" margin-top:10px; margin-left:20px">
                                                       <span style="color:#386d73; font:Arial, Helvetica, sans-serif; font-weight:bolder">享受身旁的每一缕阳光</span></div>
                </div>
          </div>
      </el-col>
  <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
          <div class="grid-content ">
            <keep-alive>
            <component v-bind:is="comments"  v-on:LoginUser="UserBlock" v-on:Login="LoginBlock"></component>
            </keep-alive>
          </div>
  </el-col>
  </el-row>
</div>
</template>

<script>
//import cLogin from '../TxtBtnLogin/LoginTxt';
export default {
  name: 'Head',
  data () {
    return {
     comments:'cLogin'
    }
  },
  methods:{
    UserBlock:function(){
      this.comments = "cLoginUserBlock";
    },
    LoginBlock:function(){
      this.comments = "cLogin";
    },
    ToMain:function(){
      this.$router.push('main');
    }
  }
}
</script>


<style>
  .Top {
    height:130px;background-color:#6fc9d3;
  }
  .t_logo
{ height:100px; width:200px; cursor:pointer; margin-left:50px; margin-top:15px; float:left;}
.t_show
{ height:100px; width:200px; margin-left:10px; margin-top:5px; float:left;}
.t_login
{width:100px; height:60px; margin-top:45px; float:left; margin-left:15px;}
</style>
