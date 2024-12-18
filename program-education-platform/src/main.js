import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { basicSetup } from 'codemirror'
import VueCodemirror from 'vue-codemirror'
import 'md-editor-v3/lib/preview.css'

const app = createApp(App)
const pinia = createPinia()

app.use(VueCodemirror, {
  // optional default global options
  
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: 'Code goes here...',
  extensions: [basicSetup]
  // ...
})

app.use(router)
app.use(pinia)
app.mount('#app')
