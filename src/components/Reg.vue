<template>
  <div class="dataIndex">
    <div>正则表达式-Reg.vue</div>
    <h2>函数使用说明</h2>
    <p>test: 返回true或false。正则.test(内容)</p>
    <p>search: 返回匹配起始位。正则.search(内容)</p>
    <p>exec: 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。正则.exec(内容)</p>
    <p>match: 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配.内容.match(正则)</p>
    <p>
      <a href="https://tool.oschina.net/uploads/apidocs/jquery/regexp.html">js正则表达式手册</a>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;" size="small">
  常用匹配符号
</el-button>
    </p>
    <input type="text" v-model="text" @input="regTest" placeholder="输入要匹配内容" />
    {{restring}}
    <el-radio v-model="radio" label="1">长度3到20位</el-radio>
    <el-radio v-model="radio" label="2">英文|数字|下划线</el-radio>

    <!-- 常用匹配符号容器 -->
    <el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false">
  <RegMark></RegMark>
</el-drawer>
    
  </div>
</template>

<script>

import RegMark from "@/components/RegMark.vue";
export default {
  name: "Reg",
  data() {
    return {
      reg: "", //表达式内容
      text: "", //内容
      radio: "1",
      restring: "",
      drawer:false
    };
  },
  components: { RegMark },
  mounted() {},
  methods: {
    //^.{3,20}
    regTest() {
      let { radio, text, getReg } = this;
      let str = getReg(radio);

      console.log(str, text);
      this.restring = str.test(text);
    },
    getReg(num) {
      let str = "";
      switch (num) {
        case "1":
          str = /^.{3,20}/;
          break;
        case "2":
          str = /^\w$/;
          break;
        default:
          str = "";
          break;
      }
      return str;
    }
  }
};
</script>
<style scoped></style>
