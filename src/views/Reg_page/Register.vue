<template>
<div style="width:100%;">
<div class="c-left-width"></div>
    <div class="meu_main">
      <el-row>
      <div head>
        <div>
            <c-header></c-header>
        </div> 
      </div>
      </el-row>
      <el-row>
      <div class='footer'>
            <c-foot>
              
            </c-foot>
      </div>
      </el-row>
    </div>
<div class="c-right-width"></div>
</div>
</template>

<script>

export default {
  name: 'Reg',
  data () {
    return {
      msg: ''
    }
  }
}
</script>