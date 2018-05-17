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
                 <el-button style="width:290px;" :loading="btnload" type="primary" @click="submitForm('ruleForm')">登录</el-button> 
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
    var checkUser = (rule, value, callback) => {
      //校验规则 正则表达式  只允许输入 数字跟字母   
        var reg=/^[^0-9]+[0-9a-zA-Z_-]/;/*用户*/  
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          //通过正则方法 可以拿到一个boolean类型的值 判断 
          var con_user = reg.test(value);
          if(con_user)
          {
            //todo 数据库校验是否重名
            callback();
          }
          else{
            callback(new Error('用户名: 必须是字母数字或下划线, 不能以数字开头'));
          }
        }, 1000);
      };
      var checkPwd = (rule, value, callback) => {
      //校验规则 正则表达式  只允许输入 数字跟字母   
        var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//8到16位数字与字母组合
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          //通过正则方法 可以拿到一个boolean类型的值 判断 
          var con_pwd = pwdReg.test(value);
          if(con_pwd)
          {
            //todo 
            callback();
          }
          else{
            callback(new Error('密码: 8到16位数字与字母组合密码'));
          }
        }, 1000);
      };
    return {  
        dialogTableVisible: true,
        dialogFormVisible: true, 
        btnload:false,     
        ruleForm: {
          pwd: '',
          name: ''
        },
        rules2: {//建立验证规则
          pwd: [
            { validator: checkPwd, trigger: 'blur' }
          ],
          name: [
            { validator: checkUser, trigger: 'blur' }
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
      this.btnload = true;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            var data ={};
            data.strList= JSON.stringify(this.ruleForm);
            data.strList2= store.state.code;
            api.loginUser(data).then((res) => {
            var result = JSON.parse(res.d);
           if(result.success)
           {
             var u_data = JSON.parse(result.data);
             self.$message(result.message);
            // store.saveLocal(store,u_data[0]);
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
     self.btnload = false;
      console.log(error);
  });
          } else {
            console.log('error submit!!');
            self.btnload = false;
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
