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
      <Footer/>
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
