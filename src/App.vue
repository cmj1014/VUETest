<template>
  <div id="app">
    <div id="nav" v-if="$store.state.indexFlag">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About test</router-link> |
      <router-link to="/main">Main</router-link> |
      <router-link to="/usedMain">used-Main</router-link> |
      <router-link to="/componentsList">组件案例</router-link> |
      <router-link to="/plugList">插件案例</router-link> |
      <router-link to="/vueList">vue相关</router-link> |
      <router-link to="/goToVueCli">vueCli脚手架效果</router-link>
      <router-link to="/phone">手机模块</router-link>
	  <router-link to="/maoyan">手机猫眼</router-link>
	  
    </div>
    <router-view class="routerView"/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
	padding: 0;
	margin: 0;
  
}
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
}
.routerView {
height: 100%;
  }
  /* //移动端使用 */
  @media screen and (max-width: 400px) {
      #app  {
          font-size: 200px;
      }
  }
</style>
