<template lang="">
  <div class="flex justify-center h-20 content-center flex-wrap">
 
    <slot name="button" />

 
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
 
 
 
const CourseDesc = ref({})
const props = defineProps({
  SubChapterIndex: {
    type: Number
  },
  ChapterIndex: {
    type: Number
  },
  courseId: {
    type: Number
  }
})

onMounted(async () => {
 
  // console.log('CourseDesc', CourseDesc.value)
})
 
 

 
</script>
