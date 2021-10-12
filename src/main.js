
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import localeCN from 'element-ui/lib/locale/lang/zh-CN'
import i18n from './i18n/i18n'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css'
import vueSwiper from 'vue-awesome-swiper'
import VueBus from 'vue-bus'
const echarts = require('echarts')


// import './assets/style/table.scss' /*引入公共表单样式*/
// import './assets/style/main.scss' /*引入公共样式*/
// import './assets/style/element.scss' /*引入公共自定义样式*/
// import './assets/style/animateCss.scss' /*引入公共动画样式*/
import VueVirtualScroller from 'vue-virtual-scroller'

import 'swiper/dist/css/swiper.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import ElBigdataTable from '../static/vue-elementui-bigdata-table.js'

// import BScroll from './components/tools/BScroll.vue'

// Vue.use(BScroll)
// Vue.component('BScroll', BScroll)

Vue.use(ElBigdataTable)
Vue.use(VueVirtualScroller)
Vue.component('RecycleScroller', VueVirtualScroller.RecycleScroller)

Vue.use(vueSwiper)
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
 import Axios from 'axios'
Vue.prototype.$axios = Axios
Vue.prototype.$echarts = echarts
Vue.use(CollapseTransition)
Vue.use(VueBus)//中央控制总线
import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)//媒体查询
Vue.directive('log', {
  bind: function (el, binding, vnode) {
    console.log('el-log', el)
  }
})
Vue.directive('color', {
  bind: function (el, binding, vnode) {
    if (binding.value) {
      el.style.color = binding.value
    } else {
      el.style.color = '#333'
    }
  }
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
