<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加题库信息" />
    <el-step title="添加题目数据" />
    <el-step title="完成" />
  </el-steps>
  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加题目数据</div>
 
    <div class="w-2/3">
      <div class="flex justify-end">
        <el-button plain class="mt-5" @click="addData">添加数据</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%" :row-key="(row) => row.id">
        <el-table-column type="index" label="id"> </el-table-column>
        <el-table-column prop="input" label="数据输入(.in)">
          <template #default="{ row }"> 
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
            <el-button type="primary">上传输入数据</el-button>
             
          </el-upload>
          </template>
        </el-table-column>
        <el-table-column prop="output" label="正确输出(.out)">
          <template #default="{ row }"> 
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
            <el-button type="primary">上传输出数据</el-button>
             
          </el-upload>
          </template>  
        </el-table-column>
      </el-table>
    </div>

    <div class="flex gap-5 mt-5">
      <el-button type="primary" @click="laststep">上一步</el-button>
      <el-button>保存</el-button>
      <el-button type="primary" @click="nextstep">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Add this import statement
const router=useRouter()
const laststep = () => {
    router.push({ name: 'ProblemAddStepOne' }) // Replace this line
}
const nextstep = () => {
    router.push({ name: 'ProblemAddStepThree' }) // Replace this line
}

const addData= () => {
  tableData.value.push({ input: '', output: '' })
}
const tableData =ref([{ input: '', output: '' }]);
</script>
<style lang=""></style>
