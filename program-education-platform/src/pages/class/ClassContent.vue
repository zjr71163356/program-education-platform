<template lang="">
  <div class="flex flex-row container-height">
    <MdCatalog
      :editorId="id"
      :scrollElement="scrollElement"
      class="overflow-auto w-1/6 h-full"
      :theme="state.theme"
    />
    <div class="flex flex-col w-5/6 h-full">
      <div class="flex-grow">
        <MdPreview
          :editorId="id"
          :modelValue="text"
          :previewTheme="state.theme"
          :codestate="codestate"
        />
      </div>
      <FooterBanner
        class="justify-self-end pb-5"
        :SubChapterIndex="subChapterIndex"
        :ChapterIndex="chapterIndex"
        :courseId="courseId"
      />
    </div>
  </div>
</template>
<script setup>
// import '@vavt/markdown-theme/all.css';
import CourseServices from '@/api/CourseServices.js'
import { ref, reactive, onMounted ,watch} from 'vue'
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
// import mdtext from '@/data/doc/grammar.md?raw'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = 'preview-only'
const text = ref('')
const scrollElement = document.documentElement
const state = reactive({
  text: '',
  theme: 'smart-blue'
})
const codestate = reactive({
  text: '',
  theme: 'stackoverflow'
})
const subChapterIndex = ref(Number(route.query.subChapterIndex))
const chapterIndex = ref(Number(route.query.chapterIndex))
const courseId = ref(Number(route.query.courseId))
onMounted(async () => {
  console.log('onMounted');
  await getMdContent(route.params.subChapterId)
})
async function getMdContent(subChapterId) {
  try {
    const data = await CourseServices.getCourseSubChapterById(subChapterId)
    text.value = data.markdownContent
  } catch (error) {
    console.log(error)
  }
}
watch(
  () => route.fullPath,
  async () => {
    subChapterIndex.value = Number(route.query.subChapterIndex)
    chapterIndex.value = Number(route.query.chapterIndex)
    await getMdContent(route.params.subChapterId)
  }
)
</script>
<style scoped>
/* Add this CSS rule */
:deep(.md-editor-catalog-link span:hover) {
  color: #3b71ca;
}
:deep(.md-editor-catalog-active > span) {
  color: #3b71ca;
}

.container-height {
  height: calc(100vh - 48px);
}
</style>
