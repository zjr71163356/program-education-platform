<template>
  <div class="bg-white h-screen w-screen fixed top-0 left-0">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <SuccessAlert class="w-1/5 self-center" :message="'登录'" :IsShow="IsShowSuccess" />
      <ErrorAlert
        class="w-1/5 self-center"
        :message="'登录失败，请检查用户名是否存在以及密码是否正确'"
        :IsShow="IsShowError"
      />
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          登录你的账号
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6"  >
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
              >账号</label
            >
            <div class="mt-2">
              <input
                id="account"
                name="account"
      
                autocomplete="account"
                required=""
                class="ps-3 pe-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                v-model="loginModel.account"
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
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                v-model="loginModel.password"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              @click="login"
            >
              登录
            </button>
          </div>
        </form>
        <router-link :to="{ name: 'TheRegister' }">
          <p class="mt-10 text-center text-sm text-gray-500">
            还未注册?
            {{ ' ' }}
            <span class="font-semibold leading-6 text-blue-600 hover:text-blue-500">马上注册</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserServices from '@/api/UserServices'
import SuccessAlert from '@/components/user/SuccessAlert.vue'
const router = useRouter()
const loginModel = ref({
  account: '',

  password: ''
})
const IsShowSuccess = ref(false)
const IsShowError = ref(false)
const login = async () => {
  try {
    const user = {
      Account: loginModel.value.account,
      Password: loginModel.value.password
    }
    const data = await UserServices.userLogin(user)
    console.log(data);
    if (data.role) {
     const  token= JSON.stringify(data)
     const role= data.role
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
        IsShowSuccess.value = true
        setTimeout(() => {
          IsShowSuccess.value = false
          router.push('/')
        }, 1000)
      }
    }
  } catch (e) {
    IsShowError.value = true
    setTimeout(() => {
      IsShowError.value = false
    }, 1000)
  }
}
</script>
<style scoped></style>
