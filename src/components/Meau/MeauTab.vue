<template>
<div class="meau_main">
  <el-row :gutter="10">
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="5">
          <div class="grid-content ">
              
          </div>
      </el-col>
      <el-col :xs="24" :sm="22" :md="16" :lg="16" :xl="14">
          <div class="grid-content ">
            <div >
              <el-menu
  :default-active="activeIndex2"
  
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">热门游记</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">旅游攻略</el-menu-item>
  <el-menu-item index="4">目的地</el-menu-item>
  <el-menu-item index="5">新闻动态</el-menu-item>
  <el-menu-item index="6">关于Me游</el-menu-item>
  <el-menu-item index="7">联系我们</el-menu-item>
</el-menu>
            </div>
          </div>
  </el-col>
  <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="5">
          <div class="grid-content ">
              
          </div>
  </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'MeauTab',
  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1'
    }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style >
.meau_main{
  background-color: #545c64;
 
}
.el-menu {
    width: -moz-fit-content; 
    width: -webkit-fit-content; 
    width: fit-content; 
    margin: 0 auto;
  }
  .grid-content {
    height: 60px;
    
  }
</style>
