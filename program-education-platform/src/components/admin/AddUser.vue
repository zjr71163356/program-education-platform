<template>
  <el-steps :active="1" align-center class="mt-5">
    <el-step title="添加用户" />
    <el-step title="完成" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加用户信息</div>
    <div class="w-2/3">
      <el-form :model="form" label-width="120px" :rules="formRules" ref="formRef">
        <el-form-item label="头像" prop="avatar">
          <el-upload class="avatar-uploader" :http-request="uploadImage">
            <img v-if="form.avatar" :src="form.avatar" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="form.role" placeholder="选择角色" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="账号邮箱" prop="account">
          <el-input v-model="form.account" style="width: 240px" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" style="width: 240px" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            style="width: 240px"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="flex gap-5">
      <el-button @click="onSubmit(formRef, 'save')">保存</el-button>
      <el-button type="primary" @click="onSubmit(formRef, 'next')">保存并下一步</el-button>
    </div>
  </div>
  <!-- Card -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import UserServices from '@/api/UserServices'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const oriUserName=ref('')
const oriAccount=ref('')
onMounted(async () => {
  console.log(route.params.userId)
  await UserServices.getUserById(route.params.userId)
    .then((res) => {
      form.value = res
      oriUserName.value=res.userName
      oriAccount.value=res.account
    })
    .catch((err) => {
      console.log(err)
    })
})
const form = ref({
  userName: '',
  account: '',
  password: '',
  avatar: '',
  role: ''
})
const route = useRoute()
const formRef = ref(null)
const router = useRouter()

const validateUserName = async (rule, value, callback) => {
  const regex = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,12}$/

  const isUsernameValid = regex.test(value)

  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (isUsernameValid) {
      try {
        if (value===oriUserName.value) {
  
          return
        }
        const result = await UserServices.isUserNameExist(value)
        if (result) {
          callback(new Error('用户名已存在'))
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      callback(new Error('用户名格式不正确'))
    }
  }
}
const validateAccount = async (rule, value, callback) => {
  const regex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  const isAccountValid = regex.test(value)

  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    if (isAccountValid) {
      try {
        if (value===oriAccount.value) {
          return
        }
        const result = await UserServices.isUserAccountExist(value)
        if (result) {
          callback(new Error('账号已存在'))
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      callback(new Error('账号格式不正确'))
    }
  }
}

const validatePassword = (rule, value, callback) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
  const isPasswordValid = regex.test(value)

  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (!isPasswordValid) {
      callback(new Error('密码格式不正确'))
    }
    callback()
  }
}

const validateAvatar = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请上传头像'))
  } else {
    callback()
  }
}
const validateRole = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择角色'))
  } else {
    callback()
  }
}

const formRules = ref({
  userName: [
    {
      required: true,
      validator: validateUserName,

      trigger: ['blur', 'change']
    }
  ],
  account: [{ required: true, validator: validateAccount, trigger: ['blur', 'change'] }],
  password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
  role: [{ required: true, validator: validateRole, trigger: 'blur' }]
})

const onSubmit = async (formRef, type) => {
  if (!formRef) return

  const result = await formRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })

  if (result) {
    if (route.params.userId) {
      await UserServices.updateUser(route.params.userId, form.value)
        .then((res) => {
          ElMessage({
            type: 'success',
            message: '保存成功'
          })
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      await UserServices.addUser(form.value)
        .then((res) => {
          ElMessage({
            type: 'success',
            message: '保存成功'
          })
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (type === 'next') {
      // Emit the 'next' to the parent component
      router.push({ name: 'AddUserFinish' })
    }
  }
}

const uploadImage = async (file) => {
  try {
    // console.log(file)
    const result = await UserServices.uploadImage(file)
    form.value.avatar = result.data.url
    ElMessage({
      type: 'success',
      message: '保存成功'
    })
    // Emit the 'imgurl' to the parent component
  } catch (e) {
    console.log(e)
  }
}
const options = [
  {
    value: 'admin',
    label: '管理员'
  },
  {
    value: 'teacher',
    label: '教师'
  },
  {
    value: 'student',
    label: '学生'
  }
]

// watch(()=>userInfo.value.role,(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })
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
