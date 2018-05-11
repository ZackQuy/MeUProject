<template>
  <div class="c_t_cP1">
     <div class ="c_t_cP2">
         <span>{{title}}</span>
      </div>
      <div class ="c_t_cPimg">
         <a href ="####">
           <img v-bind:src="url" />
          </a>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title','url'],
  data () {
      return{
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c_t_cP1
{ 
    width:255px; 
    height:255px; 
    float:left; 
    margin-left:10px; 
    margin-top:10px;}
.c_t_cPimg
{ 
    width:255px; 
    height:255px; 
    position:relative; 
    cursor:pointer;}
.c_t_cP2
{ 
    width:200px; 
    height:45px; 
    z-index:100; 
    margin-left:40px; margin-top:200px; position:absolute; font-size:28px; font-family:微软雅黑; font-weight:400; color:#FFF;

}
</style>
