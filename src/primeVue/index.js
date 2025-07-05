import { definePreset } from '@primeuix/themes'
import { app } from '@/app_root.js'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

const MyPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
})

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
