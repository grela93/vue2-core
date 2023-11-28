export const appRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../modules/dashboard/views/Index.vue"),
    meta: {
      title: "Dashboard",
      icon: ["fas", "chart-line"],
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../modules/todo/views/Index.vue"),
    meta: {
      title: "Todo",
      icon: ["fas", "list"],
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("../layout/MainLayout/Index.vue"),
    children: [
      ...appRoutes,
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../views/NotFound.vue"),
      },
    ],
  },
];

export default routes;
