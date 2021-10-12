<template>
  <div>
    <div class="btnList">
      <el-button type="primary" @click="getComponent('Directive')">自定义指令</el-button>
      <el-button type="primary" @click="getComponent('I18n')">国际化</el-button>
      <el-button type="primary" @click="getComponent('VirtualList')">虚拟列表</el-button>
      <el-button type="primary" @click="getComponent('BScroll')">自己创建滚动组件</el-button>
    </div>
<keep-alive>
  <transition 
    enter-active-class="animated zoomInDown"
    leave-active-class="animated zoomOutDown"
    mode="out-in">
    <component :is="component"></component>
  </transition>

</keep-alive>
    
  </div>
</template>

<script>
import Directive from "@/components/vueList/directive.vue";
import I18n from "@/components/vueList/i18n.vue";
import VirtualList from "@/components/vueList/virtualList.vue";
import BScroll from "@/components/vueList/BScroll.vue";
export default {
  name: "vueList",
  components: { Directive,I18n,VirtualList,BScroll},
  data() {
    return {
      component: ""
    };
  },
  mounted() {
    //默认加载模糊查询
    this.component = "";
  },
  methods: {
    getComponent(str) {
      this.component = str;
    },
  }
};
</script>
<style scoped>
.dataIndex{
  height: 100%;
}
.btnList {
  width: 100%;
}
</style>
