<template>
  <div class="bg-white h-screen w-screen fixed top-0 left-0">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <SuccessAlert class="w-1/5 self-center" :message="'注册'" :IsShow="IsShowSuccess" />
      <ErrorAlert
        class="w-1/5 self-center"
        :message="'注册失败，请检查注册信息'"
        :IsShow="IsShowError"
      />
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          注册账号
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >账号</label
            >
            <div class="mt-2">
              <input
                id="account"
                name="account"
                type="account"
                autocomplete="account"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.account"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >用户名</label
            >
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autocomplete="username"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.username"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >密码</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.password"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >重复密码</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.confirmPassword"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              @click="register"
            >
              登录
            </button>
          </div>
        </form>
        <router-link :to="{ name: 'SignIn' }">
          <p class="mt-10 text-center text-sm text-gray-500">
            已经注册?
            {{ ' ' }}
            <a href="#" class="font-semibold leading-6 text-green-600 hover:text-green-500">登录</a>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import SuccessAlert from '@/components/user/SuccessAlert.vue'
const IsShowSuccess = ref(false)
const IsShowError = ref(false)
const router = useRouter()
const loginModel = ref({
  account: '',
  username: '',
  password: '',
  confirmPassword: ''
})
const register = async () => {
  // const { username, password } = loginModel.value
  // const response = await fetch('/api/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ username, password })
  // })
  // const { token } = await response.json()

  const token = '123'
  if (token) {
    localStorage.setItem('token', token)
    IsShowSuccess.value = true
    setTimeout(() => {
      IsShowSuccess.value = false
      router.push('/')
    }, 1000)
  }
}
</script>
<style scoped></style>
