import Vue from "vue";
import Router from "vue-router";
import Body from "./organisms/Body.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "body",
      component: Body
    }
  ]
});
