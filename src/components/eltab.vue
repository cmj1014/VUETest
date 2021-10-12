<template>

  <div class="dataIndex">
    <h1 @click="showAction">表格</h1>
    <ul>
      <li v-for="item in tableData" :key="item.address">
        {{item.name}}
      </li>
    </ul>
    <el-table
    :data="tableData"
    style="width: 100%"
    v-if="showFlag"
    >
    <el-table-column
      type="index"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: "eltab",
  data() {
    return {
      list: [],
      showFlag:false,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 100; i++) {
        this.list.push({ id: i, value: i, text: "text" + i, dic: "dic" + i });
      }
      // console.log("init", this.list);
    },
    showAction(){
      this.showFlag = !this.showFlag
      console.log("this.show",this.showFlag)
    }
    
  },
};
</script>
<style scoped>
</style>
