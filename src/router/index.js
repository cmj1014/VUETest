import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
    {
      path: "/main",
      name: "Main",
      component: () =>
        import( "../views/Main.vue")
    },
    {
      path: "/usedMain",
      name: "usedMain",
      component: () =>
        import("../views/userdMain.vue")
    },
    {
      path: "/componentsList",
      name: "componentsList",
      component: () =>
        import("../views/componentsList.vue")
    },
    {
      path: "/plugList",
      name: "plugList",
      component: () =>
        import("../views/plugList.vue")
    },
    {
      path: "/vueList",
      name: "vueList",
      component: () =>
        import("../views/vueList.vue")
    }, {
      path: "/goToVueCli",
      name: "goToVueCli",
      component: () =>
        import("../views/goToVueCli.vue")
    }
    
    
    
    
];

const router = new VueRouter({
  routes
});

export default router;
