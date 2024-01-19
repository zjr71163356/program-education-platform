import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { basicSetup } from 'codemirror'
import VueCodemirror from 'vue-codemirror'

const app = createApp(App)
console.log(basicSetup)

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

app.mount('#app')
