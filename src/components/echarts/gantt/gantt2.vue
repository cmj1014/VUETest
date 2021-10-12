<template>
	<div>
		<h3>甘特图示例2——堆叠合并条形图</h3>
		<div id="main" style="width: 1000px;height: 500px;"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data:[
		        {
		            name: "项目1",
		            //项目索引  计划开始日期   计划结束日期， 实际开始日期
		            value: [0, '2020-01-12', '2020-01-28', '2020-01-12']
		        },
		        {
		            name: "项目2",
		            value: [1, '2020-01-25', '2020-03-31', '2020-01-28']
		        },
		        {
		            name: "项目3",
		            value: [2, '2020-02-07', '2020-04-30', '2020-02-10']
		        },
		        {
		            name: "项目4",
		            value: [3, '2020-04-01', '2020-07-30', '']
		        },
		        {
		            name: "项目5",
		            value: [4, '2020-07-15', '2020-11-01', '']
		        },
		        {
		            name: "项目6",
		            value: [5, '2020-11-01', '2020-12-25', '']
		        }
		    ],
			nowDateStr:""
		};
	},
	mounted() {
		let me =  this;
		setTimeout(()=>{
			me.init();
		},1200);
	},
	methods: {
		init() {

			
		        // 绘制图表。
		           var opt = {
		             title: {
		               text: '工作流甘特图'
		             },
		             legend: {
		               data: ['计划完成时间', '实际完成时间']
		       
		             },
		             xAxis: {
		               type: 'time',
		               position: "top"
		             },
		       
		             yAxis: {
		               type: "category",
		               data: ['测试', '开发', '设计', '总进度']
		       
		             },
		             tooltip: {
		               trigger: 'axis',
		               formatter: function(params) {
		                 var res = params[0].name + "</br>"
		                 var date0 = params[0].data;
		                 var date1 = params[1].data;
		                 var date2 = params[2].data;
		                 date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1) + "-" + date0.getDate();
		                 date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
		                 date2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
		                 res += params[0].seriesName + ":" + date0 + "</br>"
		                 res += params[1].seriesName + ":" + date1 + "</br>"
		                 res += params[2].seriesName + ":" + date2 + "</br>"
		                 console.log(params[0]);
		                 return res;
		               }
		             },
		             series: [
		       
		               {
		                 name: '计划开始时间',
		                 type: 'bar',
		                 stack: '总量',
		                 itemStyle: {
		                   normal: {
		                     color: 'rgba(0,0,0,0)'
		                   }
		                 },
		                 data: [
		                   new Date("2017/09/23"),
		                   new Date("2017/09/10"),
		                   new Date("2017/09/1"),
		                   new Date("2017/09/1"),
		       
		                 ]
		               },
		       
		       
		               {
		                 name: '计划完成时间',
		                 type: 'bar',
		                 stack: '总量',
		                 data: [
		                   new Date("2017/09/31"),
		                   new Date("2017/09/20"),
		                   new Date("2017/09/15"),
		                   new Date("2017/09/30"),
		       
		       
		                 ]
		               }, {
		                 name: '实际完成时间',
		                 type: 'bar',
		                 stack: '总量',
		                 data: [
		                   new Date("2017/09/30"),
		                   new Date("2017/09/23"),
		                   new Date("2017/09/14"),
		                   new Date("2017/09/30"),
		       
		                 ]
		               }
		             ]
		           };
		           this.$echarts.init(document.getElementById('main')).setOption(opt);
		    }
	}
};
</script>

<style scoped>
.box {
	width: 100%;
	height: 500px;
}
</style>
