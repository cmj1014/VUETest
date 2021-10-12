<template>
  <el-container direction="vertical">
    <el-header>Header</el-header>

    <el-container direction="horizontal ">
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script>

import { ElContainer } from "element-ui";
export default {
  name: "Main",
  components: { ElContainer },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item)
    };
  },
  mounted() {}
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* .main {
  margin: 0;
  padding: 0;
} */
</style>
