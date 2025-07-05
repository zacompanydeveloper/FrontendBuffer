import { app } from '@/app_root.js'
import { createRouter, createWebHistory } from 'vue-router'

import rotues from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotues,
})

app.use(router)
