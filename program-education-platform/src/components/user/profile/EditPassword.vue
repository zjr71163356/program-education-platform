<template lang="">
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-1/3">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500 text-center">
      <h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
        修改密码
      </h5>
    </div>

    <!-- Card body -->
    <div class="p-6">
      <!-- Title -->
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">原密码</label>
        <div class="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">新密码</label>
        <div class="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
          >重复输入新密码</label
        >
        <div class="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
    </div>
    <div class="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <div class="flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          保存
        </button>
      </div>
    </div>
    <!-- Card footer -->
  </div>
  <!-- Card -->
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')

const router = useRouter()

onMounted(() => {
  console.log(router.currentRoute.value.params.content)

  title.value = router.currentRoute.value.params.content
})
</script>
<style lang=""></style>
