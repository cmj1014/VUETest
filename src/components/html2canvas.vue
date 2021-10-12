<template>
  <div>
    <h1>{{ msg }}</h1>
    <div ref="imgdiv" id="imgdiv">
      <img src="@/assets/logo.png" alt />
    </div>

    <el-button @click="action">截图</el-button> <el-button @click="action2">下载截图</el-button>
    <div v-if="imgUrl">
      <img :src="imgUrl" alt="">
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "html2canvas",
  data() {
    return {
      msg: "html2canvas  截图效果",
      imgUrl:"",
      imgmap:""
    };
  },
  methods: {
    action() {
       html2canvas(this.$refs.imgdiv).then(canvas => {
          let dataURL = canvas.toDataURL("image/png");
          this.imgUrl = dataURL;
          console.log("this.imgUrl",this.imgUrl)
           window.open(this.imgUrl)
          if (this.imgUrl !== "") {
            this.dialogTableVisible = true;
           
          }
        });

    },
    action2(){
      html2canvas(document.getElementById('imgdiv')).then(canvas => {
				this.imgmap = canvas.toDataURL()
				console.log(999, this.imgmap)
				if (window.navigator.msSaveOrOpenBlob) {
					var bstr = atob(this.imgmap.split(',')[1])
					var n = bstr.length
					var u8arr = new Uint8Array(n)
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n)
					}
					var blob = new Blob([u8arr])
					window.navigator.msSaveOrOpenBlob(blob, 'chart-download' + '.' + 'png')
				} else {
					// 这里就按照chrome等新版浏览器来处理
					const a = document.createElement('a')
					a.href = this.imgmap
					a.setAttribute('download', 'chart-download')
					a.click()
				}
 
			});

    }
  }
};
</script>
<style scoped>
</style>
