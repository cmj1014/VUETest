<template>
  <div>
    <h3>交互图表示例1</h3>
	<h4>未按时运行任务图</h4>
	<div style="font-size:14px;color:#999;">点击节点可以进入运行分析</div>
    <div class="box" ref="box" id="box1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        myChart:{}
    };
  },

  methods: {
    init() {
      let box = this.$refs.box;
      console.log("this.$echarts", this.$echarts);
      let myChart = this.$echarts.init(box);
      let option = {
        title: {
        //   text: "未按时运行任务图",
        //   subtext: "点击节点可以进入运行分析",
        //    textAlign:"left",
        //    left:20,
        //     textVerticalAlign:"top"
        },
        color:["#f20e0e","#4ea1e5"],
        tooltip: {
          trigger: "axis",
          /* formatter: function (params) {
              console.log("params",params)
                    if (params[0] && params[0].value != undefined) {
                        let relVal = params[0].name;
                        let planObj = params.filter(item=>item.seriesName =="未提交数量");
                        let factObj = params.filter(item=>item.seriesName =="实际提交数量");
                         relVal += "" + '<br/>未提交数量:'+ (planObj? planObj[0].value:"");
                         relVal += "" + '<br/>实际提交数量:'+ (factObj? factObj[0].value:"");
                        return relVal;

                    }

                } */
        },
        legend: {
          data: ["应提交次数", "实际运行次数"],
        //   left:20
        },
        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
          
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["未按时任务1", "未按时任务2", "未按时任务3", "未按时任务4", "未按时任务5", "未按时任务6", "未按时任务7"],
        },
        yAxis: {
          type: "value",
          /* axisLabel: {
            formatter: "{value} °C",
          }, */
          name:"个"
        },
        series: [
          {
            name: "应提交次数",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "实际运行次数",
            type: "line",
            data: [1, 0, 2, 5, 3, 2, 1],
            markPoint: {
            //   data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1 }],
            data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", function (param) {
        console.log("param---->", param); // 打印出param, 可以看到里边有很多参数可以使用
        //获取节点点击的数组序号
        var arrayIndex = param.dataIndex;
        console.log("arrayIndex---->", arrayIndex);
        console.log("name---->", param.name);
       /*  if (param.dataType == "node") {
          alert("点击了节点" + param.name);
        } else {
          alert("点击了边" + param.value);
        } */
        window.open("http://www.baidu.com");

      });
      this.myChart = myChart;
    },
  },

  mounted() {
    let me = this;
    setTimeout(() => {
      me.init();
    }, 1200);
    this.$bus.on("resize", (val) => {
        console.log("resize11111111111")
      this.myChart.resize();
    });
  },
};
</script> 

<style scoped>
.box {
  width: 100%;
  height: 500px;
}
</style>