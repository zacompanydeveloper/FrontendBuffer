export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/activate',
    name: 'activate',
    component: () => import('@/pages/Activate.vue'),
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('@/pages/Check.vue'),
  },
  {
    path: '/e-warranty-temp-url/:signature/:base64data',
    name: 'e-warranty-temp-url',
    component: () => import('@/pages/EwarrantyTempUrl.vue'),
  }
]

export default routes
