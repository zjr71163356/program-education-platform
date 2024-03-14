<template lang="">
  <el-steps :active="1" align-center class="mt-5">
    <el-step title="添加/修改课程信息" />
    <el-step title="添加/修改课程章节详情" />
    <el-step title="完成" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程信息</div>
    <div class="w-2/3">
      <el-form :model="form" label-width="120px" :rules="formRules" ref="formRef">
        <el-form-item label="课程名称" prop="courseName">
          <el-input v-model="form.courseName" placeholder="请输入课程名称" />
        </el-form-item>
        <el-form-item label="章节数" prop="chapterCount">
          <el-input-number v-model="form.chapterCount" :min="1" />
        </el-form-item>
        <el-form-item label="标签" prop="dynamicTags">
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
              + 新增标签
            </el-button>
          </div>
        </el-form-item>
        <el-form-item label="课程简介" prop="introduction">
          <el-input
            v-model="form.introduction"
            autosize
            type="textarea"
            placeholder="请输入课程简介"
          />
        </el-form-item>
        <el-form-item label="课程封面" prop="imageUrl">
          <component
            :is="UploadPicture"
            @imgurl="form.imageUrl = $event"
            :Image="form.imageUrl"
          ></component>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex gap-5">
      <el-button type="plain" @click="onSubmit(formRef, 'save')">保存</el-button>
      <el-button type="primary" @click="onSubmit(formRef, 'next')">保存并下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { ElInput } from 'element-plus'
import { useRouter, useRoute } from 'vue-router' // Add this import statement
import UploadPicture from './UploadPicture.vue'
import { tagColorList } from '@/api/staticdata'
import CourseServices from '@/api/CourseServices'
import { ElMessage } from 'element-plus'
const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref(null)
const router = useRouter() // Add this line
const route = useRoute()
const formRef = ref(null)
const validateDynamicTags = (rule, value, callback) => {
  if (dynamicTags.value.length === 0) {
    callback(new Error('请添加标签'))
  } else {
    callback()
  }
}
onMounted(async () => {
  if (route.params.courseId) {
    console.log('courseId' + route.params.courseId)
    await CourseServices.getCoursesById(route.params.courseId).then((res) => {
      console.log(res)
      form.value.courseName = res.courseName
      form.value.chapterCount = res.chapterCount
      form.value.introduction = res.introduction
      form.value.imageUrl = res.imageUrl
      dynamicTags.value = res.courseTags
    })
    // router.push({ name: 'ClassAddStepTwo' ,param:{courseId:route.params.courseId}}) // Replace this line
  }
})
const formRules = ref({
  courseName: [{ required: true, message: '请输入课程名称', trigger: ['blur', 'change'] }],
  chapterCount: [{ required: true, message: '请输入章节数', trigger: 'blur' }],
  introduction: [{ required: true, message: '请输入课程简介', trigger: 'blur' }],
  dynamicTags: [{required: true, validator: validateDynamicTags, trigger: 'blur' }]
})
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

const form = ref({
  courseName: '',
  chapterCount: 1,
  courseTags: dynamicTags,
  introduction: '',
  imageUrl: ''
})

const onSubmit = async (formRef, type) => {
  if (!formRef) return

  const result = await formRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      return true
    } else {
      console.log('error submit!', fields)
      return false
    }
  })



  
  if (result) {
    console.log('courseId:' + route.params.courseId)
    console.log(dynamicTags.value)
    console.log(form.value)
    try {
      let result = ''
      if (route.params.courseId) {
        result = await CourseServices.updateCourseStepOne(route.params.courseId, form.value)
        if (type == 'next')
          router.push({ name: 'ClassAddStepTwo', params: { courseId: route.params.courseId } })
      } else {
        result = await CourseServices.addCourseStepOne(form.value)
        if (type == 'next')
          router.push({ name: 'ClassAddStepTwo', params: { courseId: result.courseId } })
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
}
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
