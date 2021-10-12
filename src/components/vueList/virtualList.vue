<template>
  <div  class="dataIndex">
    <h1>虚拟列表</h1>
    <div @click="getListView">查看虚拟列表组件</div>
    <div  class="dataIndex">
      <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
        <span>test {{screenHeight}}</span>
        <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
          <div
            ref="items"
            class="infinite-list-item"
            v-for="item in visibleData"
            :key="item.id"
            :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
          >{{ item.value }}</div>
        </div>
      </div>
      <!-- <div v-for="item in listData"
            :key="item.id">
        {{ item.value }}
      </div> -->
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/js/bus.js'
export default {
  name: "virtualList",
  computed: {
    windowW() {
      return document.documentElement.clientWidth;
    },
    windowH() {
      return document.documentElement.clientHeight;
    },
    //列表总高度
    listHeight() {
      return this.listData.length * this.itemSize;
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      );
    },
  },
  data() {
    return {
      listData: [],
      itemSize: 200,
      //可视区域高度
      screenHeight: 0,
      //偏移量
      startOffset: 0,
      //起始索引
      start: 0,
      //结束索引
      end: null,
    };
  },

  mounted() {
    this.init();
    console.log("mount")
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
    console.log("listData", this.listData);
    console.log("listHeight", this.listHeight);
  },
  methods: {
    init() {
      console.log("windowW", this.windowW);
      console.log("windowH", this.windowH);
      for (let i = 0; i < 100000; i++) {
        this.listData.push({ id: i, value: i ,text:"text"+i,dic:"dic"+i});
      }
    },
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },
    getListView(){
      Bus.$emit("virtualList2")
    }
  },
};
</script>
<style scoped>
.dataIndex{
 height: 100%;
}
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
