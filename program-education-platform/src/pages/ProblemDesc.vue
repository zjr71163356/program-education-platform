<template lang="">
  <!-- Card -->

  <div class="flex w-screen">
    <div
      class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 container-height overflow-auto"
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
      class="flex flex-col block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 container-height overflow-auto"
    >
      <div class="bg-slate-100 flex justify-between content-center">
        <SelectList class="w-1/5 p-2" @selectedlanguage="language = $event" />
        <div class="w-1/2 flex justify-end">
          <router-link :to="{ name: 'PostList' }" class="self-center">
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <div class="self-center">讨论</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'PostList' }" class="self-center">
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8 self-center"
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
          <router-link :to="{ name: 'CurrentHistroySubmission' }" class="self-center">
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div class="self-center">历史提交</div>
            </div>
          </router-link>
        </div>
      </div>
      <CodeEditer :selectedlanguage="language" />
      <FooterBanner class="bg-white footer-h p-5">
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
.container-height {
  height: calc(100vh - 48px);
}
</style>
