<template>
  <div class="bg-white h-screen w-screen fixed top-0 left-0 overflow-auto">
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
        <form class="space-y-6">
          <div>
            <div class="flex items-center justify-between">
              <label for="userName" class="block text-sm font-medium leading-6 text-gray-900"
                >用户名</label
              >
            </div>
            <div class="mt-2">
              <input
                id="userName"
                name="userName"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.username"
                @input="validateUsername"
                @blur="isUserNameExist"
              />
              <span v-if="!isUsernameValid" class="text-red-500 text-xs"
                >至少2个中英文字符,不能包括特殊字符</span
              >
              <span v-if="isUserNameExistValue" class="text-red-500 text-xs">用户名重复</span>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="account" class="block text-sm font-medium leading-6 text-gray-900"
                >账号</label
              >
            </div>
            <div class="mt-2">
              <input
                id="account"
                name="account"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.account"
                @input="validateAccount"
                @blur="isUserAccountExist"
              />
              <span v-if="!isAccountValid" class="text-red-500 text-xs">请输入邮箱</span>
              <span v-if="isUserAccountExistValue" class="text-red-500 text-xs">账号重复</span>
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
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.password"
                @input="validatePassword"
              />
              <span v-if="!isPasswordValid" class="text-red-500 text-xs"
                >密码包含至少一个大写字母、一个小写字母和一个数字,长度在6-20个字符</span
              >
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900"
                >重复密码</label
              >
            </div>
            <div class="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                v-model="loginModel.confirmPassword"
                @input="validateConfirmPassword"
              />
            </div>
            <span v-if="!isConfirmPasswordValid" class="text-red-500 text-xs">两次密码不一致</span>
          </div>

          <div>
            <button
              type="button"
              class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              @click="UserRegister"
            >
              注册
            </button>
          </div>
        </form>
        <router-link :to="{ name: 'SignIn' }">
          <p class="mt-10 text-center text-sm text-gray-500">
            已经注册?

            <a class="font-semibold leading-6 text-green-600 hover:text-green-500">登录</a>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserServices from '@/api/UserServices.js'
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

const isUsernameValid = ref(true)
const validateUsername = () => {
  const regex = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,12}$/
  isUsernameValid.value = regex.test(loginModel.value.username)
}
const isAccountValid = ref(true)
const validateAccount = () => {
  const regex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  isAccountValid.value = regex.test(loginModel.value.account)
}
const isPasswordValid = ref(true)
const validatePassword = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
  isPasswordValid.value = regex.test(loginModel.value.password)
}
const isConfirmPasswordValid = ref(true)
const validateConfirmPassword = () => {
  isConfirmPasswordValid.value = loginModel.value.password === loginModel.value.confirmPassword
}
const isUserNameExistValue = ref(false)
const isUserNameExist = async () => {
  if (!isUsernameValid.value) {
    return
  }
  try {
    const result = await UserServices.isUserNameExist(loginModel.value.username)
    isUserNameExistValue.value = result
  } catch (error) {
    console.log(error)
  }
}
const isUserAccountExistValue = ref(false)
const isUserAccountExist = async () => {
  if (!isAccountValid.value) {
    return
  }
  try {
    const result = await UserServices.isUserAccountExist(loginModel.value.account)
    isUserAccountExistValue.value = result
  } catch (error) {
    console.log(error)
  }
}
const UserRegister = async () => {
  isUserNameExist()
  validateUsername()
  validateAccount()
  validatePassword()
  validateConfirmPassword()
  if (
    !isUsernameValid.value ||
    !isAccountValid.value ||
    !isPasswordValid.value ||
    !isConfirmPasswordValid.value ||
    isUserNameExistValue.value
  ) {
    IsShowError.value = true
    setTimeout(() => {
      IsShowError.value = false
    }, 3000)
    return
  } else {
    try {
      const user = {
        Account: loginModel.value.account,
        UserName: loginModel.value.username,
        Password: loginModel.value.password
      }
      // console.log('user', user);
      const result = await UserServices.userRegister(user)
      console.log('注册:', result)
      const token = 'User'
      if (token) {
        localStorage.setItem('token', token)
        IsShowSuccess.value = true
        setTimeout(() => {
          IsShowSuccess.value = false
          router.push({ name: 'SignIn' })
        }, 1500)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped></style>
