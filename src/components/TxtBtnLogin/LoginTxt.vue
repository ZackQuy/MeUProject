<template>
<div class ="t_login">
                    <div style="float:left" ><a  style="color:#FFF;font-weight:300; font-size:19px;cursor:pointer;" 
                    onmouseover ="this.style.cssText ='color:#168391;font-weight:300; font-size:19px;cursor:pointer;'" 
                    onmouseout="this.style.cssText='color:#FFF;font-weight:300; font-size:19px;cursor:pointer;'"
                    @click="Register"
                    >
                    注册</a></div>
                    <div style="float:left"><img style="height:22px;" src ="./img/split.png" /></div>
                    <div style="float:left" ><a  style="color:#FFF;font-weight:300; font-size:19px;cursor:pointer;" 
                    onmouseover ="this.style.cssText ='color:#168391;font-weight:300; font-size:19px;cursor:pointer;'"
                     onmouseout="this.style.cssText='color:#FFF;font-weight:300; font-size:19px;cursor:pointer;'"
                     @click='Login'
                     >
                     登录</a></div> 
                     <component v-bind:is="comments" v-on:closeDialog="close" v-on:LoginUser="UserBlock"></component>
                     
 </div>
</template>

<script>

export default {
  data () {
    return {
       comments:''
    }
  },
  methods:{
    Login:function(){
      this.comments = "cLoginDialog";
    },
    UserBlock:function(){
      this.comments = "";
      this.$emit('LoginUser');
      
    },
    close:function(){
     this.comments = "";
    },
    Register:function(){
      this.$router.push('Resister');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
