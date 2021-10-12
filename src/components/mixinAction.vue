<template>
  <div class="dataIndex">
    <div>中央事件总线</div>
    <div>通过一个组件订阅，一个组件发起来收发消息</div>
    <el-button @click="go"> 开始启动</el-button>
  </div>
</template>

<script>
export default {
  name: "bug",
  data() {
    return {
    };
  },

  mounted() {
  },
  methods: {
    go() {
     console.log("this.minxinOne",this.minxinOne)
    },
    
  }
};
</script>
<style scoped></style>
