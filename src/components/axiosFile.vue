<template>
  <div class="dataIndex">
    <div>axios读文件</div>

    <div>
      <div><button @click="showJson">axios读取json</button><button @click="readJson">读取json对象</button></div>
      <!-- <div><button @click="showProperties">axios读取Properties</button></div> -->
    </div>
      <div v-if="dataList">
        <ul>
          <li v-for="item in dataList" :key="item.id">{{item.id}}:{{item.name}}</li>
        </ul>

      </div>
  </div>
</template>

<script>
import jsonFile from "../../static/data/data.json";
export default {
  name: "likeData",
  data() {
    return {
      dataList: null
    };
  },
  mounted() {},
  methods: {
    showJson() {

      this.$axios.get("../../static/data/data.json").then(data=>{
        console.log("data",data.data)
        let list = [];
        for(let key in data.data){
          list.push({id:key,name:data.data[key]})
        }


         this.dataList = list
      })
    },
    showProperties() {

      this.$axios({url:"../../static/data/messages_zh.properties",
      methods:"get"}).then(data=>{
        console.log("data",data.data)
         this.dataList = data.data
      })
    },
    readJson(){
      console.log(jsonFile);
      let list = [];
        for(let key in jsonFile){
          list.push({id:key,name:jsonFile[key]})
        }
         this.dataList = list

    }
    
  }
};
</script>
<style scoped>

</style>
