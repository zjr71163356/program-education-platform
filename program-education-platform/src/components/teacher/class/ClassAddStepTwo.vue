<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加课程信息" />
    <el-step title="添加课程章节详情" />
    <el-step title="完成" />
  </el-steps>
  <!-- <el-button plain @click="dialogVisible = true"> Click to open the Dialog </el-button> -->

  <el-dialog v-model="dialogVisible" title="Tips" :before-close="handleClose">
    <template #header> 编辑内容 </template>
    <MdEditor v-model="text" class="my-5" />

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"> 保存 </el-button>
      </div>
    </template>
  </el-dialog>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程章节详情</div>
    <div class="w-2/3">
      <el-table :data="tableData" style="width: 100%" :row-key="(row) => row.id">
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="标题" prop="title">
          <template #default="{ row }">
            <el-input v-model="row.title" placeholder="请输入当前章节标题"
          /></template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="scope">
            <el-button plain @click="addSubchapter(scope.$index)">添加子章节</el-button>
            <el-button color="#F56C6C" @click="removeChapter(scope.$index)">
              <el-icon color="white"> <CloseBold /></el-icon>
            </el-button>
          </template>
        </el-table-column>

        <el-table-column align="right" type="expand">
          <template #default="scope">
            <el-table
              :data="scope.row.subChapters"
              style="width: 90%; float: right"
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
                <template #default="subchapter">
                  <el-button type="primary" @click="editMarkdown(subchapter.row.subChapterId)"
                    >编辑内容</el-button
                  >
                  <el-button
                    color="#F56C6C"
                    @click="removeSubchapter(scope.$index, subchapter.$index)"
                  >
                    <el-icon color="white"> <CloseBold /></el-icon>
                  </el-button>
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
import { reactive, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Add this import statement
import { CloseBold } from '@element-plus/icons-vue'
import CourseServices from '@/api/CourseServices'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
const router = useRouter() // Add this line
const route = useRoute()
const tableData = ref([])
const input = ref('')
const form = reactive({})
const text = ref('Hello Editor!')
import { ElMessageBox } from 'element-plus'

const editMarkdown = async (subChapterId) => {
  dialogVisible.value = true
  const data = await CourseServices.getCourseSubChapterById(subChapterId)
  console.log(data)
  text.value = data.markdownContent
}

const dialogVisible = ref(false)

const handleClose = () => {
  dialogVisible.value = false
}

onMounted(async () => {
  const res = await CourseServices.getCoursesById(route.params.courseId)
  console.log(route.params.courseId)
  tableData.value = res.courseChapters
  console.log(res)
})

const laststep = () => {
  router.go(-1) // Rollback one page
}

const nextstep = () => {
  router.push({ name: 'ClassAddStepThree' }) // Replace this line
}
const addChapter = () => {
  tableData.value.push({ title: '', subChapters: [] })
}
const addSubchapter = (chapterid) => {
  console.log(chapterid)
  console.log(tableData.value[chapterid].subChapters)
  tableData.value[chapterid].subChapters.push({ title: '', content: '' })
}
const removeChapter = (chapterid) => {
  tableData.value.splice(chapterid, 1)
}
const removeSubchapter = (chapterid, subchapterid) => {
  tableData.value[chapterid].subChapters.splice(subchapterid, 1)
}
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
