<template>
  <form class="w-screen" @submit="submitForm">
    <div class="relative mb-3 mt-5 w-full   flex justify-center items-center"  >
      <span class="text-xl ">贴子标题</span>
      <el-input v-model="input" placeholder="Please input" style="padding:0  10px;width:50%"/>
    </div>

    <MdEditor v-model="text" class="my-5" />

    <div class="flex justify-end">
      <button
        type="submit"
        class="rounded-md bg-blue-600 px-8 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        发布
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const title = ref('')
const text = ref('Hello Editor!')

const submitForm = () => {
  // Handle form submission logic here
}
</script>
<style scoped>:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}</style>
