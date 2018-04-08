<template>
  <div>
      <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-star-on">图表</i></el-breadcrumb-item>
            <el-breadcrumb-item>v-charts图表</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="charts">
        <div>
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </div>
        <div>
          <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
        </div>
        <div>
          <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
        </div>

    </div>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
import VePie from "v-charts/lib/pie";
import VeBar from "v-charts/lib/bar";
export default {
  data() {
    return {};
  },
  components: {
    VeLine,
    VePie,
    VeBar
  },
  created: function() {
    this.chartData = {
      columns: ["日期", "销售额-1季度"],
      rows: [
        { 日期: "1月1日", "销售额-1季度": 1523 },
        { 日期: "1月2日", "销售额-1季度": 1223 },
        { 日期: "1月3日", "销售额-1季度": 2123 },
        { 日期: "1月4日", "销售额-1季度": 4123 },
        { 日期: "1月5日", "销售额-1季度": 3123 },
        { 日期: "1月6日", "销售额-1季度": 7123 }
      ]
    };
  }
};
</script>

<style>
.charts div {
  position: relative;
  top: 0;
  left: 0;
  margin-top: 30px;
  box-shadow: 1px 1px 2px #aaa;
  transition: all 0.2s;
}
.charts div:hover {
  top: -1px;
  box-shadow: 1px 1px 5px #aaa;
}
</style>
