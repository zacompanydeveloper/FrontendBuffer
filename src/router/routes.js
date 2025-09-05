export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/activate",
    name: "activate",
    component: () => import("@/pages/Activate.vue"),
  },
  {
    path: "/check",
    name: "check",
    component: () => import("@/pages/Check.vue"),
  },
  {
    path: "/e-warranty-temp-url/:signature/:base64data",
    name: "e-warranty-temp-url",
    component: () => import("@/pages/EwarrantyTempUrl.vue"),
  },
  {
    path: "/lucky-draw/:signature/:tracking_code",
    name: "lucky-draw",
    component: () => import("@/pages/LuckyDraw.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),  
  },
];

export default routes;
