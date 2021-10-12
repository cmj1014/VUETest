<template>
	<div class="box">
		<Click1></Click1>
		<Click2></Click2>
	</div>
</template>

<script>
	import Click1 from './clickAction/click1.vue';
	import Click2 from './clickAction/click2.vue';
export default {
      name: 'clickAction',
      components: {
        Click1,Click2
      }
    }
</script> 

<style>
	.box{
		width:100%;
		height:100%;
	}
</style>