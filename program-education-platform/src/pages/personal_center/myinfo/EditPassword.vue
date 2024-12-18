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
            type="password"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
            v-model="oriPW"
          />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">新密码</label>
        <div class="mt-2">
          <input
            type="password"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
            @input="validatePassword"
            v-model="newPW"
          />
          <span v-if="!isPasswordValid" class="text-red-500 text-xs"
            >密码包含至少一个大写字母、一个小写字母和一个数字,长度在6-20个字符</span
          >
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
          >重复输入新密码</label
        >
        <div class="mt-2">
          <input
            type="password"
            name="email"
            id="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
            v-model="newPW2"
            @input="validateConfirmPassword"
          />
          <span v-if="!isConfirmPasswordValid" class="text-red-500 text-xs">两次密码不一致</span>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <div class="flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="EditPassword"
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
import UserServices from '@/api/UserServices'
import { ElMessage } from 'element-plus'

const router = useRouter()
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const oriPW = ref('')
const newPW = ref('')
const newPW2 = ref('')
const isPasswordValid = ref(true)
const validatePassword = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
  isPasswordValid.value = regex.test(newPW.value)
}
const isConfirmPasswordValid = ref(true)
const validateConfirmPassword = () => {
  isConfirmPasswordValid.value = newPW.value === newPW2.value
}
const EditPassword = async () => {
  console.log(oriPW.value, newPW.value, newPW2.value)
  validateConfirmPassword()
  validatePassword()
  if (!isPasswordValid.value || !isConfirmPasswordValid.value) {
    ElMessage({
      type: 'error',
      message: '密码不符合规范'
    })
    return
  }
  const user = {
    Account: JSON.parse(token).account,
    Password: oriPW.value
  }
  const res = await UserServices.isUserPWMatch(user)
  console.log(res)
  if (res) {
    await UserServices.updateUserPW(userId, {
      password: newPW.value
    })
      .then((res) => {
        ElMessage({
          type: 'success',
          message: '修改成功'
        })
        router.push({ name: 'TheProfile' })
      })
      .catch((err) => {
        ElMessage({
          type: 'error',
          message: '修改失败'
        })
      })
  } else {
    ElMessage({
      type: 'error',
      message: '原密码错误'
    })
  }

  // await UserServices.updateUserPW(userId, {
  //   password: newPW.value
  // })
  //   .then((res) => {
  //     console.log(res)
  //     if (res.status === 200) {
  //       ElMessage({
  //         type: 'success',
  //         message: '修改成功'
  //       })
  //       router.push({ name: 'TheProfile' })
  //     }
  //   })
  //   .catch((err) => {
  //     ElMessage({
  //       type: 'error',
  //       message: '修改失败'
  //     })
  //   })
}
onMounted(() => {})
</script>
<style lang=""></style>
