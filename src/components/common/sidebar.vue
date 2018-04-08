<template>
    <div class="sidebar">
        <el-menu background-color="#2e363f" text-color="#fff" unique-opened router>
            <!--
                unique-opened:是否只保持一个子菜单的展开
                router:是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
            -->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem, index) in item.subs" :key="index" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-setting",
          index: "me",
          title: "自述"
        },
        {
          icon: "el-icon-menu",
          index: "2",
          title: "表格",
          subs: [
            {
              index: "basetable",
              title: "基础表格"
            },
            {
              index: "vuetable",
              title: "Vue表格组件"
            }
          ]
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "表单",
          subs: [
            {
              index: "upload",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "el-icon-star-on",
          index: "vcharts",
          title: "图表"
        }
      ]
    };
  }
};
</script>

<style>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar > ul {
  height: 100%;
}
</style>
