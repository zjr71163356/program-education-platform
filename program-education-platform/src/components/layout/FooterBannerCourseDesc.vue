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
import { useRoute, useRouter } from 'vue-router'
import CourseServices from '@/api/CourseServices.js'
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

const CourseDesc = ref({})
onMounted(async () => {
  await getCoursesById(props.courseId)
  // console.log('CourseDesc', CourseDesc.value)
})
async function getCoursesById(courseId) {
  try {
    const data = await CourseServices.getCoursesById(courseId)
    CourseDesc.value = data
  } catch (error) {
    console.log(error)
  }
}

const route = useRoute()
const router = useRouter()

// const nextSubChapterId = ref(route.query.nextSubChapterId)
// const lastSubChapterId = ref(route.query.lastSubChapterId)
// console.log('nextSubChapterId', nextSubChapterId.value)
// console.log('lastSubChapterId', lastSubChapterId.value)

const nextSubChapter = (CourseDesc, subChapterIndex, chapterIndex) => {
  const { nextChapterIndex, nextSubChapterIndex, nextSubChapterId } = getNextSubChapter(
    CourseDesc,
    subChapterIndex,
    chapterIndex
  )
  console.log(nextChapterIndex, nextSubChapterIndex, nextSubChapterId)
  router.push({
    name: 'CourseContent',
    query: {
      subChapterIndex: nextSubChapterIndex,
      chapterIndex: nextChapterIndex,
      courseId: route.query.courseId
    },
    params: {
      subChapterId: nextSubChapterId
    }
  })
}
const lastSubChapter = (CourseDesc, subChapterIndex, chapterIndex) => {
  const { lastChapterIndex, lastSubChapterIndex, lastSubChapterId } = getLastSubChapterId(
    CourseDesc,
    subChapterIndex,
    chapterIndex
  )
  router.push({
    name: 'CourseContent',
    query: {
      subChapterIndex: lastSubChapterIndex,
      chapterIndex: lastChapterIndex,
      courseId: route.query.courseId
    },
    params: {
      subChapterId: lastSubChapterId
    }
  })
}

const getNextSubChapter = (CourseDesc, subChapterIndex, ChapterIndex) => {
  console.log(subChapterIndex + 1)
  if (CourseDesc[ChapterIndex].subChapters.length > subChapterIndex + 1) {
    return {
      nextChapterIndex: ChapterIndex,
      nextSubChapterIndex: subChapterIndex + 1,
      nextSubChapterId: CourseDesc[ChapterIndex].subChapters[subChapterIndex + 1].subChapterId
    }
  } else if (CourseDesc.length > ChapterIndex + 1) {
    return {
      nextChapterIndex: ChapterIndex + 1,
      nextSubChapterIndex: 0,
      nextSubChapterId: CourseDesc[ChapterIndex + 1].subChapters[0].subChapterId
    }
  } else {
    return {
      nextChapterIndex: 0,
      nextSubChapterIndex: 0,
      nextSubChapterId: CourseDesc[0].subChapters[0].subChapterId
    }
  }
}

const getLastSubChapterId = (CourseDesc, subChapterIndex, ChapterIndex) => {
  if (subChapterIndex - 1 >= 0) {
    return {
      lastChapterIndex: ChapterIndex,
      lastSubChapterIndex: subChapterIndex - 1,
      lastSubChapterId: CourseDesc[ChapterIndex].subChapters[subChapterIndex - 1].subChapterId
    }
  } else if (ChapterIndex - 1 >= 0) {
    return {
      lastChapterIndex: ChapterIndex - 1,
      lastSubChapterIndex: CourseDesc[ChapterIndex - 1].subChapters.length - 1,
      lastSubChapterId:
        CourseDesc[ChapterIndex - 1].subChapters[
          CourseDesc[ChapterIndex - 1].subChapters.length - 1
        ].subChapterId
    }
  } else {
    return {
      lastChapterIndex: CourseDesc.length - 1,
      lastSubChapterIndex: CourseDesc[CourseDesc.length - 1].subChapters.length - 1,
      lastSubChapterId:
        CourseDesc[CourseDesc.length - 1].subChapters[
          CourseDesc[CourseDesc.length - 1].subChapters.length - 1
        ].subChapterId
    }
  }
}
</script>
