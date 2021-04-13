import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      redirect: "/starter",
      component: () => import("@/layouts/full-layout/FullLayout"),
      children: [
        {
          name: "Starter",
          path: "starter",
          component: () => import("@/views/Starter"),
        },
        {
          name: "Alert",
          path: "/ui-elements/alert",
          component: () => import("@/views/ui-elements/Alert"),
        },
        {
          name: "Avatar",
          path: "/ui-elements/avatar",
          component: () => import("@/views/ui-elements/Avatar"),
        },
        {
          name: "Badge",
          path: "/ui-elements/badge",
          component: () => import("@/views/ui-elements/Badge"),
        },
        {
          name: "Breadcrumb",
          path: "/ui-elements/breadcrumb",
          component: () => import("@/views/ui-elements/Breadcrumb"),
        },
        {
          name: "Buttons",
          path: "/ui-elements/buttons",
          component: () => import("@/views/ui-elements/Buttons"),
        },
        {
          name: "Button Group",
          path: "/ui-elements/button-group",
          component: () => import("@/views/ui-elements/ButtonGroup"),
        },

        {
          name: "Cards",
          path: "/ui-elements/cards",
          component: () => import("@/views/ui-elements/Cards"),
        },

        {
          name: "Dropdown",
          path: "/ui-elements/dropdown",
          component: () => import("@/views/ui-elements/Dropdown"),
        },
        {
          name: "Popover",
          path: "/ui-elements/popover",
          component: () => import("@/views/ui-elements/Popover"),
        },

        {
          name: "Toasts",
          path: "/ui-elements/toasts",
          component: () => import("@/views/ui-elements/Toasts"),
        },
        {
          name: "Tooltip",
          path: "/ui-elements/tooltip",
          component: () => import("@/views/ui-elements/Tooltip"),
        },
      ],
    },
    {
      path: "*",
      component: () => import("@/views/Starter"),
    },
  ],
});

export default router;
