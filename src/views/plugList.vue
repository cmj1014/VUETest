<template>
  <div>
    <div class="btnList">
      <el-button type="primary" @click="getComponent('SwiperPlug')">轮播图swiper</el-button>
      <el-button type="primary" @click="getComponent('NavMenu')">导航菜单</el-button>
<el-button type="primary" @click="getComponent('MainSlot')">常用插件合集</el-button>
<el-button type="primary" @click="getComponent('MediaQuery')">媒体查询插件</el-button>
<el-button type="primary" @click="getComponent('Echarts')">echarts图表</el-button>
      
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
import SwiperPlug from "@/components/plugList/swiperPlug.vue";
import NavMenu from "@/components/navMenu.vue";
import MainSlot from "@/components/slotList/mainSlot.vue";
import MediaQuery from "@/components/slotList/mediaQuery.vue";
import Echarts from "@/components/echarts/echarts.vue";
export default {
  name: "plugList",
  components: { SwiperPlug,NavMenu,MainSlot,MediaQuery,Echarts},

  data() {
    return {
      component: ""
    };
  },

  methods: {
    getComponent(str) {
      this.component = str;
    }
  },

  mounted() {
    //默认加载模糊查询
    this.component = "";
  }
};
</script> 

<style scoped>
.btnList {
  width: 100%;
}
</style>