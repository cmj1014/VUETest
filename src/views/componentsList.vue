<template>
  <div>
    <div class="btnList">
      <el-button type="primary" @click="getComponent('LikeData')">模糊查询</el-button>
      <el-button type="primary" @click="getComponent('ActionList')">事件处理器</el-button>
      <el-button type="primary" @click="getComponent('ShoppingCart')">购物车</el-button>
      <el-button type="primary" @click="getComponent('REG')">正则</el-button>
       <el-button type="primary" @click="getComponent('Html2canvas')">截图</el-button>
       <el-button type="primary" @click="getComponent('MixinAction')">混入器</el-button>
       <el-button type="primary" @click="getComponent('Bus')">中央控制总线</el-button>
       <el-button type="primary" @click="getComponent('SlotBox')">插槽</el-button>
      <el-button type="primary" @click="getComponent('TransitionSlot')">动画插槽</el-button>
      <el-button type="primary" @click="getComponent('VirtualList')">虚拟列表组件</el-button>
      <el-button type="primary" @click="getComponent('Eltab')">el表格</el-button>
      <el-button type="primary" @click="getComponent('XlsxStyle')">带样式的xls文件下载</el-button>
      <el-button type="primary" @click="getComponent('AxiosFile')">axios读取文件</el-button>
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
import TransitionSlot from "@/components/slotList/transitionSlot.vue";
import LikeData from "@/components/likeData.vue";
import ActionList from "@/components/actionList.vue";
import ShoppingCart from "@/components/shoppingCart.vue";
import REG from "@/components/Reg.vue";
import Html2canvas from "@/components/html2canvas.vue";
import MixinAction from "@/components/mixinAction.vue";
import Bus from "@/components/bus.vue";
import SlotBox from "@/components/slotBox.vue";
import BusSlot from '@/assets/js/bus.js'
import VirtualList from "@/components/virtualList.vue";
import Eltab from "@/components/eltab.vue";
import XlsxStyle from "@/components/excelDemo.vue";
import AxiosFile from "@/components/axiosFile.vue";

export default {
  name: "componentsList",
  components: { LikeData, ActionList, ShoppingCart, REG,Html2canvas,MixinAction,Bus,SlotBox ,TransitionSlot,VirtualList,Eltab,XlsxStyle,AxiosFile},
  mounted:{
    
  },
  data() {
    return {
      component: ""
    };
  },
  mounted() {
    //默认加载模糊查询
    let me = this;
    this.component = "LikeData";
    BusSlot.$on("virtualList2",()=>{
      me.getComponent("")
    })
  },
  methods: {
    getComponent(str) {
      this.component = str;
    }
  }
};
</script>
<style scoped>
.btnList {
  width: 100%;
}
</style>
