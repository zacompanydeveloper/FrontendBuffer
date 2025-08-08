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
    path: '/e-warranty-temp-url/:code',
    name: 'e-warranty-temp-url',
    component: () => import('@/pages/EWarrantyTempUrl.vue'),
  }
]

export default routes
