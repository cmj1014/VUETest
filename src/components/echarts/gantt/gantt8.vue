<template>
  <div>
    <h3>甘特图示例8—透明堆叠合并条形图-今日任务-大数据算法测试</h3>
    <div id="main8" style="width: 100%; height: 500px"></div>
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
import gantt8TestData from "./gantt8TestData.json";
import gantt8TestData2 from "./gantt8TestData2.json";
export default {
  data() {
    return {};
  },
  mounted() {
    let me = this;
    me.init();
   /*  setTimeout(() => {
      me.getTaskDataList();
    }, 1200); */
    
  },
  methods: {
    init(){
      console.log("gantt8TestData",gantt8TestData);
      console.log("gantt8TestData2",gantt8TestData2);
      
    },
    dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
},
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
/* 
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

      this.init(taskDataList); */
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
