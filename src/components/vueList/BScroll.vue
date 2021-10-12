<template>
  <div>
    <h3>使用自己封装的滚动组件</h3>
    <BScroll>
      <div v-if="list">
        <ul>
          <li v-for="item in list" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </BScroll>
  </div>
</template>

<script>
import BScroll from "../tools/BScroll.vue";
export default {
  components: {
    BScroll,
  },

  mounted() {
    let { list } = this;
    for (let index = 0; index < 1000; index++) {
      list.push({ id: index, name: "testsettse" + index });
    }
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>
<style scoped >
.wrapper {
  height: 100%;
}
</style>
