<template lang="">
  <div class="flex justify-between h-20 content-center flex-wrap">
    <div
      class="flex cursor-pointer"
      @click="lastSubChapter(CourseDesc.courseChapters, props.SubChapterIndex, props.ChapterIndex)"
    >
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
    <slot name="button" />

    <div
      class="flex cursor-pointer"
      @click="nextSubChapter(CourseDesc.courseChapters, props.SubChapterIndex, props.ChapterIndex)"
    >
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
