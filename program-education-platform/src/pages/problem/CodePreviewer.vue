<template>
  <MdPreview :editorId="id" :modelValue="text" />
</template>

<script setup>
import { ref,watchEffect } from 'vue'
import { MdPreview } from 'md-editor-v3'
 
import 'md-editor-v3/lib/preview.css'
 
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
const text = ref('')
watchEffect(() => {
  text.value = '```auto \n'  + props.testcode + '\n```'
})
</script>
