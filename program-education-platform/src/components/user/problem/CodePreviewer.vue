<template>
<MdPreview :editorId="id" :modelValue="text"   />
</template>

<script setup>
import { ref } from 'vue'
import { MdPreview } from 'md-editor-v3'
import testcode from '@/data/testcode.txt?raw'
import 'md-editor-v3/lib/preview.css'
const languaglist = ['javascript', 'cpp', 'java', 'python']
const id = 'preview-only'
const props = defineProps({
  language: {
    type: String,
    default: 'cpp'
  }
})
const text = ref('```' + props.language + ' ' + testcode + '```')
</script>
