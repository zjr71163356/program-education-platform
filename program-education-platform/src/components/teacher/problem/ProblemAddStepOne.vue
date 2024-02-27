<template lang="">
  <el-steps :active="1" align-center class="mt-5">
    <el-step title="添加题库信息" />
    <el-step title="添加数据" />
    <el-step title="完成" />
  </el-steps>
  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加题库信息</div>
    <div class="w-full">
      <el-form :model="form" label-width="120px">
        <el-form-item label="题目名称">
          <el-input placeholder="请输入题目名称" />
        </el-form-item>
        <el-form-item label="难度">
            <el-select
            v-model="value"
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
        <el-form-item label="题目标签">
          <div class="flex gap-2">
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
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
        <el-form-item label="题目描述">
          <MdEditor v-model="text" class="my-5" />
        </el-form-item>
      </el-form>
    </div>
    <div class="flex gap-5">
      <el-button>保存</el-button>
      <el-button type="primary" @click="onSubmit">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Add this import statement
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { nextTick  } from 'vue'
import { ElInput } from 'element-plus'
const fileList = ref([])
const router=useRouter()
const text = ref('Hello Editor!')
const onSubmit = () => {
    router.push({ name: 'ProblemAddStepTwo' }) // Replace this line
}

const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const InputRef = ref (null)

const handleClose = ( tag) => {
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
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
const options=[
    {
    value: '1',
    label: '简单',
  },
  {
    value: '2',
    label: '中等',
  },
  {
    value: '3',
    label: '困难',
  },
]
</script>
<style lang=""></style>
