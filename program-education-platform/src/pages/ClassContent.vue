<template lang="">
  <div class="flex flex-row">
    <MdCatalog :editorId="id" :scrollElement="scrollElement" class="overflow-auto h-screen w-1/6" />
    <div class="flex flex-col w-5/6">
      <MdPreview
        :editorId="id"
        :modelValue="text"
        :previewTheme="state.theme"
        :codestate="codestate"
      />
      <div class="  flex justify-between h-20 content-center flex-wrap ">
        <div class="flex" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span> 上一个</span>
        </div>

        <div class="flex">
          <span> 下一个</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import mdtext from '@/data/doc/grammar.md?raw'
console.log(mdtext)
const id = 'preview-only'
const text = ref(mdtext)
const scrollElement = document.documentElement
const state = reactive({
  text: '',
  theme: 'cyanosis'
})
const codestate = reactive({
  text: '',
  theme: 'stackoverflow'
})
</script>
<style scoped>
/* Add this CSS rule */
.md-editor-catalog-active > span {
  color: red;
}
</style>
