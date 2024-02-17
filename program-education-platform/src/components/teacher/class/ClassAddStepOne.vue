<template lang="">
  <el-steps :active="1" align-center class="mt-5">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程信息</div>
    <div class="w-2/3">
      <el-form :model="form" label-width="120px">
        <el-form-item label="课程名称">
          <el-input v-model="form.classname" placeholder="请输入课程名称" />
        </el-form-item>
        <el-form-item label="章节数">
          <el-input-number v-model="form.chaptercount" :min="1" />
        </el-form-item>
        <el-form-item label="标签">
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
        <el-form-item label="课程简介">
          <el-input v-model="textarea1" autosize type="textarea" placeholder="请输入课程简介" />
        </el-form-item>
        <el-form-item label="课程封面">
          <el-button plain @click="dialogVisible = true">点击此处上传封面 </el-button>
          <el-dialog v-model="dialogVisible" title="上传封面" width="500"  >
           <router-view></router-view>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
              </div>
            </template>
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存并下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue'
import { ElInput } from 'element-plus'
import { useRouter } from 'vue-router' // Add this import statement

const textarea1 = ref('')
const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref(null)
const router = useRouter() // Add this line

const dialogVisible = ref(false)
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
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}

const form = reactive({
  classname: '',
  chaptercount: 1,
  tags: dynamicTags
})

const onSubmit = () => {
  router.push({ name: 'ClassAddStepTwo' }) // Replace this line
}
</script>
