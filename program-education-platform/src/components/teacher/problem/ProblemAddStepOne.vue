<template lang="">
  <el-steps :active="1" align-center class="mt-5">
    <el-step title="添加题库信息" />
    <el-step title="添加数据" />
    <el-step title="完成" />
  </el-steps>
  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加题库信息</div>
    <div class="w-full">
      <el-form :model="form" label-width="120px" :rules="formRules" ref="formRef">
        <el-form-item label="题目名称" prop="title">
          <el-input placeholder="请输入题目名称" v-model="form.title" />
        </el-form-item>
        <el-form-item label="难度" prop="difficulty">
          <el-select
            v-model="form.difficulty"
            class="m-2"
            placeholder="请选择难度"
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="题目标签" prop="dynamicTags">
          <div class="flex gap-2">
            <el-tag
              v-for="(tag, index) in dynamicTags"
              :key="index"
              :type="tagColorList[tag.tagColor - 1]"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag.tagName }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="InputRef"
              v-model="inputValue"
              class="w-20"
              size="small"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <el-button v-else class="button-new-tag" size="small" @click="showInput">
              + New Tag
            </el-button>
          </div>
        </el-form-item>
        <el-form-item label="题目描述" prop="problemContent">
          <MdEditor v-model="form.problemContent" class="my-5" />
        </el-form-item>
      </el-form>
    </div>
    <div class="flex gap-5">
      <el-button @click="onSubmit(formRef, 'save')">保存</el-button>
      <el-button type="primary" @click="onSubmit(formRef, 'next')">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Add this import statement
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { nextTick } from 'vue'
import { ElInput } from 'element-plus'
import { tagColorList } from '@/api/staticdata'
import ProblemServices from '@/api/ProblemServices'
import { ElMessage } from 'element-plus'

const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref(null)
const route = useRoute()
const formRef = ref(null)
onMounted(async () => {
  console.log(route.params.problemId);
  if (route.params.problemId) {
    console.log('courseId' + route.params.problemId)
     await ProblemServices.getProblemById(route.params.problemId).then((res) => {
        console.log(res)
        form.value = res
        dynamicTags.value = res.problemTags
      })
    //
  }
})
const form = ref({
  title: '',
  difficulty: '',
  problemContent: '',
  problemTags: dynamicTags
})
const validateDynamicTags = (rule, value, callback) => {
  if (dynamicTags.value.length === 0) {
    callback(new Error('请添加标签'))
  } else {
    callback()
  }
}
const validateproblemContent = (rule, value, callback) => {
  if (form.value.problemContent == '') {
    callback(new Error('请输入题目描述'))
  } else {
    callback()
  }
}
const formRules = ref({
  title: [{ required: true, message: '请输入题目标题', trigger: ['blur', 'change'] }],
  difficulty: [{ required: true, message: '请选择题目难度', trigger: 'blur' }],
  problemContent: [
    {
      required: true,
      validator: validateproblemContent,
      message: '请输入课程简介',
      trigger: 'blur'
    }
  ],
  dynamicTags: [{ required: true, validator: validateDynamicTags, trigger: 'blur' }]
})

const router = useRouter()

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
    console.log('courseId:' + route.params.problemId)
    console.log(dynamicTags.value)
    console.log(form.value)
    try {
      let result = ''
      if (route.params.problemId) {
        result = await ProblemServices.updateProblemStepOne(route.params.problemId, form.value)
        console.log(result)
        if (type == 'next')
          router.push({ name: 'ProblemAddStepTwo', params: { problemId: result.problemId } })
      } else {
        result = await ProblemServices.addProblem(form.value)
        console.log(result)
        if (type == 'next')
          router.push({ name: 'ProblemAddStepTwo', params: { problemId: result.problemId } })
      }

      ElMessage({
        type: 'success',
        message: '保存成功'
      })

      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  // router.push({ name: 'ProblemAddStepTwo' }) // Replace this line
}

const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value.input.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    const tagType = Math.floor(Math.random() * 5) + 1
    dynamicTags.value.push({ tagName: inputValue.value, tagColor: tagType })
  }
  inputVisible.value = false
  inputValue.value = ''
}

const options = [
  {
    value: '简单',
    label: '简单'
  },
  {
    value: '中等',
    label: '中等'
  },
  {
    value: '困难',
    label: '困难'
  }
]
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
