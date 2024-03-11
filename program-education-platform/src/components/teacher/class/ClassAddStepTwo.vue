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
        <el-button type="primary" @click="saveMDContent"> 保存 </el-button>
      </div>
    </template>
  </el-dialog>

  <DeleteDialog :isVisible="DeleteDialogVisible" />
  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程章节详情</div>
    <div class="w-2/3">
      <el-table :data="tableData" style="width: 100%" :row-key="(row) => row.chapterId">
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="标题" prop="title">
          <template #default="{ row }">
            <el-input v-model="row.title" placeholder="请输入当前章节标题"
          /></template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="scope">
            <el-button plain @click="addSubchapter(scope.$index, scope.row.chapterId)"
              >添加子章节</el-button
            >
            <!-- {{ scope.row.chapterId }} -->
            <el-button color="#F56C6C" @click="removeChapter(scope.$index, scope.row.chapterId)">
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
                    @click="
                      removeSubchapter(scope.$index, subchapter.$index, subchapter.row.subChapterId)
                    "
                  >
                    <el-icon color="white"> <CloseBold /></el-icon>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
      <el-button plain class="mt-5" @click="addChapter()">添加课程章节</el-button>
    </div>
    <div class="flex gap-5">
      <el-button type="primary" @click="laststep">上一步</el-button>
      <el-button @click="saveCourseStepTwo">保存</el-button>
      <el-button type="primary" @click="nextstep">下一步</el-button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Add this import statement
import { CloseBold } from '@element-plus/icons-vue'
import CourseServices from '@/api/CourseServices'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { ElMessageBox, ElMessage } from 'element-plus'
const router = useRouter() // Add this line
const route = useRoute()
const tableData = ref([])
const courseData = ref({})
const text = ref('Hello Editor!')
const selectSubChapterId = ref(0)
const DeleteDialogVisible = ref(false)
onMounted(async () => {
  const res = await CourseServices.getCoursesById(route.params.courseId)
  // console.log(route.params.courseId)
  courseData.value = res
  console.log(res)
  tableData.value = res.courseChapters
 
})

const saveCourseStepTwo= async () => {
  const resData = await CourseServices.updateCourseStepTwo(
    courseData.value.courseId,
    {"courseChapters":tableData.value}
  )
  console.log(resData)
  ElMessage({
    type: 'success',
    message: '保存成功'
  })
}
const saveMDContent = async () => {
  const subchaptermarkdownContent = {
    markdownContent: text.value
  }
  const resData = await CourseServices.updateSubchapterMD(
    selectSubChapterId.value,
    subchaptermarkdownContent
  )
  console.log(resData)
  dialogVisible.value = false
}

const editMarkdown = async (subChapterId) => {
  dialogVisible.value = true
  const data = await CourseServices.getCourseSubChapterById(subChapterId)
  selectSubChapterId.value = subChapterId
  text.value = data.markdownContent
}

const dialogVisible = ref(false)

const handleClose = () => {
  dialogVisible.value = false
}


const laststep = () => {
  router.push({ name: 'ClassUpdateStepOne', params: { courseId: route.params.courseId } })
}

const nextstep = () => {
  router.push({ name: 'ClassAddStepThree' }) // Replace this line
}
const addChapter = async () => {
  console.log(tableData.value)
  const chapter = {
    courseId: courseData.value.courseId,
    title: ' ',
    chapterNumber: courseData.value.courseChapters.length + 1
  }

  const res = await CourseServices.addCourseChapter(chapter)
  console.log(res)
  tableData.value.push(res)
}
const addSubchapter = async (chapterindex, chapterId) => {
  // console.log(chapterindex)
  // console.log(tableData.value[chapterindex].subChapters)
  const subchapter = {
    parentChapterId: chapterId,
    subChapterNumber: tableData.value[chapterindex].subChapters.length + 1,
    title: ' ',
    markdownContent: ''
  }
  const resData = await CourseServices.addSubChapter(subchapter)
  // console.log(resData)
  tableData.value[chapterindex].subChapters.push(resData)
}
const removeChapter = (chapterindex, chapterId) => {
  ElMessageBox.confirm('删除当前主章节?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      tableData.value.splice(chapterindex, 1)
      console.log(chapterId)
      const resData = await CourseServices.deleteChapterById(chapterId)
      console.log(resData)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {})
}
const removeSubchapter = async (chapterid, subchapterindex, subchapterid) => {
  console.log(subchapterindex)
  // DeleteDialogVisible.value=true
  ElMessageBox.confirm('删除当前子章节?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      tableData.value[chapterid].subChapters.splice(subchapterindex, 1)
      const resData = await CourseServices.deleteSubChapterById(subchapterid)
      console.log(resData)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {})
  // tableData.value[chapterid].subChapters.splice(subchapterindex, 1)
  // const resData = await CourseServices.deleteSubChapterById(subchapterid)
  // console.log(resData)
}
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
