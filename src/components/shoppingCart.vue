<template>
  <div class="dataIndex">
    <div>购物车功能</div>
    <input type="checkbox" @change="handleAllChecked" v-model="isAllChecked" /><span></span> 全选/全不选
    <!-- -->
    <ul>
      <li v-for="(item,index) in list" :key="item.id">
        <input type="checkbox" label v-model="checkGroup" :value="item" />
        <img :src="item.pic" alt />
        <div>
          <div>商品名称:{{item.name}}</div>
          <div>商品价格￥:{{item.price}}</div>
        </div>
        <div>
          <el-button
            type="primary"
            icon="el-icon-minus"
            circle
            @click="item.number--"
            :disabled="item.number==1"
          ></el-button>
          {{item.number}}
          <el-button
            type="primary"
            icon="el-icon-plus"
            circle
            @click="item.number++"
            :disabled="item.number==item.limit "
          ></el-button>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-delete" @click="handleDelete(index,item.id)">删除</el-button>
        </div>
      </li>
    </ul>

    <div>总金额：{{sum()}}</div>
    <!---->
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  data() {
    return {
      checkList: [],
      checkGroup: [],
      isAllChecked: false,
      list: [
        {
          name: "商品1",
          price: 10,
          number: 1,
          id: 1,
          limit: 5, //限购
          pic:
            "https://static.maizuo.com/pc/v5/usr/movie/44dc08914d508fc47c8267c6ca73f2d8.jpg"
        },
        {
          name: "商品2",
          price: 20,
          number: 2,
          id: 2,
          limit: 10, //限购
          pic:
            "https://static.maizuo.com/pc/v5/usr/movie/44dc08914d508fc47c8267c6ca73f2d8.jpg"
        },
        {
          name: "商品3",
          price: 30,
          number: 3,
          id: 3,
          limit: 15, //限购
          pic:
            "https://static.maizuo.com/pc/v5/usr/movie/44dc08914d508fc47c8267c6ca73f2d8.jpg"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    sum() {
      var total = 0;
      this.checkGroup.forEach(item => {
        total += item.price * item.number;
      });
      console.log("total", total);
      return total;
    },
    //全选
    handleAllChecked(ev) {
      console.log("checked",ev.target.checked)
      console.log(this.isAllChecked)
      if (this.isAllChecked) {
        this.checkGroup = this.list;
      } else {
        this.checkGroup = [];
      }
    },
    handleDelete(index, deleteid) {
      //删除
      console.log(deleteid);

      //删除checkgroup数组的对应的元素
      console.log(" this.checkGroup", this.checkGroup);
      // filter
      this.checkGroup = this.checkGroup.filter(item => item.id !== deleteid);

      //删除原数组
      this.list.splice(index, 1);

      //判定是否全选勾上
       this.checked()
    },
    //判定是否全选
    checked() {
      if (this.checkGroup.length === this.list.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
    }
  }
};
</script>
<style scoped>
li {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

li img {
  width: 100px;
}
</style>
