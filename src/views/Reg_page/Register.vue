<template>
<div style="width:100%;display: flex;
  flex-direction: column;background-color: #f5f5f5;">
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
        <div style="flex: 1;">
        <div class="r_title">
          <span>
              创建您的MeU账户
          </span>
        </div>
        <div style="margin: 20px;"></div>
        <div class="r_form">
          <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="uername">
              <el-input v-model="ruleForm.uername"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input type="password" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
             <el-form-item style="text-align: center;">
              <el-button type="primary" :loading="btnload" @click="submitForm('ruleForm')">创建账户</el-button>
              <el-button :disabled="btnload" @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
          </el-form>
        </div>
        </div>
      </el-row>
      <el-row>
        <c-img-content>

       </c-img-content>
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
import axios from 'axios';
import api from '../../api/index';
import store from '../../vuex/store';
import cImgContent from '../../components/ImgContent/ImgContent';
//store.state.isLogin = false;
export default {
  name: 'Reg',
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
      var checkEmail = (rule, value, callback) => {
      //校验规则 正则表达式    
        var reg= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        setTimeout(() => {
          //通过正则方法 可以拿到一个boolean类型的值 判断 
          var con_email = reg.test(value);
          if(con_email)
          {
            //todo 数据库校验是否重名
            callback();
          }
          else{
            callback(new Error('邮箱: 地址不符合规则'));
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
      labelPosition: 'left',
      btnload:false,
      
       ruleForm: {
          uername: '',
          email: '',
          pwd: ''
        },
        rules: {
          uername: [
            { validator: checkUser, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          pwd: [
            { validator: checkPwd, trigger: 'blur' }
          ]
        }

    }
  },
  components:{
    cImgContent
  },
  methods: {
      submitForm(formName) {
        var self = this;
        this.btnload = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data ={};
            data.strList= JSON.stringify(this.ruleForm);
            data.strList2= sessionStorage.getItem('code');
            
            api.postUserData(data).then((res) => {
            var result = JSON.parse(res.d);
           if(result.success)
           {
             self.$message(result.message);
             var u_data = JSON.parse(result.data);
             sessionStorage.setItem("username", u_data.uername);  //添加到sessionStorage  
             sessionStorage.setItem("isLogin",true);  
             sessionStorage.setItem("userId",u_data.accountId); 
             store.state.username=u_data.uername;             //同步的改变store中的状态  
             store.state.userId=u_data.accountId;  
            store.state.isLogin=true;
             self.$router.push('/');
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
            //alert('submit!');
            //this.$router.push('/');
          } else {
            console.log('error submit!!');
            self.btnload = false;
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style>
.r_title{
  margin-top: 20px;
  font-size: 18px;
  color: #606266;
  text-align: center;
  height: auto;
 
}
.r_form{
  
  width: 400px;
  height: auto;
  margin: 0 auto;
}
</style>