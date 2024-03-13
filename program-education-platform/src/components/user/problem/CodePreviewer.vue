<template>
  <MdPreview :editorId="id" :modelValue="text" />
</template>

<script setup>
import { ref } from 'vue'
import { MdPreview } from 'md-editor-v3'
 
import 'md-editor-v3/lib/preview.css'
const languaglist = {
  'C++': 'cpp',
  Java: 'java',
  Python: 'python',
  Javascript: 'javascript'
}
const id = 'preview-only'
const props = defineProps({
  language: {
    type: String,
    default: 'cpp'
  },
  testcode: {
    type: String
  }
})
const text = ref('```auto ' + props.testcode + '```')
</script>
