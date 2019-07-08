import Vue from "vue";
import Router from "vue-router";
import SpotsList from "./organisms/SpotsList.vue";
import AddSpot from "./molecules/AddSpot.vue";
import ShowSpot from "./molecules/ShowSpot.vue";
import AddComment from "./molecules/AddComment.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "spots-list",
      component: SpotsList
    },
    {
      path: "/spot/:id",
      name: "show-spot",
      component: ShowSpot,
      props: true
    },
    {
      path: "/spot/add",
      name: "add-spot",
      component: AddSpot
    },
    {
      path: "/comment/:id",
      name: "add-comment",
      component: AddComment,
      props: true
    }
  ]
});
