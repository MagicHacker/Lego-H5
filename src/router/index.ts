import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/index.vue";
import mainPage from "../views/main-page/index.vue";
Vue.use(VueRouter);

const routes: any = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainPage",
    name: "mainPage",
    component: mainPage
  },
  {
    path: "",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
