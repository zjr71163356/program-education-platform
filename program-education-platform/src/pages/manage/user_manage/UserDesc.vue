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
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-full">
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
                  <img   class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="'https://ui-avatars.com/api/?name=' + userInfo.username" />
                  <button
                    type="button"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600"
                    >
                      <span>更新头像</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                  </button>
                </div>
              </div>
              <div class="sm:col-span-4">
                <div class="mt-2">
                  <div>
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900"
                      >角色</label
                    >
                    <select
                      v-model="userInfo.role"
                      id="location"
                      name="location"
                      class="mt-2 block w-1/4 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                    >
                      <option>管理员</option>
                      <option selected="">教师</option>
                      <option>学生</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >用户Id</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
                  >
                    <span
                      class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                    ></span>

                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      autocomplete="userid"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      v-model="userid"
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
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
                  >
                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    </span>
                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      autocomplete="userid"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      v-model="userInfo.account"
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
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
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
                      v-model="userInfo.username"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >密码
                </label>
          
                  <div class="mt-2 w-full">
                    <div
                      class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
                    >
                      <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      </span>

                      <input
                        :type="showPassword==='显示密码'?'password':'text'"
                        name="username"
                        id="username"
                        autocomplete="username"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                        v-model="userInfo.password"
                      />
                      <button
                      type="button"
                      class="justify-self-start rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    @click="toggleShowPassword">
                      {{ showPassword }}
                    </button>
                    </div>
                  </div>
     
           
              </div>

              <!-- <hr/> -->
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6">
            <button
              type="submit"
              class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              保存
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
 
</template>

<script setup>
 
import { useRoute } from 'vue-router'
import { userList } from '@/data/data.js'
import {  ref } from 'vue'
const route = useRoute()
const userid = route.params.id
const userInfo = ref(userList[userid - 1])
const showPassword = ref('显示密码')
const toggleShowPassword = () => {
  if (showPassword.value === '显示密码') {
    showPassword.value = '隐藏密码'
 
  } else {
    showPassword.value = '显示密码'
   
  }
}

 
</script>
