<template>
  <el-container direction="vertical">
    <el-header>Header</el-header>
    <div class="menu">
      <div class="aside">Aside</div>
      <div class="main">
        Main
        <br />
        <div>vuex value: {{$store.state.cityName}}</div>
        <div>
          <span>修改vuex值</span>
          <input type="text" v-model="vuexVal" @input="changeName(vuexVal)" />
          <div class="buttonC">
            <div class="buttonCItem">
              <div class="btn" @click="showTab" >show</div>
              <div class="btn" @click="hideTab">hide</div>
              <div class="btn getDataBtn"  @click="getdata">异步请求数据</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      <div class="tabbar" v-if="$store.state.tabbarFlag"></div>
  </el-container>

</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import { ElContainer } from "element-ui";
export default {
  name: "Main",
  components: { ElContainer },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
     
    };
    return {
       vuexVal:"",
      tableData: Array(10).fill(item)
    };
  },
  methods:{
    changeName(value){
      this.vuexVal = value;
      this.$store.commit("changeCityName",value);
    },
    showTab(){
      this.$store.commit("showTab");
    },
    hideTab(){
      this.$store.commit("hideTab");
    },
    getdata(){
      //请求数据
      this.$store.dispatch("getData","123id")
    }
  }
};
</script>
<style scoped>
.menu {
  display: flex;
}
.aside {
  width: 200px;
}
.main {
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside,
.aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main,
.main {
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
.main {
  margin: 0;
  padding: 0;
}
.buttonC{
  display: flex;
}
.buttonCItem{
  display: flex;
  margin: auto;
}
.btn{
  cursor: pointer;
  width: 60px;
  height: 30px;
  background: beige;
  text-align: center;
  color: #e9eef3;
  display: block;
  margin: 0 16px;
}
.getDataBtn{
  background: chartreuse;
}
.tabbar{
  width: 100%;
  height: 40px;
  background: brown;
}
</style>
