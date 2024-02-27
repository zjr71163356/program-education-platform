<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加课程信息" />
    <el-step title="添加课程章节详情" />
    <el-step title="完成" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程章节详情</div>
    <div class="w-2/3">
      <el-table :data="tableData" style="width: 100%" :row-key="row=>row.id">
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="标题" prop="title">
          <template #default="{ row }">
            <el-input v-model="row.title" placeholder="请输入当前章节标题"
          /></template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="scope">
            <el-button  plain @click="addSubchapter(scope.$index)">添加子章节</el-button>
          </template>
        </el-table-column>

        <el-table-column align="right" type="expand">
          <template #default="scope">
            <el-table
              :data="scope.row.subchapters"
              style="width: 80%; float: right"
              :show-header="false"
            >
              <el-table-column type="index">
                <template #default="subchapter">
                  {{ scope.$index + 1 + '.' }}
                  {{ subchapter.$index + 1 }}
                </template>
              </el-table-column>

              <el-table-column prop="title" width="430">
                <template #default="{ row }">
                  <el-input v-model="row.title" placeholder="请输入当前章节标题" />
                </template>
              </el-table-column>
              <el-table-column align="center">
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
                    <el-button type="primary">上传.md文件</el-button>
                  </el-upload>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
      <el-button plain class="mt-5" @click="addChapter">添加课程章节</el-button>
    </div>
    <div class="flex gap-5">
      <el-button type="primary" @click="laststep">上一步</el-button>
      <el-button>保存</el-button>
      <el-button type="primary" @click="nextstep">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
 import { useRouter } from 'vue-router' // Add this import statement

const router = useRouter() // Add this line
const tableData = ref([
  {
    id: 1,
    title: '',
    subchapters: [
      {
        title: '',
        content: ''
      },
      {
        title: '',
        content: ''
      }
    ]
  },
  {
    id: 2,
    title: '',
    subchapters: [
      {
        title: 'SSS',
        content: ''
      }
    ]
  }
])
const laststep=()=>{
  router.push({ name: 'ClassAddStepOne' }) // Replace this line
}
const nextstep = () => {
  router.push({ name: 'ClassAddStepThree' }) // Replace this line
}
const input = ref('')
const form = reactive({})
const addChapter = () => {
  tableData.value.push({ title: '', subchapters: [] })
}
const addSubchapter = (chapterid) => {
  console.log(chapterid)
  console.log(tableData.value[chapterid].subchapters)
  tableData.value[chapterid].subchapters.push({ title: '', content: '' })
}
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
