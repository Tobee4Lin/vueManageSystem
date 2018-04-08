<template>
  <div class="table">
      <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>表格</el-breadcrumb-item>
            <el-breadcrumb-item>基础表格</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="handle-box">
        <el-button type="primary" class="handle-del mr10" @click="delAll"><i class="el-icon-delete"></i> 批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select">
            <el-option v-for="(opt, index) in opts" :key="index" :value="opt.value">{{opt.value}}</el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
        <el-button type="primary" @click="search"><i class="el-icon-search"></i> 搜索</el-button>
      </div>
      <el-table :data="data" border maxHeight="348" ref="multipleTable" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" sortable width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
        <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-button size="small"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            @current-change ="handleCurrentChange"
            layout="prev, pager, next"
            :total="100">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "baseTable",
  data() {
    return {
      opts: [
        { value: "广东省" },
        { value: "湖南省" },
        { value: "江西省" },
        { value: "江苏省" }
      ],
      url: "../../../static/vuetable.json",
      cur_page: 1, //记录当前页数
      tableData: [], //存放表格的每一条记录
      is_search: false,
      multipleSelection: [], //记录选项
      del_list: [],
      select_cate: "",
      select_word: ""
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    getData: function() {
      let self = this;
      axios.get(self.url).then(res => {
        self.tableData = res.data.list;
      });
    },
    search: function() {
      this.is_search = true;
    },
    formatter: function(row, col) {
      return row.address;
    },
    handleEdit: function(index, row) {
      this.$message("编辑第" + (index + 1) + "行");
    },
    handleDelete: function(index, row) {
      let self = this;
      self.$msgbox
        .confirm("确定要删除该行数据吗？", "提示", {
          type: "wraning"
        })
        .then(() => {
          self.tableData.splice(index, 1);
          self.$message({
            type: "success",
            message: "删除成功"
          });
        })
        .catch(() => {
          self.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSelectionChange: function(val) {
      this.multipleSelection = val;
    },
    delAll: function() {
      const self = this;
      let length = self.multipleSelection.length;
      let str = "";
      self.del_list = self.del_list.concat(self.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += self.multipleSelection[i].name + "";
      }
      self.$message.error("删除了" + str);
      self.multipleSelection = [];
    }
  },
  computed: {
    data() {
      const self = this;
      return self.tableData.filter(function(d) {
        let is_del = false;
        for (let i = 0; i < self.del_list.length; i++) {
          if (d.name === self.del_list[i].name) {
            is_del = true;
            break;
          }
        }
        if (!is_del) {
          if (
            d.address.indexOf(self.select_cate) > -1 &&
            (d.name.indexOf(self.select_word) > -1 ||
              d.address.indexOf(self.select_word) > -1)
          ) {
            return d;
          }
        }
      });
    }
  }
};
</script>

<style>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
</style>
