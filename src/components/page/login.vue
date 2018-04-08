<template>
  <div class="login-wrap">
      <div class="ms-title">后台管理系统</div>
      <div class="ms-login">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="username">
                  <el-input v-model="ruleForm.username" placeholder="username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input v-model="ruleForm.password" placeholder="password"></el-input>
              </el-form-item>
              <div class="login-btn">
                  <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
              </div>
              <p class="tips">Tips : 用户名和密码随便填。</p>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", tigger: "blur" }],
        password: [{ required: true, message: "请输入密码", tigger: "blur" }]
      }
    };
  },
  methods: {
      submitForm: function(formName) {
          let that = this;
          this.$refs[formName].validate(value => {
              if(value) {
                  localStorage.setItem('ms_username', that.ruleForm.username);
                  that.$router.push('/readme');
              } else {
                  alert('error submit');
                  return;
              }
          });
      }
  }
};
</script>

<style>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  color: #fff;
  text-align: center;
  font-size: 30px;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
.tips {
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
</style>
