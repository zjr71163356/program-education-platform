<template lang="">
  <!-- Card -->
  
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 custome-h overflow-auto ">
      <div class="border  border-neutral-100 px-6 py-4 dark:border-neutral-500">
    <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
      <span class="mr-2">
        TITLE
      </span>
    </h5>
  </div>
    <!-- Card body -->
    <div class=" ">
      <!-- Title -->
      <MdPreview
        :editorId="id"
        :modelValue="text"

        :codestate="codestate"
      />
    </div>
  </div>
  <!-- Card -->
</template>
<script setup>
import { ref, reactive } from 'vue'
import mdtext from '@/data/doc/test.md?raw'
import { MdPreview } from 'md-editor-v3'
const id = 'problem'
 
const text = ref(mdtext)
</script>
<style scoped>
.custome-h{
  height: calc(100vh - 90px)
}
</style>
