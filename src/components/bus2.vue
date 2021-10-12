<template>
  <div class="dataIndex flex">
    <div style="width:200px">
      <el-input type="input" v-model="val"></el-input>
    </div>
    <el-button @click="go">发起消息</el-button>
    <el-button @click="go2">vue-bus发起消息</el-button>
    <span>{{str}}</span>
  </div>
</template>

<script>
import Bus from "@/assets/js/bus.js";
export default {
  name: "bus1",
  data() {
    return {
      val: "",
      str: "",
    };
  },

  mounted() {
    Bus.$on("bus2", (data) => {
      this.put(data);
    });
    this.$bus.on("bus2-vue", (val) => {
      this.put(val);
    });
  },
  methods: {
    go() {
      Bus.$emit("bus1", this.val);
    },
    go2() {
      this.$bus.emit("bus1-vue", this.val);
    },
    put(data) {
      this.str = "bus2收到消息：" + data;
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
</style>
