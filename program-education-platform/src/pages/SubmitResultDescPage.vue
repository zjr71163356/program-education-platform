<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-4/5">
    <!-- Card body -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
        <span class="mr-2 text-xl">
     提交详情
        </span>
 
      </h5>
    </div>
    <div class="p-6">
      <div class="inset-0 z-10 overflow-y-auto">
        <div class="flex flex-col min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          <div class="bg-slate-100 w-full flex flex-wrap text-center rounded-lg">
            <div
              v-for="(value, key) in SubmitResultDict"
              :key="key"
              class="flex flex-col w-1/3 my-1"
            >
              <span class="text-sm text-gray-500">{{ key }}</span>
              <span>{{ value }}</span>
            </div>
          </div>

          <!-- Card -->

          <!-- Card body -->

          <CodePreviewer></CodePreviewer>

          <!-- Card -->

          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-full">
            <!-- Card header -->
            <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500 border">
              <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
                <span> 编译器输出 </span>
              </h5>
            </div>

            <!-- Card body -->
            <div class="p-6 bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Card -->
</template>

<script setup>
import { ref, watch, defineProps, watchEffect } from 'vue'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import code from '@/data/testcode.txt?raw'

import { oneDark } from '@codemirror/theme-one-dark'
const id = 'preview-only'

import { SubmitResultDict } from '@/data/data'

// const props = defineProps({
//   IsOpen: {
//     type: Boolean,
//     default: true
//   }
// })
// const emit = defineEmits(['update:IsOpen'])
// const closeEvent = () => {
//   open.value = false
//   emit('update:IsOpen', false)
//   console.log('closeEvent')
// }
// watchEffect(() => {
//   console.log('open', open)
// })
// watch(
//   () => props.IsOpen,
//   (newVal, oldVal) => {
//     console.log('newVal', newVal)
//     open.value = newVal
//   }
// )
</script>
