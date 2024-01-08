import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
import { Carousel, initTE, Sidenav } from 'tw-elements'
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// Initialization for ES Users


initTE({ Carousel, Sidenav }, { allowReinits: true }) // set second parameter to true if you want to use a debugger
const app = createApp(App)

app.use(router)
app.mount('#app')
