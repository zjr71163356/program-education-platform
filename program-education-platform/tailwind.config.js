import formsPlugin from '@tailwindcss/forms'
import twelements from 'tw-elements/dist/plugin.cjs'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '1/20': '50%',
      }
    }
  },
  plugins: [formsPlugin, twelements],
  darkMode: 'class'
}
