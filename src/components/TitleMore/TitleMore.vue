<template>
  <div class="">
<el-row>
    <el-col :span="24">
      <div class="C_T_title">
         <el-row :gutter="20">
             <el-col :span="2"><div class=" grid-content C_T_name"><span>旅游攻略</span></div></el-col>
             <el-col :span="20"><div class="grid-content "></div></el-col>
             <el-col :span="2"><div class="grid-content C_T_more"><span>更多</span></div></el-col>
         </el-row>
      </div>
    </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.C_T_title 
{
    width:100%;
    height:90px; 
    margin:0 auto;
}

.C_T_name 
{
    width:130px;
    height:60px; 
    float:left; 
    margin-top:30px;
}
.C_T_name span{
  color:#555555; font-size:28px; font-weight:bold
}
.C_T_more 
{ 
    height:60px; 
    float:left; 
    margin-top:30px; 
    text-decoration: none;
}
.C_T_more span{
  color:#686868; font-size:26px; font-weight:bold;cursor:pointer;
}
</style>
