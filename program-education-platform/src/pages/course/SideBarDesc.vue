<template lang="">
  <!-- Card -->
  <div class="flex flex-col justify-center">
    <div
      v-for="(item, chapterIndex) in Course.courseChapters"
      class="mx-20 block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center mb-10"
      :key="chapterIndex"
      :ref="(el) => (myElements[chapterIndex] = el)"
    >
      <!-- Card header -->
      <div class="border-b-2 rounded-lg border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          <span class="mr-2"> {{ item.chapterNumber + '.' }}{{ item.title }} </span>
        </h5>
      </div>

      <!-- Card body -->
      <div class="p-6">
        <ul
          class="!visible relative m-0 list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        >
          <router-link
            v-for="(itemchild, subChapterIndex) in item.subChapters"
            class="relative"
            :key="subChapterIndex"
            :ref="subChapterIndex"
            :to="{
              name: 'CourseContent',
              query: {
                subChapterIndex: subChapterIndex,
                chapterIndex: chapterIndex,
                courseId: Course.courseId
              },
              params: {
                subChapterId: itemchild.subChapterId
              }
            }"
          >
            <li>
              <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                {{ subChapterIndex + 1 + '.' }}{{ itemchild.title }}</a
              >
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
  <!-- Card -->
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  Course: Array
})
const myElements = ref({})

onMounted(() => {
  const scrollTo = (event) => {
    const id = event.detail

    myElements.value[id].scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  // 监听自定义事件
  window.addEventListener('scrollTo', scrollTo)

  // 在组件卸载时移除事件监听
  onUnmounted(() => {
    window.removeEventListener('scrollTo', scrollTo)
  })
})
</script>
<style lang=""></style>
