import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityId:"3100",cityName:"shanghai",tabbarFlag:true,indexFlag:true
  },
  mutations: {
    changeCityName(state,name){
      console.log("11,changeCityName1---", name)
      state.cityName = name;
    },
    showTab(state) {
      state.tabbarFlag = true
    },
    hideTab(state) {
      state.tabbarFlag = false
    },
    showIndexTab(state) {
      state.indexFlag = true
    },
    hideIndexTab(state) {
      console.log("hideIndexTab")
      state.indexFlag = false
    }
  },
  actions: {
    getData(store, id) {
      console.log("id:",id)
      
    }
  },
  modules: {}
});
