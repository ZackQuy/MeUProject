<template>
<div>
<el-row>
    <el-col :span="24">
  <div class="Foot">
     <div class ="F_bgpic">
            <div class ="F_ptop">
                <div class ="F_pt_L">
                    <div>
                        <dl>
                            <dt>产品服务</dt>
                            <dd><a href ="####">Me游APP下载</a></dd>
                            <dd><a href ="####">Me游APP功能</a></dd>
                            <dd><a href ="####">Me游地图定制</a></dd>
                            <dd><a href ="####">Me游加盟</a></dd>
                            <dd><a href ="####">Me游注册</a></dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>关于Me游</dt>
                            <dd><a href ="####">公司介绍</a></dd>
                            <dd><a href ="####">公司动态</a></dd>
                            <dd><a href ="####">Me游团队</a></dd>
                            <dd><a href ="####">问题帮助</a></dd>
                            <dd><a href ="####">联系我们</a></dd>

                        </dl>

                    </div>
                    <div>
                        <dl>
                            <dt>帮助反馈</dt>
                            <dd><a href ="####">APP使用帮助</a></dd>
                            <dd><a href ="####">APP问题反馈</a></dd>
                            <dd><a href ="####">官网问题反馈</a></dd>
                            <dd><a href ="####">客服反馈</a></dd>
                            

                        </dl>

                    </div>
                    <div>
                        <dl>
                            <dt>友情链接</dt>
                            <dd><a href ="####">中国旅游网</a></dd>
                            <dd><a href ="####">去哪儿网</a></dd>
                            <dd><a href ="####">面包旅游</a></dd>
                            

                        </dl>

                    </div>
                
                </div>
                <div class ="F_pt_C">

                </div>
                <div class ="F_pt_R">

                </div>
            </div>
            <div class ="F_pbottom">

            </div>
     </div>
  </div>
    </el-col>
</el-row>
</div>
</template>

<script>


export default {
  name: 'Foot',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.Foot 
{
    width:100%; height:300px;background-color:#1b1f28;
}

.F_bgpic 
{
    width:1060px;height:300px;margin:0 auto;background:url('./img/foot2.png')
}

.F_ptop 
{
    width:1060px;height:215px;
}

.F_pt_L 
{
    width:550px;height:215px; float:left;
}

    .F_pt_L div 
    {
        width:137px;height:215px;float:left;
    }

    .F_pt_L dl 
    {
        float:left;width:137px;height:215px;line-height:24px;
    }

        .F_pt_L dl dt 
        {
            font-size:16px;color:#5e6064;font-family:'Microsoft YaHei';margin-left:41px;margin-top:10px;font-weight:600;margin-bottom:10px;
        }
        .F_pt_L dl a 
        {
            font-size:14px;color:#5e6064;font-family:'Microsoft YaHei';margin-top:14px;font-weight:600
        }

.F_pt_C 
{
    width:310px;height:215px; float:left;
}

.F_pt_R 
{
    width:200px;height:215px; float:left;
}

.F_pbottom 
{
    width:1060px;height:85px;
}
</style>
