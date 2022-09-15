import { RouteConfig } from "vue-router";

const dashboardRoutes: RouteConfig[] = [
  {
    path: "/",
    name: 'dashboard',
    component: () => import("@/templates/DashboardTemplate.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "single-module/:id",
        name: "single-module",
        component: () => import("@/views/SingleModule/index.vue"),
      },
      {
        path: "modules",
        name: "modules",
        component: () => import("@/views/Modules/index.vue"),
      },
      {
        path: "partners",
        name: "partners",
        component: () => import("@/views/Partners/index.vue"),
      },
      {
        path: "transparency",
        name: "transparency",
        component: () => import("@/views/Transparency/index.vue"),
      },
    ]
  }
];

export default dashboardRoutes;