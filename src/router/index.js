import { app } from '@/app_root.js'
import { createRouter, createWebHistory } from 'vue-router'
import backendApi from '@/api/backend.js'

import rotues from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotues,
})

router.beforeEach((to, from, next) => {
  // 
  next()
});

app.use(router)

export default router
