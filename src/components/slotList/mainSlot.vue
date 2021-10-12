<template>
  <div class="dataIndex">
    下面是常用插件官网和使用领域介绍
    <div class="flex">
     <div class="flex1">Moment.js 时间格式化 moment('时间戳').format('MMMM Do YYYY, h:mm:ss a');</div>
     <div class="flex1"><el-link type="primary" href="http://momentjs.cn/">http://momentjs.cn/</el-link></div>
    </div>
    <div class="flex">
     <div class="flex1">常用前端插件合集</div>
     <div class="flex1"><el-link type="primary" href="https://blog.csdn.net/qq_41720311/article/details/83096495">https://blog.csdn.net/qq_41720311/article/details/83096495</el-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transitionSlot",
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style scoped>
.flex{
  display: flex;
}
.flex1{
  flex: 1;
}
</style>
