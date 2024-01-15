import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com

const app = createApp(App)

app.use(router)
app.mount('#app')
