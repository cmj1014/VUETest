<template>
  <div class="home">
    <div class="homeView">
      <transition-group name="el-fade-in">
        <div  v-if="HelloFlag" :key="1">
          <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
        <div  v-if="mainFlag" :key="2">
           <MainView></MainView>
        </div>
      </transition-group> 
      
    </div>
    <div class="mainView">
      <transition name="el-fade-in">
       
      </transition>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainView from "@/views/Main"

export default {
  name: "Home",
  data(){
    return{
      HelloFlag:true,
      mainFlag:false
    }
  },
  components: {
    HelloWorld,MainView
  },
  mounted(){
    setTimeout(()=>{
      this.HelloFlag = false
    },700)
    setTimeout(()=>{
      this.mainFlag = true
    },1200)
    
  }

};
</script>
<style scoped>

</style>
