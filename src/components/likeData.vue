<template>
  <div class="dataIndex">
    <div>数组模糊查询</div>
    <input type="text" v-model="text" />
    <ul>
      <!-- <li v-for="(item,index) in datalist" :key="index">{{item}}</li> -->
      <li v-for="(item,index) in likeFn()" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "likeData",
  data() {
    return {
      text: "",
      olddatalist: ["aaa", "abb", "bbb", "ccc", "bbc"],
      datalist: []
    };
  },
  mounted() {
    this.datalist = this.olddatalist;
    setTimeout(() => {
      this.olddatalist.push("1231231231");
    }, 10000);
  },
  methods: {
    changeInput(evt) {
      let newarr = this.datalist.filter(item =>
        item.includes(evt.target.value)
      );
      console.log(newarr);

      if (newarr.length > 0) {
        this.datalist = newarr;
      } else {
        this.datalist = this.olddatalist;
      }
    },
    likeFn() {
      console.log(this.text);
      return this.olddatalist.filter(item => item.includes(this.text));
    }
  }
};
</script>
<style scoped></style>
