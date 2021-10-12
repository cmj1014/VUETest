<template>
  <div>
    <div>引入其他项目vueCli项目，该项目使用vue脚手架4.5</div>
    <el-button @click="start">启动本地vuecli项目</el-button>
    <!-- <iframe src="http://127.0.0.1:8081" frameborder="0" class="iframe"></iframe> -->
  </div>
</template>

<script>

export default {
  name: "goToVueCli",
  components:{},
  data() {
    return {
    };
  },

  mounted() {
  },
  methods: {
    start(){
      window.open("http://127.0.0.1:8081")
    }
  }
};
</script>
<style scoped>
.iframe{
  width: 100%;
  height: 100%;
  flex:1;
}
</style>
