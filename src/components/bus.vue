<template>
  <div class="dataIndex">
    <div>总线控制通讯——有加入vue-bus</div>

    <Bus1></Bus1>
    <Bus2></Bus2>
    <h3>vue-bus 使用案例</h3>
    <div>
      <div>参考网址：http://www.manongjc.com/detail/10-mkrvkxpghpkajqs.html</div>
      <div>安装</div>
      <code>npm install vue-bus</code>
      <div>如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装 vue-bus：</div>
      <code>
        import Vue from 'vue';
        import VueBus from 'vue-bus';
        Vue.use(VueBus);
      </code>
      <div>
        使用
监听事件
      </div>
      <pre>



        data () {
              return {
                  addTodo:""
              }
        },
        created() {
            this.$bus.on('add-todo', (val) => {
              this.addTodo = val
            });
        },

      </pre>
      <div>触发事件</div>
      <pre>
         <div>
              <div @click="send"></div>
        </div>
      </pre>
      <pre>
           data () {
    return {
      userName:null,
      newTodoText:''
    }
  },
  methods: {
    send () {
      this.newTodoText = 'hello world'
       this.$bus.emit('add-todo', this.newTodoText );
       
    },
  }
      </pre>
    </div>
  </div>
</template>

<script>
import { mixins1 } from "@/assets/js/mixinsObj.js";
import Bus1 from "./bus1.vue";
import Bus2 from "./bus2.vue";
export default {
  name: "mixinAction",
  components: { Bus1, Bus2 },
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style scoped></style>
