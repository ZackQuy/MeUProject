<template>
  <div>
     <el-dialog title="登录" width = "400px" :visible.sync="dialogTableVisible" :before-close="handleClose">
       <div class="L_content ">
         <div class="L_content_title">
           <div>
              <p>欢迎登陆MeU</p></div>
           </div>
         <div class="L_content_min">
           <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm">
             <el-form-item style="margin-left: 52px;margin-top: 45px" label="用户名/邮箱" prop="name">
             
             <el-input style="width:200px" v-model="ruleForm.name" auto-complete="off"></el-input>
             </el-form-item>
             <el-form-item style="margin-left: 100px; margin-top: 30px" label="密码" prop="pwd">
             
             <el-input type="password" v-model="ruleForm.pwd" style="width:200px" auto-complete="off"></el-input>
             </el-form-item>
             <el-form-item style="text-align: center;margin-top: 30px"> 
                 <el-button style="width:290px;" type="primary" @click="submitForm('ruleForm')">登录</el-button> 
            </el-form-item>
          </el-form>
         </div>
       </div>
  
</el-dialog>
  </div>
</template>

<script>
import store from '../../vuex/store';
import api from '../../api/index';
export default {
  data () {
    var check = (rule, value, callback) => {//验证输入
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else{
          callback();//返回函数
        }
      };
      var valiPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
    return {  
        dialogTableVisible: true,
        dialogFormVisible: true,      
        ruleForm: {
          pwd: '',
          name: ''
        },
        rules2: {//建立验证规则
          pwd: [
            { validator: valiPass, trigger: 'blur' }
          ],
          name: [
            { validator: check, trigger: 'blur' }
          ]
        },
        formLabelWidth: '90px'
    };
    

  },
  methods:{
    handleClose(done){//监听关闭按钮
         this.$emit("closeDialog","");
    },
    handleLogin(msg,comment){//登录成功，传值到父组件，切换到用户组件
         this.$emit(msg,comment);
    },
    submitForm(formName){//提交表单数据
      var self = this;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            var data ={};
            data.strList= JSON.stringify(this.ruleForm);
            api.loginUser(data).then((res) => {
            var result = JSON.parse(res.d);
           if(result.success)
           {
             var u_data = JSON.parse(result.data);
             self.$message(result.message);
             sessionStorage.setItem("username", u_data[0].username);  //添加到sessionStorage  
             sessionStorage.setItem("isLogin",true);  
             sessionStorage.setItem("userId",u_data[0].accountId); 
             store.state.username=u_data[0].username;             //同步的改变store中的状态  
             store.state.userId=u_data[0].accountId;  
             store.state.isLogin=true;
             self.handleLogin("LoginUser","");
             console.log(u_data[0].username);
          }
      else{
             self.$message(result.message);
             self.btnload = false;
      }
      
    })
    .catch(function (error) {
     // self.$message(error.message);
      console.log(error);
  });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.L_content 
{
    width:400px;
    height:300px;
}
.L_content_title 
{
    width:400px;
   
}

.L_content_title p{
  text-align: center;
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.el-dialog__body{
  padding: 0px 0px;
}
.L_content_min 
{
    width:400px;
    height:250px;
    
}
</style>
