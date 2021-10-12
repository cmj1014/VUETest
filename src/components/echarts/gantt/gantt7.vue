<template>
  <div>
    <h3>甘特图示例7—透明堆叠合并条形图-今日任务</h3>
    <div id="main7" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script type="text/javascript">
const echarts = require("echarts");
//设置时间格式化方法
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

export default {
  data() {
    return {};
  },
  mounted() {
    let me = this;
    setTimeout(() => {
      me.getTaskDataList();
    }, 1200);
  },
  methods: {
	  formatSeconds(value) {
				var secondTime = parseInt(value); // 秒
				var minuteTime = 0; // 分
				var hourTime = 0; // 小时
				if (secondTime >= 60) {
					minuteTime = parseInt(secondTime / 60);
					secondTime = parseInt(secondTime % 60);
					if (minuteTime >= 60) {
						hourTime = parseInt(minuteTime / 60);
						minuteTime = parseInt(minuteTime % 60);
					}
				}
				var result ="" +(parseInt(secondTime) < 10? "0" + parseInt(secondTime): parseInt(secondTime));
					result ="" + (parseInt(minuteTime) < 10? "0" + parseInt(minuteTime) : parseInt(minuteTime)) + ":" + result;
					result ="" + (parseInt(hourTime) < 10 ? "0" + parseInt(hourTime): parseInt(hourTime)) +":" + result;
				return result;
			},
	  timeEvent(e){
          var time = e;
		  var len= time.split(':')
		  if(len.length==3){
			  var hour = time.split(':')[0];
			  var min = time.split(':')[1];
			  var sec = time.split(':')[2];
			  return  Number(hour*3600) + Number(min*60) + Number(sec);
		  }
		  if(len.length==2){
		  			  var min = time.split(':')[0];
		  			  var sec = time.split(':')[1];
					  return   Number(min*60) + Number(sec);
		  }
		  if(len.length==1){
		  			  var sec = time.split(':')[0];
					  return    Number(sec);
		  }
			},
    getTaskDataList() {
      let taskDataList = {};
	  let me =  this;
      let planData = {
        startTime: [
          "2021-08-23 8:28:34",
          "2021-08-23 9:43:34",
          "2021-08-23 14:53:34",
		  "2021-08-23 16:13:34",
		  "2021-08-23 17:03:34",
		  "2021-08-23 19:13:34",
		  "2021-08-23 8:28:34",
          "2021-08-23 9:43:34",
          "2021-08-23 14:53:34",
		  "2021-08-23 16:13:34",
		  "2021-08-23 17:03:34",
		  "2021-08-23 19:13:34",
		  "2021-08-23 8:28:34",
          "2021-08-23 9:43:34",
          "2021-08-23 14:53:34",
		  "2021-08-23 16:13:34",
		  "2021-08-23 17:03:34",
		  "2021-08-23 19:13:34",
		  "2021-08-23 8:28:34",
          "2021-08-23 9:43:34",
          "2021-08-23 14:53:34",
		  "2021-08-23 16:13:34",
		  "2021-08-23 17:03:34",
		  "2021-08-23 19:13:34",
        ],
        endTime: [
          "2021-08-23 9:24:34",
          "2021-08-23 10:48:34",
          "2021-08-23 15:59:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
		  "2021-08-23 9:24:34",
          "2021-08-23 10:48:34",
          "2021-08-23 15:59:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
			"2021-08-23 9:24:34",
          "2021-08-23 10:48:34",
          "2021-08-23 15:59:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
		  "2021-08-23 9:24:34",
          "2021-08-23 10:48:34",
          "2021-08-23 15:59:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
        ],
        name: ["任务1", "任务2", "任务3","任务4","任务5","任务6","任务1", "任务2", "任务3","任务4","任务5","任务6","任务1", "任务2", "任务3","任务4","任务5","任务6","任务1", "任务2", "任务3","任务4","任务5","任务6"],
      }; //计划
      let factData = {
        startTime: [
          "2021-08-23 8:23:34",
          "2021-08-23 9:53:34",
          "2021-08-23 15:14:34",
		  "2021-08-23 16:15:34",
		  "2021-08-23 17:13:34",
		  "2021-08-23 19:31:34",
		  "2021-08-23 8:23:34",
          "2021-08-23 9:53:34",
          "2021-08-23 15:14:34",
		  "2021-08-23 16:15:34",
		  "2021-08-23 17:13:34",
		  "2021-08-23 19:31:34",
		   "2021-08-23 8:23:34",
          "2021-08-23 9:53:34",
          "2021-08-23 15:14:34",
		  "2021-08-23 16:15:34",
		  "2021-08-23 17:13:34",
		  "2021-08-23 19:31:34",
		  "2021-08-23 8:23:34",
          "2021-08-23 9:53:34",
          "2021-08-23 15:14:34",
		  "2021-08-23 16:15:34",
		  "2021-08-23 17:13:34",
		  "2021-08-23 19:31:34",
        ],
        endTime: [
          "2021-08-23 9:23:34",
          "2021-08-23 10:23:34",
          "2021-08-23 15:43:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
		  "2021-08-23 9:23:34",
          "2021-08-23 10:23:34",
          "2021-08-23 15:43:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
		  "2021-08-23 9:23:34",
          "2021-08-23 10:23:34",
          "2021-08-23 15:43:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
		  "2021-08-23 9:23:34",
          "2021-08-23 10:23:34",
          "2021-08-23 15:43:34",
		  "2021-08-23 19:19:34",
		  "2021-08-23 20:44:34",
		  "2021-08-23 23:59:34",
        ],
        name: ["任务1", "任务2", "任务3"],
      }; //实际

      planData.startTimeVal = planData.startTime.map((item) => {
        return me.timeEvent(new Date(item).format("hh:mm:ss"));
      });
      planData.endTimeVal = planData.endTime.map((item) => {
        return me.timeEvent(new Date(item).format("hh:mm:ss"));
      });

      factData.startTimeVal = factData.startTime.map((item) => {
        return me.timeEvent(new Date(item).format("hh:mm:ss"));
      });
      factData.endTimeVal = factData.endTime.map((item) => {
        return me.timeEvent(new Date(item).format("hh:mm:ss"));
      });
      let formatTime = [
        ...planData.startTimeVal,
        ...planData.endTimeVal,
        ...factData.startTimeVal,
        ...factData.endTimeVal,
      ].sort(); //合并格式化后时间 并排序;
      formatTime = Array.from(new Set(formatTime)); //去重 格式化
      //.map(item=>{return new Date(item *1000).format("yyyy-MM-dd hh:mm:ss"); })
      planData.Dvalue = planData.endTimeVal.map((item, index) => {
        const it = planData.startTimeVal[index];
        return item - it;
      });
      factData.Dvalue = factData.endTimeVal.map((item, index) => {
        const it = factData.startTimeVal[index];
        return item - it;
      });
      taskDataList.planData = planData;
      taskDataList.factData = factData;
      taskDataList.formatTime = formatTime;

      this.init(taskDataList);
    },
    init(taskDataList) {
		let me = this;
      var myChart = echarts.init(document.getElementById("main7"));
      let option = {
        title: {
          text: "",
          x: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 座标轴指示器，座标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          borderColor: "rgba(50,50,50,0.5)",
          extraCssText: "",
          formatter: function (params) {
            // console.log("params",params)
            // let relVal = params[0].axisValueLabel;
            let relVal = params[0].name;
            const getDateStr = (hideBar, dataBar) => {
                    let str = '';
                    if(taskDataList){
                        str += me.formatSeconds(hideBar.value)  + ' 至 ' + me.formatSeconds(hideBar.value+dataBar.value);
                    }
                    return str;
                };
                relVal += '<br/>计划：' + getDateStr(params[0], params[1]) + '<br/>实际：' + getDateStr(params[2], params[3]);
            return relVal;
            /* return (
              "<br/>计划：" + params[1].value + "<br/>实际：" + params[3].value
            ); */
            // return "计划"
          },
        },
        legend: {
          data: ["计划任务", "实际任务"],
          x: 30,
        },

        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          type: "category",
          splitLine: { show: false },
		  maxInterval:20,
        //   data: ["任务一", "任务二", "任务三", "任务四", "任务五", "任务六"],
          data: taskDataList.planData.name//测试数据
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        //   data: taskDataList.formatTime,
          axisLabel: {
            show: true,
            interval: 0,
            formatter: function(value) {
                    console.log("value",value)
                    return me.formatSeconds(value); 
                }
          },
		  max:function(value){
			  console.log("max value",value)
			//   return value.max;
			return 86399;  //一天时间=60*60*23+59*60+59  23：59:59
		  }
        },
		dataZoom: [

    {
        type: 'slider',
		show: true,
        yAxisIndex: [0],
        start: 0,
        end: 36,
		bottom :50
    }
],
        series: [
          {
            name: "planDate",
            type: "bar",
            stack: "计划任务",
            barCategoryGap: "10%",
            itemStyle: {
              normal: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
              emphasis: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            // data: [0, 160, 7, 12, 148, 179], //计划的起始位置
            data:taskDataList.planData.startTimeVal//起始点 = 开始时间
          },
          {
            name: "计划任务",
            type: "bar",
            stack: "计划任务",
            itemStyle: {
              normal: {
                /* label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 14
                            },
                            formatter: function(obj) {
                                return obj.value + '天';
                            }
                        },*/
                color: "#479DED",
              },
            },
            // data: [10, 50, 50, 50, 50, 50], //计划的数据内容
            data:taskDataList.planData.Dvalue
            // data:taskDataList.planData.startTimeVal//起始点 = 开始时间
          },

          {
            name: "factDate",
            type: "bar",
            stack: "实际任务",
            itemStyle: {
              normal: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
              emphasis: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            // data: [0, 160, 7, 12, 148, 179], //实际进度的起始位置
            data:taskDataList.factData.startTimeVal//起始点 = 开始时间
            // data:taskDataList.factData.Dvalue
          },
          {
            name: "实际任务",
            type: "bar",
            stack: "实际任务",
            itemStyle: {
              normal: {
                /*label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 14
                            },
                            formatter: function(obj) {
                                return obj.value + '天';
                            }
                        },*/
                color: "#44CF2F",
              },
            },
            // data: [13, 16, 60, 22, 58, 96], //实际进度行数据内容
            data:taskDataList.factData.Dvalue
            // data:taskDataList.factData.startTimeVal//起始点 = 开始时间
          },

          {
            type: "bar",
            stack: "none",
            barWidth: "2",
            itemStyle: {
              normal: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
              emphasis: {
                borderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 500px;
  margin: 50px auto;
}
</style>
