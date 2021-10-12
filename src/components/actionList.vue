<template>
  <div class="dataIndex">
    <div>事件处理器</div>

    <div>
      {{count}}
      <button @click="add">add1 函数名自动传对象</button>
      <button @click="add2($event,2)">add2 函数表达式 自己传对象&参数</button>
      <button @click="count++">add3 直接写代码</button>
      <button @click.once="handleAward">抽奖-只执行一次</button>
      <button @click="isShow = true">模态框</button>
      <ul @click="handleUlClick">
        <li @click.stop="handleLiClick">1111111</li>
      </ul>

      <!-- form提交 -->
      <a href="http://www.baidu.com" @click.prevent>跳转</a>
    </div>
    <!-- //模态框 -->
    <div id="box">
      <!-- <div id="overlay" v-show="isShow" @click="isShow=false">
           <div id="center" @click.stop>
                <div>用户名：<input type="text"/></div>
                <div>密码：<input type="password"/></div>
                <div><button @click="isShow=false">登录</button></div>
           </div>
      </div>-->

      <div id="overlay" v-show="isShow" @click.self="isShow=false">
        <div id="center">
          <div>
            用户名：
            <input type="text" />
          </div>
          <div>
            密码：
            <input type="password" />
          </div>
          <div>
            <button @click="isShow=false">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "likeData",
  data() {
    return {
      count: 1,
      isShow: false
    };
  },
  mounted() {},
  methods: {
    add(evt) {
      console.log(evt.target);
      this.count++;
    },
    add2(evt, num) {
      console.log(evt.target);
      this.count += num;
    },
    handleLiClick(evt) {
      //阻止冒泡
      evt.stopPropagation();
      console.log("handleLiClick");
    },
    handleUlClick() {
      console.log("handleUlClick");
    },
    handleAward() {
      console.log("抽奖");
    }
  }
};
</script>
<style scoped>
#overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#center {
  background: #ffff;
  border-radius: 5px;
  /* 边框圆角 */
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 15px;
  width: 290px;
  height: 160px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
