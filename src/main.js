import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import identity from './netlify-identity.js'

import App from './app.vue'

identity.init()
createApp(App).mount('#app')
