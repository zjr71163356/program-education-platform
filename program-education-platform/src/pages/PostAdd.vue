<template>
  <div class="w-screen">
    <div class="relative mb-3 mt-5   " data-te-input-wrapper-init>

      <label
        for="exampleFormControlInput1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >请输入标题
      </label>
      <input
        type="text"
        class="peer block min-h-[auto] w-full rounded border-1 border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInput1"
        placeholder="Example label" />
    </div>

    <MdEditor v-model="text" class="my-5" />

    <div class="flex justify-end">
      <button
        type="button"
        class="rounded-md bg-blue-600 px-8 py-2.5 text-base  font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        发布
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
 
const text = ref('Hello Editor!')
</script>
