<template lang="">
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-2/3 flex flex-col   items-center">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300">
        <span class="mr-2"> Featured </span>
      </h5>
    </div>

    <!-- Card body -->
    <div class="p-6">
      <MdPreview :editorId="id" :modelValue="text" />
    </div>
    <CommentPlugin />
  </div>
  <!-- Card -->
</template>
<script setup>
import { ref } from 'vue'
import data from '@/data/doc/problemsolution.md?raw'
import { MdPreview } from 'md-editor-v3'
const id = 'problem'

const text = ref(data)
</script>
<style lang=""></style>
