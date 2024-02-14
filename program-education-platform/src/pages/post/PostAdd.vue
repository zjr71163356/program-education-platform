<template>
  <form class="w-screen" @submit="submitForm">
    <div class="relative mb-3 mt-5   " data-te-input-wrapper-init>
      <input
        type="text"
        class="peer block min-h-[auto] w-full rounded border-1 border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary  "
        id="exampleFormControlInput1"
        placeholder="请输入标题"
        v-model="title"
      />
    </div>

    <MdEditor v-model="text" class="my-5" />

    <div class="flex justify-end">
      <button
        type="submit"
        class="rounded-md bg-blue-600 px-8 py-2.5 text-base  font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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

