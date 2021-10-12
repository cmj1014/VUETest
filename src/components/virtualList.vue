<template>
  <div class="dataIndex">
    <h1>虚拟列表组件</h1>
    <div>git地址：https://github.com/kl2426/vue-element-bigdata-table</div>
    
    <ElBigdataTable highlight-current-row
                    ref="singleTable"
                    :data="list"
                    :height="450"
                    :row-height="38"
                    style="width: 100%">

 <el-table-column property="id"
                       label="日期"
                       width="120">
      </el-table-column>
       <el-table-column property="value"
                       label="value"
                       width="120">
      </el-table-column>
       <el-table-column property="text"
                       label="text"
                       width="120">
      </el-table-column>
    </ElBigdataTable>
  </div>
</template>

<script>

export default {
  name: "virtualList2",
  computed: {
   
  },
  data() {
    return {
      list: [],
      page: 0,
      itemHeightGetter(item, index) {
        if (item.no % 33 === 0) {
          return 100;
        }
        return 20 + (item.no % 10);
      },
      defaultItemHeight: 30,
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
  async created() {
    // this.list = await this.getData();
    // this.init();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 100000; i++) {
        this.list.push({ id: i, value: i, text: "text" + i, dic: "dic" + i });
      }
      // console.log("init", this.list);
    },
    async listScroll(data) {
      console.log("listScroll data", data);
      console.log("listScroll _getting", this._getting);
      if (!this._getting && data.bottomItemIndex >= this.list.length - 3) {
        this._getting = true;
        // this.list.push(...(await this.getData()));
        this.page++;
        this._getting = false;
      }
    },
    filterTag (value, row) {
      return row.name === value;
    },
    getData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const baseIndex = this.page * 2000;
          resolve(
            new Array(2000).fill(0).map((i, index) => {
              return {
                no: baseIndex + index,
                color: ["#33d", "#3d3", "#d33", "#333"][
                  (Math.random() * 4) | 0
                ],
              };
            })
          );
        }, 100);
      });
    },
  },
};
</script>
<style scoped>
.dataIndex {
  height: 100%;
}
.container {
  height: 400px;
  width: 500px;
  margin: 50px auto;
  border: 1px solid #eee;
}
.item {
  height: 100%;
  display: flex;
  align-items: center;
}
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
