<template>
  <div class="dataIndex">
    下面是动画插槽
    <div>
      <div>
        Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
        <ul>
          <li>条件渲染 (使用 v-if)</li>
          <li>条件展示 (使用 v-show)</li>
          <li>动态组件</li>
          <li>组件根节点</li>
        </ul>
      </div>
      <div>
        <el-button @click="isShow=!isShow">show</el-button>
      </div>
   
      <transition name="kerwin" mode="out-in">
        <div v-if="isShow" key="111">11111111111111111111111</div>
        <div v-if="!isShow" key="222">22222222222222</div>
     </transition>
     <div>
       <b>下面是列表动画，并引入了动画库</b>
       <input type="text" v-model="str"> <el-button @click="add">add click</el-button>
       <transition-group  tag="div" enter-active-class="animated zoomInDown"
    leave-active-class="animated zoomOutDown"
    :duration='100'
    mode="out-in" >
         <div v-for="(item,index) in dataList" :key="item.id">
           <span> {{item.val}}</span>
           <el-button @click="del(index)">del</el-button>
          </div>
       </transition-group>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transitionSlot",
  data() {
    return {
      isShow: true,
      str:"",
      dataList:[]
    };
  },

  mounted() {},
  methods: {
    add(){
      this.dataList.push({val:this.str,id:new Date().getTime()});
      this.str = ""
    },
    del(index){
      this.dataList.splice(index, 1);
    }
  },
};
</script>
<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
  .kerwin-enter-active {
      animation: to100 .5s;
    }

    .kerwin-leave-active {
      animation: to100 .5s reverse;
    }

    @keyframes to100 {
      0% {
        opacity: 0;
        transform: translateX(100px);
      }

      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
</style>
