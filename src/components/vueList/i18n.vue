<template>
  <div class="dataIndex">
    
    <h2>国际化</h2>
     <span>{{$t('message.text')}}</span><span>{{$t('message.oo1')}}</span>
        <el-select v-model="selectValue" @change="langChange" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
      <div>
        <el-button @click="tt">click</el-button>
      </div>
  </div>
</template>

<script>

export default {
  name: "i18n",
  data() {
    return {
       selectValue:'',
            options:[
                {
                value: 'cn',
                label: '中文'
                }, {
                value: 'en',
                label: 'English'
                }
            ],
    };
  },
created() {
        let that = this;
        console.log(localStorage.lang)
        that.selectValue = localStorage.lang == undefined?'cn':localStorage.lang
    },

  mounted() {
  },
  methods: {
     //语言切换
        langChange(e){
        console.log(e)
        localStorage.setItem('lang',e);
        this.$i18n.locale = e;
  },
  tt(){
    this.$confirm(this.$t('message.text'), '提示', {
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
  }
}
}
</script>
<style scoped></style>
