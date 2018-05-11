<template>
<div class="C_main_user_content">
<div>
  <el-row>
    <el-col :span="24">
      <div class="C_T_title">
         <el-row :gutter="20">
             <el-col :span="4"><div class=" grid-content C_T_name"><span>热门游记</span></div></el-col>
             <el-col :span="16"><div class="grid-content "></div></el-col>
             <el-col :span="4"><div class="grid-content C_T_more"><span>更多</span></div></el-col>
         </el-row>
      </div>
    </el-col>
</el-row>
</div>
<div class="C_user_content">
<el-row>
  <el-col :span="24">
    <div class="C_user_c1">
       <c-hot-block
       v-for="item in hotInfoList1" 
       :key="item.id" 
       v-bind:id="item.id"
       v-bind:title="item.title"
       v-bind:imgUrl="item.imgUrl"
       v-bind:date="item.date"
       v-bind:add="item.add"
       v-bind:uico="item.u_ico"
       >
       </c-hot-block>

    </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
    <div class="C_user_c1">
              <c-hot-block
       v-for="item in hotInfoList2" 
       :key="item.id" 
       v-bind:id="item.id"
       v-bind:title="item.title"
       v-bind:imgUrl="item.imgUrl"
       v-bind:date="item.date"
       v-bind:add="item.add"
       v-bind:uico="item.u_ico"
       >
       </c-hot-block>
    </div>
  </el-col>
</el-row>
</div>
</div>
</template>

<script>
import cHotBlock from '../HotTripBlock/HotTripBlock'; 
export default {
  name: '',
  data () {
    return {
      hotInfoList1:[
        {
          id:1,
          title:'银杏下的秋韵',
          imgUrl:require('../../../static/hotListImg/Trip1.png'),
          date:'2014.10.15',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico1.png')
        },
         {
          id:2,
          title:'停车坐爱枫林晚',
          imgUrl:require('../../../static/hotListImg/Trip2.png'),
          date:'2014.10.22',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico2.png')
        },
         {
          id:3,
          title:'躲在角落的蔷薇',
          imgUrl:require('../../../static/hotListImg/Trip3.png'),
          date:'2014.7.22',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico3.png')
        },
         {
          id:4,
          title:'核聚变博物馆',
          imgUrl:require('../../../static/hotListImg/Trip4.png'),
          date:'2014.7.16',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico4.png')
        }
      ],
      hotInfoList2:[
        {
          id:1,
          title:'夏日清波',
          imgUrl:require('../../../static/hotListImg/Trip5.png'),
          date:'2015.6.15',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico5.png')
        },
         {
          id:2,
          title:'青草盈盈凉半夏',
          imgUrl:require('../../../static/hotListImg/Trip6.png'),
          date:'2015.7.12',
          add:'四川.峨眉',
          u_ico:require('../../../static/hotListImg/u_ico/ico6.png')
        },
         {
          id:3,
          title:'姹紫嫣红惹人爱',
          imgUrl:require('../../../static/hotListImg/Trip7.png'),
          date:'2016.7.22',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico7.png')
        },
         {
          id:4,
          title:'路过曾经的我们',
          imgUrl:require('../../../static/hotListImg/Trip8.png'),
          date:'2015.6.16',
          add:'四川.乐山',
          u_ico:require('../../../static/hotListImg/u_ico/ico8.png')
        }
      ]
    }
  },
  components:{
    cHotBlock

  }
}
</script>

<style>
.C_main_user_content{
  max-width:1060px; 
  margin:0 auto;
}
.C_user_content 
{
    max-width:1060px; 
    height:auto;
    margin:0 auto;
}

.C_user_c1 
{
    max-width:1060px; 
    height:365px;
    margin:0 auto;
}





</style>
