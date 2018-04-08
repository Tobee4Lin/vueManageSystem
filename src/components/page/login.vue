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
      <div class="loading-mask" v-if="passLoad">
        <vue-loading type="spiningDubbles" color="#97a8be" :size="{ width: '150px', height: '150px' }" class="loading"></vue-loading>
      </div>
  </div>
</template>

<script>
import vueLoading from "vue-loading-template";
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
      },
      passLoad: false
    };
  },
  components: {
    vueLoading
  },
  methods: {
    submitForm: function(formName) {
      let that = this;
      this.$refs[formName].validate(value => {
        if (value) {
          localStorage.setItem("ms_username", that.ruleForm.username);
          that.passLoad = true;
          setTimeout(() => {
            that.$router.push("/readme");
          }, 2000);
        } else {
          alert("error submit");
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
.loading-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .8);
  z-index: 111;
}
.loading {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
