<template>
<div class="c_main">
<div>
  <el-row>
    <el-col :span="24">
      <div class="C_T_title">
         <el-row :gutter="20">
             <el-col :span="4"><div class=" grid-content C_T_name"><span>旅游攻略</span></div></el-col>
             <el-col :span="16"><div class="grid-content "></div></el-col>
             <el-col :span="4"><div class="grid-content C_T_more"><span>更多</span></div></el-col>
         </el-row>
      </div>
    </el-col>
</el-row>
</div>
<div class="C_T_Content">
<el-row>
  <el-col :span="24">
    <div class="c_t_conPlan">
       <c-trip-plan-block 
       v-for="item in tripPlanList1" 
       :key="item.id" 
       v-bind:id="item.id"
       v-bind:title="item.title"
       v-bind:url="item.url"
       >
       </c-trip-plan-block>
    </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
    <div class="c_t_conPlan">
       <c-trip-plan-block
       v-for="item in tripPlanList2" :key="item.id"
       v-bind:id="item.id"
       v-bind:title="item.title"
       v-bind:url="item.url"
       >
       </c-trip-plan-block>

    </div>
  </el-col>
</el-row>
</div>
</div>
</template>

<script>
import cTripPlanBlock from '../TripPlanBlock/TripPlanBlock';

export default {
  name: '',
  data () {
    return {
      tripPlanList1:[
        {
          id:1,
          title:'大相岭',
          url:require('../../../static/tripListImg/Plan1.png')
        },
        {
          id:2,
          title:'嘉定坊',
          url:require('../../../static/tripListImg/Plan2.png')
        },
        {
          id:3,
          title:'锦里',
          url:require('../../../static/tripListImg/Plan3.png')
        },
        {
          id:4,
          title:'嘉州长卷',
          url:require('../../../static/tripListImg/Plan4.png')
        }
        
      ],
      tripPlanList2:[
        {
          id:5,
          title:'峨眉',
          url:require('../../../static/tripListImg/Plan5.png')
        },
        {
          id:6,
          title:'嘉定南路',
          url:require('../../../static/tripListImg/Plan6.png')
        },
        {
          id:7,
          title:'大佛禅院',
          url:require('../../../static/tripListImg/Plan7.png')
        },
        {
          id:8,
          title:'街子古镇',
          url:require('../../../static/tripListImg/Plan8.png')
        }
      ]
    }
  },
  components:{
    cTripPlanBlock,

  }
}
</script>

<style>
.c_main{
  margin-top: 10px;
  max-width:1060px; 
  margin: 0 auto;
}
.C_T_Content 
{
    max-width:1060px; 
    height:auto; 
    margin:0 auto;
}

.c_t_conPlan
{ 
    max-width:1060px; 
    height:270px; 
    margin-top:5px;

}
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
    float:right; 
    margin-top:30px; 
    text-decoration: none;
}
.C_T_more span{
  color:#686868; font-size:26px; font-weight:bold;cursor:pointer;
}
</style>
