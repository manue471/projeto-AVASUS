import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardTemplate from '@/templates/DashboardTemplate.vue'
import dashboardRoutes from "./dashboardRoutes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...dashboardRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
