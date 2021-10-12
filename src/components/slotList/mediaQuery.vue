<template>
  <div class="dataIndex">
    媒体查询
    <div>
      <el-button @click="screenResize">分辨率大于600 this.$mq.above(600)</el-button>
      <el-button @click="below">分辨率小于600 this.$mq.below(600)</el-button>
       <el-button @click="between">分辨率600-1920 this.$mq.between(21000,3220)</el-button>
<el-button @click="beyond">分辨率超过600-1920 this.$mq.beyond(600,1920)</el-button>
       

       <div>
         <pre>

           $mq.above(measurement, value)
$mq.below(measurement, value)
$mq.between(measurement, [valMin, valMax])
$mq.beyond(measurement, [valMin, valMAx]) 

measurement
Can take values: 'width', 'height'
Default value = 'width'
example: $mq.above(600) == $mq.above('width', 600)
value, valMin, valMax
Can take type Number and String
All values type of Number will be rewrited to Number + 'px'
example: $mq.above(600) == $mq.above('600px')
         </pre>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaQuery",
  data() {
    return {};
  },

  mounted() {
   /*  $mq.above(measurement, value)
$mq.below(measurement, value)
$mq.between(measurement, [valMin, valMax])
$mq.beyond(measurement, [valMin, valMAx]) 

measurement
Can take values: 'width', 'height'
Default value = 'width'
example: $mq.above(600) == $mq.above('width', 600)
value, valMin, valMax
Can take type Number and String
All values type of Number will be rewrited to Number + 'px'
example: $mq.above(600) == $mq.above('600px')

*/


    this.screenResize()
  },
  methods: {
    screenResize() {
      console.log("this.$mq",this.$mq)
      if (this.$mq.above(600)) {
        console.log('screen > 600px')
      }
    },
    below(){

      if (this.$mq.below(600)) {
        console.log('screen < 600px')
      }
    },
     between(){

      if (this.$mq.between([2100,3220])) {
        console.log('screen 2100 - 3220')
      }else{
        console.log('screen NO')
      }
    },
     beyond(){

      if (this.$mq.beyond([600,1220])) {
        console.log('screen > 600px screen > 1220px')
      }
    }
  },
};
</script>
<style scoped></style>
