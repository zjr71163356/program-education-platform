<template lang="">
  <el-upload
    v-model:file-list="fileList"
    list-type="picture-card"
    class="upload-demo"
    action="#"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="1"
    :on-exceed="handleExceed"
    :http-request="uploadImage"
  >
    <el-button type="primary">点击上传图片</el-button>
    <template #tip>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </el-upload>
</template>
<script setup>
import UserServices from '@/api/UserServices'
import { ref, defineEmits, watch } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps({
  Image: {
    type: String,
    default: ''
  }
})
const fileList = ref([])
watch(
  () => props.Image,
  (newVal, oldVal) => {
    if (fileList.value.length === 0) {
      fileList.value.push({ url: newVal })
    }
    console.log(fileList.value)
  }
)
const emit = defineEmits(['imgurl'])
const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles)
  fileList.value.pop()
  emit('imgurl',null )
}

const handlePreview = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed = (files, uploadFiles) => {
  ElMessage
    .warning
    // `The limit is 3, you selected ${files.length} files this time, add up to ${
    //   files.length + uploadFiles.length
    // } totally`
    ()
}
const uploadImage = async (file) => {
  try {
    // console.log(file)
    const result = await UserServices.uploadImage(file)
    const imgurl = result.data.url
    // Emit the 'imgurl' to the parent component

    emit('imgurl', imgurl)
  } catch (e) {
    console.log(e)
  }
}
</script>
<style lang=""></style>
