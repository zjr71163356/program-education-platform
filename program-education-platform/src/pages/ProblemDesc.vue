<template lang="">
  <!-- Card -->

  <div class="flex w-screen">
    <div
      class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 custome-h overflow-auto"
    >
      <div class="border border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
          <span class="mr-2"> TITLE </span>
        </h5>
      </div>
      <!-- Card body -->
      <div>
        <!-- Title -->
        <MdPreview :editorId="id" :modelValue="text" />
      </div>
    </div>
    <div
      class="flex flex-col block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 custome-h overflow-auto"
    >
      <div class="bg-slate-100 flex justify-between content-center">
        <SelectList class="w-1/5 p-2" @selectedlanguage="language = $event" />
        <router-link :to="{name:'ProblemSolution'}" class="self-center">
          <div
            class="rounded-lg  flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 self-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            <div class="self-center">题解</div>
          </div>
        </router-link>
      </div>
      <CodeEditer :selectedlanguage="language" />
      <FooterBanner class="bg-white footer-h p-5]">
        <template #button>
          <button
            @click="openSubmitResult"
            type="button"
            class="rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            提交代码
          </button>
        </template>
      </FooterBanner>
    </div>
  </div>
  <SubmitResult v-model:IsOpen="isOpen" />
  <!-- Card -->
</template>
<script setup>
import { ref } from 'vue'
import mdtext from '@/data/doc/test.md?raw'
import { MdPreview } from 'md-editor-v3'

const id = 'problem'
const language = ref('')
const text = ref(mdtext)
const isOpen = ref(false)
const openSubmitResult = () => {
  console.log('openSubmitResult')
  isOpen.value = true
}
</script>
<style scoped>
.custome-h {
  height: calc(100vh - 90px);
}
.footer-h {
  height: 6%;
}
</style>
