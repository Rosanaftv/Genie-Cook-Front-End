import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search/:search",
    name: "Search",
    components: Search,
    props: true,
  },
  /*{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
