<template>
  <div class ="C_user_c_new">
                    <div class ="C_user_c_img">
                        
                            <img v-bind:src ="imgUrl" />
                        
                    </div>
                    <div class="C_user_c_txt">
                        <div class ="C_user_c_theme">
                            <div class ="C_user_c_word">
                                
                                    <span>{{title}}</span>
                                
                            </div>
                        </div>
                        <div class =" C_user_c_adic">
                            <div class ="C_user_c_adress">
                                <div class ="C_user_c_swordt">
                                    <span>{{date}}</span>
                                </div>
                                <div class ="C_user_c_swordp">
                                    <span>{{add}}</span>
                                </div>
                            </div>
                            <div class ="C_user_c_ico">
                                <div class ="C_user_c_icopic">
                                    <img v-bind:src="uico"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  props: ['id','title','imgUrl','imgUrl','date','add','uico'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.C_user_c_new 
{
    width:255px; 
    height:345px; 
    float:left; margin-top:10px; margin-left:10px; background-color:#FFF;
}

.C_user_c_img 
{
    width:255px; 
    height:232px;
    cursor:pointer
}
.C_user_c_img img{
    width: 100%;
    height: 100%;
}
.C_user_c_txt 
{
    width:255px; 
    height:115px;
}

.C_user_c_theme 
{
    width:255px; 
    height:40px;
}

.C_user_c_word 
{
    color:#686868; 
    font-weight:bold; 
    font-family:宋体; 
    font-size:20px; 
    margin-left:10px; 
    margin-top:18px;
    
}

.C_user_c_word span {
        cursor:pointer;
    }

 .C_user_c_word span:hover {
        cursor:pointer;color:#168391;
    }

.C_user_c_adic 
{
    width:255px; 
    height:75px;
}

.C_user_c_adress 
{
    width:169px; 
    height:75px; 
    float:left;
}

.C_user_c_swordt 
{
    color:#979797; 
    font-weight:400; 
    font-family:微软雅黑; font-size:12px; margin-left:10px; margin-top:0px;
}

.C_user_c_swordp 
{
    color:#979797; font-weight:400; font-family:微软雅黑; font-size:12px; margin-left:10px; margin-top:2px;
}

.C_user_c_ico 
{
    width:86px; height:75px; float:left
}

.C_user_c_icopic 
{
    width:40px; height:40px; margin-left:20px; margin-top:10px; cursor:pointer
}
</style>
