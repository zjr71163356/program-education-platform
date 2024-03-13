<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加题库信息" />
    <el-step title="添加题目数据" />
    <el-step title="完成" />
  </el-steps>
  <el-dialog v-model="dialogVisible" title="Tips" :before-close="handleClose">
    <template #header> 编辑内容 </template>
    <div class="flex flex-col gap-5">
      <span>输入数据</span>
      <el-input v-model="inputArea" :rows="5" type="textarea" placeholder="Please input" />
      <span>正确输出 </span>
      <el-input v-model="outputArea" :rows="5" type="textarea" placeholder="Please input" />
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveTestData"> 保存 </el-button>
      </div>
    </template>
  </el-dialog>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加题目数据</div>

    <div class="w-2/3">
      <div class="flex justify-end">
        <el-button plain class="mt-5" @click="addData">添加数据</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%" :row-key="(row) => row.id">
        <el-table-column type="index" label="id"> </el-table-column>

        <el-table-column prop="testData" label="测试数据">
          <template #default="{ row }">
            <el-button type="primary" @click="EditData(row.testDataId)">编辑测试数据</el-button>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="scope">
            <el-button color="#F56C6C" @click="removeData(scope.$index, scope.row.testDataId)">
              <el-icon color="white"> <CloseBold /></el-icon
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="flex gap-5 mt-5">
      <el-button type="primary" @click="laststep">上一步</el-button>

      <el-button type="primary" @click="nextstep">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Add this import statement
import { CloseBold } from '@element-plus/icons-vue'
import ProblemServices from '@/api/ProblemServices'
import { ElMessageBox, ElMessage } from 'element-plus'
const router = useRouter()
const route = useRoute()
const inputArea = ref('')
const outputArea = ref('')
const selectedTestDataId = ref('')
const dialogVisible = ref(false)
const tableData = ref([])

const saveTestData = async () => {
  await ProblemServices.updateTestData(selectedTestDataId.value, {
    problemId: route.params.problemId,
    inputData: inputArea.value,
    outputData: outputArea.value
  }).then((data) => {
    console.log(data)
    ElMessage({
      type: 'success',
      message: '保存成功'
    })
    dialogVisible.value = false
  })
}

const EditData = async (testDataId) => {
  selectedTestDataId.value = testDataId
  await ProblemServices.getTestData(testDataId).then((data) => {
    console.log(data)
    inputArea.value = data.inputData
    outputArea.value = data.outputData
  })
  dialogVisible.value = true
}
const laststep = () => {
  router.push({ name: 'ProblemUpdateStepOne', params: { problemId: route.params.problemId } }) // Replace this line
}
const nextstep = () => {
  router.push({ name: 'ProblemAddStepThree' }) // Replace this line
}

const addData = async () => {
  await ProblemServices.addTestData({
    problemId: route.params.problemId,
    inputData: ' ',
    outputData: ' '
  }).then((data) => {
    console.log(data)
    tableData.value.push(data)
    console.log(tableData.value)
  })
}
const removeData = async (index, testId) => {
  ElMessageBox.confirm('删除当前数据?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await ProblemServices.deleteTestData(testId).then((data) => {
      tableData.value.splice(index, 1)

      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
  })
}
onMounted(async () => {
  console.log('mounted')
  console.log(route.params.problemId)
  await ProblemServices.getProblemTestData(route.params.problemId).then((data) => {
    tableData.value = data
  })
})
</script>
<style lang=""></style>
