<template lang="">
    <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">点击上传图片</el-button>
    <template #tip>
      <div class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
         
      </div>
    </template>
  </el-upload>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const fileList = ref([
 
]);

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    // `The limit is 3, you selected ${files.length} files this time, add up to ${
    //   files.length + uploadFiles.length
    // } totally`
  );
};

 

</script>
<style lang="">
    
</style>