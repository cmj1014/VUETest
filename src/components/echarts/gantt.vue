<template>
	<div class="box">
		<!-- <h1>甘特图示例</h1> -->
		<Gantt1></Gantt1>
		<Gantt2></Gantt2>
		<Gantt3></Gantt3>
		<Gantt4></Gantt4>
		<Gantt5></Gantt5>
		<Gantt6></Gantt6>
		<Gantt7></Gantt7>
		<Gantt8></Gantt8>
	</div>
</template>

<script>
	import Gantt1 from './gantt/gantt1.vue';
	import Gantt2 from './gantt/gantt2.vue';
		import Gantt3 from './gantt/gantt3.vue'
		import Gantt4 from './gantt/gantt4.vue'
		import Gantt5 from './gantt/gantt5.vue'
		import Gantt6 from './gantt/gantt6.vue'
		import Gantt7 from './gantt/gantt7.vue'
		import Gantt8 from './gantt/gantt8.vue'
export default {
      name: 'gantt',
      components: {
        Gantt1,Gantt2,Gantt3,Gantt4,Gantt5,Gantt6,Gantt7,Gantt8
      }
    }
</script> 

<style>
	.box{
		width:100%;
		height:100%;
	}
</style>