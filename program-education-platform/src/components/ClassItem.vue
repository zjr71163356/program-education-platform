<template>
  <div
    class="bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
  >
    <h3 class="mb-3 text-xl font-bold text-blue-600">{{ title }}</h3>
    <div class="relative">
      <img
        class="w-full rounded-xl"
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="Colors"
      />
      <p
        class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg"
      >
        FREE
      </p>
    </div>

    <div class="my-4">
      <div class="flex space-x-1 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-600 mb-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <p>{{ duration }}</p>
      </div>
      <div class="flex space-x-1 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-600 mb-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        <p>{{ parts }}</p>
      </div>
      <div class="flex space-x-1 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-600 mb-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </span>
        <p>{{ language }}</p>
      </div>
      <router-link :to="{ name: 'ClassDesc' }">
        <button  v-if="!deletemode" class="mt-4 text-xl w-full text-white bg-blue-600 py-2 rounded-xl shadow-lg">
          进入
        </button>
      </router-link>
      <button
        v-if="deletemode"
        class="mt-4 text-xl w-full text-white bg-red-600 py-2 rounded-xl shadow-lg"
      >
        移除
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    deletemode: {
      type: Boolean,
      default: false
    }
  },
  name: 'ClassItem',
  data() {
    return {
      title: 'JavaScript初学者入门',
      duration: '1小时34分钟23秒',
      parts: '3个部分',
      language: 'JavaScript'
    }
  }
})
</script>
