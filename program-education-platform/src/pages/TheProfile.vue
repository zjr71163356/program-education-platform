<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-4/5">
    <!-- Card body -->
    <div class="p-6">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-5">
            <h2 class="text-base font-semibold leading-7 text-gray-900">个人资料</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label for="photo" class="block text-sm font-medium leading-6 text-gray-900"
                  >头像</label
                >
                <div class="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                  <button
                    type="button"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
                    >
                      <span>更新头像</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                  </button>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >角色</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                  >
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                      >管理员
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >用户Id</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                  >
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                      >1001
                    </span>
                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      autocomplete="userid"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >账号</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                  >
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                      >account_user10
                    </span>
                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      autocomplete="userid"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >用户名</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                  >
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <!-- <hr/> -->
            </div>
            <div class="flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                保存
              </button>
            </div>
          </div>
        </div>
    
        <div class="sm:col-span-4 mt-5 flex items-center justify-start gap-10 w-full">
          <label
            for="useremail"
            class="w-1/8 block text-sm font-medium leading-6 text-gray-900 flex items-center"
            >密码</label
          >
          <div class="w-1/3 h-full">
            <div
              class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
            >
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                ********</span
              >
              <input
                type="password"
                name="useremail"
                id="useremail"
                autocomplete="useremail"
                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <router-link :to="{ name: 'EditPassword' }">
            <button
              type="button"
              class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <span>修改</span>
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
  <!-- Card -->
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid'
</script>
