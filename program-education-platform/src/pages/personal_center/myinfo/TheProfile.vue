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
              <div class="col-span-full flex gap-x-5">
                <el-upload class="avatar-uploader">
                  <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatar" />
                </el-upload>
                <el-upload class="avatar-uploader" :http-request="uploadImage" :limit="1">
                  <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
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
                      >{{ userInfo.role }}
                    </span>
                    <input
                      type="text"
                      name="username"
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
                      >{{ userInfo.userId }}
                    </span>
                    <input
                      type="text"
                      name="userid"
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
                      >{{ userInfo.account }}
                    </span>
                    <input
                      type="text"
                      name="userid"
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
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                      v-model="userInfo.userName"
                    />
                  </div>
                </div>
              </div>

              <!-- <hr/> -->
            </div>
            <div class="flex items-center justify-end gap-x-6">
              <button
                @click="saveUserInfo"
                type="button"
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
import { Plus } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import UserServices from '@/api/UserServices'
import { ElMessage } from 'element-plus'

const userInfo = ref(JSON.parse(token))
const saveUserInfo = async () => {
  await UserServices.updateUserProfile(userInfo.value.userId, userInfo.value).then((res) => {
    console.log(res)
    localStorage.setItem('token', JSON.stringify(userInfo.value))
    ElMessage({
      type: 'success',
      message: '保存成功'
    })
  })
}
const uploadImage = async (file) => {
  try {
    // console.log(file)
    await UserServices.uploadImage(file).then((res) => {
      userInfo.value.avatar = res.data.url
      console.log(userInfo.value.avatar)
    })
    ElMessage({
      type: 'success',
      message: '保存成功'
    })
    // Emit the 'imgurl' to the parent component
  } catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  console.log(userInfo.value)
})
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
