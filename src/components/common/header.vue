<template>
  <div class="myHeader">
      <div class="logo">后台管理系统</div>
      <div class="user-info">
          <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                  <img src="../../../static/img/img.jpg" class="user-logo">
                  {{username}}
              </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="loginout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
      <div class="loading-mask" v-if="passLoad">
        <vue-loading type="bars" color="#97a8be" :size="{ width: '80px', height: '80px' }" class="loading"></vue-loading>
      </div>
  </div>
</template>

<script>
import vueLoading from 'vue-loading-template'
export default {
  name: "myHeader",
  data() {
    return {
      name: "tobee",
      passLoad: false
    };
  },
  components: {
    vueLoading
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      let that = this;
        if(command == 'loginout') {
            localStorage.removeItem('ms_username');
            that.passLoad = true;
            setTimeout(() => {
              that.$router.push('/login');
            }, 2000)
        }
    }
  }
};
</script>

<style>
.myHeader {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
}
.myHeader .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.loading-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .4);
}
.loading {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
