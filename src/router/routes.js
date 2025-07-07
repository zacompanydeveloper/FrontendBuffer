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
  }
]

export default routes
