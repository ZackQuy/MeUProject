<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import cMain from './views/main_page/Main';
import api from './api/api';
import index from './common/business/index';
import store from './vuex/store'
export default {
  name: 'App',
  components: {
    cMain
  },
  created:function(){
    var data = {};
    data.strList = index.random();
    api.get(data).then((res) => {
        var result = JSON.parse(res.d);
        if(result.success){
         //this.$message(result.message);
         sessionStorage.setItem("code",result.data); 
         store.state.code=result.code;
         
        }
    })
    .catch(function (error) {
      this.$message(error.message);
     
      console.log(error);
  });
  }
}
</script>

<style>


</style>
