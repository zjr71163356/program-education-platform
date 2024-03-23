import { fileURLToPath, URL } from 'node:url'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// const __dirname = path.resolve()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ElementPlus(),
    // nodePolyfills(),
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))

      // root: path.resolve(__dirname, 'src'),
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  }
})
