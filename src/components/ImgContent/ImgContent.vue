<template>
<div>
    <div class="Content">
        <el-row>
           <el-col :span="24"><div class="C_pic">
               <img src="./assets/Backgrond.png"/>
               </div></el-col>
        </el-row>
    </div>
    <div class="Content2">
        <el-row>
           <el-col :span="24"><div class="C_pic2">
               <a href ="###" class ="C_pic_DownApp">
                <img src ="./assets/Btn_Down.png" />
            </a>
               </div></el-col>
        </el-row>
    </div>
    <div class="Content">
        <el-row>
        <div class ="C_pic">
            <img src ="./assets/Backg3.png" />
        </div>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
  name: 'Slild',
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style>
.el-row{
    overflow: hidden;
}
.Content 
{
    width:100%; height:580px ;margin:0 auto;margin-top:60px;overflow: hidden;
}
.C_pic 
{
    max-width:1060px;
    height:560px;
    position:relative;
    margin:0 auto;
    background-repeat:no-repeat;
    z-index:5;
    overflow: hidden;
}
.Content2{
    width:100%;
    height:560px;
    background-color:#019877;
    margin:0 auto;
    overflow-x:hidden;
}
.C_pic2 
{
    max-width:1060px;
    height:560px;
    position:relative; 
    background-image:url(./assets/Backg2.png);
    margin:0 auto;
    background-repeat:no-repeat;
    overflow: hidden;
}
.C_pic_DownApp {
    
    width: auto;
    height: auto;
    float:left;   
    margin-top:320px;
    margin-left:316px;
    
}
</style>
