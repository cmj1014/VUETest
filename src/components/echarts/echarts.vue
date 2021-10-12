<template>
	<div>
		<h1>echarts示例</h1>
		 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		    <el-tab-pane label="甘特图" name="gantt"><Gantt></Gantt></el-tab-pane>
		    <el-tab-pane label="图表交互" name="clickAction"><Click></Click></el-tab-pane>
		  </el-tabs>
		
	</div>
</template>

<script>
	import Gantt from './gantt.vue'
	import Click from './clickAction.vue'
export default {
      name: 'echarts',
      components: {
        Gantt,Click
      },
      data() {
            return {
              activeName: 'gantt'
            };
          },
          methods: {
            handleClick(tab, event) {
              console.log(tab, event);
              setTimeout(()=>{
 this.$bus.emit('resize');
              },10)
             
            }
          }
    }
</script> 

<style>
</style>