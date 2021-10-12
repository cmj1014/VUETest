<template>
	<div>
		<h3>甘特图示例4——透明堆叠合并条形图</h3>

		<div id="index">
				<div id="chart" />
			</div>
	</div>
</template>

<script type="text/javascript">
	const echarts = require('echarts')
export default {
	
	data() {
		return {
			chart: null, // chart实例
		    chartData: [], // chart数据源
		    startTime: '', // X轴起始时间
		    endTime: '', // X轴终末时间
		    yData: [], // Y轴项目类目
		    dayTime: 3600 * 24 * 1000, // 一天的毫秒，因为01.01日-01.01日，也算一天
		    initData: { // 可以认为是axios请求过来的数据res.data
		        startTime: '2020-12-01', // X轴起始时间
		        endTime: '2022-01-30', // X轴终末时间
		        value: [
		          {
		            itemName: '项目一', // 项目名
		            value: [
		              0, // 索引
		              '2021-06-01', // 项目开始时间
		              '2021-08-30', // 项目结束时间
		              '2021-07-01', // 项目实际开始时间
		              '2021-07-28' // 项目实际结束时间
		            ]
		          },
		          {
		            itemName: '项目二',
		            value: [
		              1,
		              '2021-06-21',
		              '2021-07-21',
		              '2021-07-18',
		              '2021-08-10'
		            ]
		          },
		          {
		            itemName: '项目三',
		            value: [
		              2,
		              '2021-06-01',
		              '2021-06-22',
		              '2021-06-01',
		              '2021-06-22'
		            ]
		          },
		          {
		            itemName: '项目四',
		            value: [
		              3,
		              '2021-06-22',
		              '2021-06-30',
		              '2021-06-22',
		              '2021-07-05'
		            ]
		          },
		          {
		            itemName: '项目五',
		            value: [
		              4,
		              '2021-06-21',
		              '2021-07-06',
		              '2021-07-01',
		              '2021-07-30'
		            ]
		          },
		          {
		            itemName: '项目六',
		            value: [
		              5,
		              '2021-07-01',
		              '2021-07-21',
		              '2021-07-02',
		              '2021-07-30'
		            ]
		          },
		          {
		            itemName: '项目七',
		            value: [
		              6,
		              '2021-06-18',
		              '2021-09-30',
		              '2021-06-30',
		              '2021-10-10'
		            ]
		          }
		        ]
		      }
			}
		},
	mounted() {
		let me = this;
		setTimeout(() => {
			me.getData();
		}, 1200);
	},
	methods: {
		getData() {
			this.chartData = this.initData.value; // chart的数据
			const arr = [];
			this.chartData.forEach(item => {
				arr.push(item.itemName);
			});
			this.yData = arr; // Y轴的类目标题
			this.startTime = this.initData.startTime; // X轴开始值
			this.endTime = this.initData.endTime; // X轴结束值
			this.setData();
		},
		setData() {
			const _this = this;
			const param = {
				title: {
					text: '项目执行情况',
					left: 'center'
				},
				tooltip: {
					// 自定义提示信息
					// params为当前点击图形元素的数据信息的对象
					formatter(params) {
						// 计划开始时间
						let planStartDate = params[0].value[1];
						// 计划结束时间
						let planEndDate = params[0].value[2];
						// 实际开始时间
						let practiceStartDate = params[0].value[3];
						// 实际结束时间
						let practiceEndDate = params[0].value[4];
						// 项目周期(毫秒值)：计划结束日期 - 计划开始日期
						// eslint-disable-next-line
						let projectCycle_millisecond = +echarts.number.parseDate(params[0].value[2]) - +echarts.number.parseDate(params[0].value[1]);
						// 项目周期(天数)
						let projectCycle_days = projectCycle_millisecond / _this.dayTime + 1;
						return (
							params[0].name +
							'<br/>' +
							'计划开始时间：' +
							planStartDate +
							'<br/>' +
							'计划结束时间：' +
							planEndDate +
							'<br/>' +
							'项目周期：' +
							projectCycle_days +
							'天<br/>' +
							'实际开始时间：' +
							practiceStartDate +
							'<br/>' +
							'实际结束时间：' +
							practiceEndDate
						);
					}
				},
				dataZoom: [
					{
						// 区域缩放组件的类型为滑块，默认作用在x轴上
						type: 'slider',
						// 区域缩放组件的过滤模式，weakFilter：在进行区域缩放时，允许图形的一部分在坐标系上(可见)，另一部分在坐标系外(隐藏)
						filterMode: 'weakFilter',
						showDataShadow: false,
						top: 450,
						height: 10,
						// 区域缩放组件边框颜色
						borderColor: 'transparent',
						// 区域缩放组件边框背景
						backgroundColor: '#e2e2e2',
						// 区域缩放组件上的手柄的样式
						// eslint-disable-next-line
						handleIcon:
							'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
						// 手柄大小
						handleSize: 20,
						// 为手柄设置阴影效果
						handleStyle: {
							shadowBlur: 6,
							shadowOffsetX: 1,
							shadowOffsetY: 2,
							shadowColor: '#aaa'
						},
						labelFormatter: ''
					},
					{
						// 区域缩放组件的类型为内置在坐标系中，默认作用在x轴的坐标系中
						type: 'inside',
						// 区域缩放组件的过滤模式，weakFilter：在进行区域缩放时，允许图形的一部分在坐标系上(可见)，另一部分在坐标系外(隐藏)
						filterMode: 'weakFilter'
					}
				],
				// 图表底板
				grid: {
					height: 330,
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					}
				},
				xAxis: {
					// x轴类型为时间轴
					type: 'time',
					// 最小值
					min: _this.startTime,
					// 最大值
					max: _this.endTime,
					axisLabel: {
						// 强制显示所有标签
						interval: 0
					}
				},
				yAxis: {
					data: _this.yData
				},
				legend: {
					selectedMode: false,
					left: '70%',
					top: 10,
					data: ['计划工期', '实际工期']
				},
				series: [
					{
						type: 'custom',
						// 使用自定义的图形元素
						renderItem: _this.renderItem,
						name: '计划工期',
						itemStyle: {
							opacity: 0.7,
							color: '#409EFF'
						},
						encode: {
							// 将维度1和维度2的数据映射到x轴
							x: [1, 2],
							// 将维度0的数据映射到y轴
							y: 0
						},
						data: _this.chartData
					},
					// 没有给它设置data，只是为了通过这个系列，显示图例(legend)而已
					{
						type: 'custom',
						name: '实际工期',
						itemStyle: {
							color: '#F56C6C'
						}
					}
				]
			};
			this.init(param);
		},
		// params为data中的数据项的信息对象 api是可调用的方法集合，可以对data中的数据项进行操作
		renderItem(params, api) {
			// 取出data中数据项的第一个维度的值
			let categoryIndex = api.value(0);
			// ===============计划工期进度条
			// 计划开始日期(在屏幕上的像素值)
			// 将数据项中的数值对应的坐标系上的点，转换为屏幕上的像素值
			// 坐标系上的点：是数据项映射到坐标系的x轴和y轴后，对应的位置
			// 屏幕上的像素值：是坐标系上的点，在屏幕上的位置
			let planStartDate = api.coord([api.value(1), categoryIndex]);
			// 计划结束日期(在屏幕上的像素值)
			let planEndDate = api.coord([api.value(2), categoryIndex]);
			// 由于data.value中维度1和维度2的数据会被映射到x轴，而x轴的type为time，即时间轴，
			// 所以api.value(1)和api.value(2)获取到的值是将日期转换后的毫秒值
			// 设置图形的高度
			// 获得Y轴上数值范围为1的一段所对应的像素长度；这是官方文档的注释，对于api.size()方法，目前我还不是很理解；先做个标记??? 以后再说
			let height = api.size([0, 1])[1] * 0.4;
			let width = planEndDate[0] - planStartDate[0];
			if (width <= 10) {
				width = 3;
			}
			// 使用graphic图形元素组件，绘制矩形
			// clipRectByRect方法，在绘制矩形时，如果矩形大小超出了当前坐标系的包围盒，则裁剪这个矩形
			let rectShape1 = echarts.graphic.clipRectByRect(
				{
					// 矩形的位置
					x: planStartDate[0],
					y: planStartDate[1],
					// 矩形的宽高
					width,
					height
				},
				{
					// 当前坐标系的包围盒
					x: params.coordSys.x,
					y: params.coordSys.y,
					width: params.coordSys.width,
					height: params.coordSys.height
				}
			);
			// ===============实际工期进度条
			let rectShape2 = null;
			// 判断实际开始日期和结束日期是否为空
			if (api.value(3) !== '' && api.value(4) !== '') {
				// 实际开始日期(在屏幕上的像素值)
				let practiceStartDate = api.coord([api.value(3), categoryIndex]);
				let practiceEndDate = api.coord([api.value(4), categoryIndex]);
				let widthNum = practiceEndDate[0] - practiceStartDate[0];
				if (widthNum <= 5) {
					widthNum = 3;
				}
				// 使用graphic图形元素组件，绘制矩形
				// clipRectByRect方法，在绘制矩形时，如果矩形大小超出了当前坐标系的包围盒，则裁剪这个矩形
				rectShape2 = echarts.graphic.clipRectByRect(
					{
						// 矩形的位置
						x: practiceStartDate[0],
						y: practiceStartDate[1],
						// 矩形的宽高
						width: widthNum,
						height
					},
					{
						// 当前坐标系的包围盒
						x: params.coordSys.x,
						y: params.coordSys.y,
						width: params.coordSys.width,
						height: params.coordSys.height
					}
				);
			}
			let lineObj = {};
			// 如果项目还没开始，那么只渲染计划工期的进度条
			if (rectShape2 === null) {
				// 设置绘制的矩形的元素定义
				lineObj = rectShape1 && {
					type: 'group',
					children: [
						{
							// 类型为矩形
							type: 'rect',
							// 具体形状
							shape: rectShape1,
							// 样式
							style: api.style({
								fill: '#409EFF'
							})
						}
					]
				};
			} else {
				// 渲染计划工期和实际工期
				// 设置绘制的矩形的元素定义
				lineObj = rectShape1 &&
					rectShape2 && {
						type: 'group',
						children: [
							{
								// 类型为矩形
								type: 'rect',
								// 具体形状
								shape: rectShape1,
								// 样式
								style: api.style({
									fill: '#409EFF'
								})
							},
							{
								// 类型为矩形
								type: 'rect',
								// 具体形状
								shape: rectShape2,
								// 样式
								style: api.style({
									fill: '#F56C6C'
								})
							}
						]
					};
			}
			return lineObj;
		},
		init(param) {
			console.log('param', param);
			this.chart = echarts.init(document.getElementById('chart'));
			this.chart.setOption(param);
		}
	}
};
</script>

<style scoped>
#chart {
	width: 100%;
	height: 500px;
	margin: 50px auto;
}
</style>
