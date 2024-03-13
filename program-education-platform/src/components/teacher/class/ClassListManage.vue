<template>
  <el-table :data="courses" style="width: 100%">
    <el-table-column prop="courseId" label="Id" width="50"/>
    <el-table-column prop="courseName" label="课程名称">
      <template #default="{ row }">
        <router-link
          class="text-sky-400"
          :to="{ name: 'ClassDesc', params: { courseId: row.courseId } }"
          >{{ row.courseName }}</router-link
        >
      </template>
    </el-table-column>
    <el-table-column prop="chapterCount" label="章节数量" />
    <el-table-column prop="tag" label="标签">
      <template #default="scope">
        <div class="flex">
          <el-tag
            v-for="(tag, index) in scope.row.courseTags"
            :type="tagColorRender(tag.tagColor)"
            :key="index"
            class="mr-2"
            >{{ tag.tagName }}
          </el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="introduction" label="简介" :show-overflow-tooltip="true" />
    <el-table-column align="right">
      <template #default="scope">
        <div class="flex justify-center">
          <!-- {{ row.courseId }} -->
          <el-button size="small" type="primary" @click="toEdit(scope.row.courseId)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteCourse(scope.row.courseId,scope.$index)">删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    v-model:current-page="currentpage"
  />
</template>
<script setup>
import { tagColorRender } from '@/utils/tools.js'
import { useRouter } from 'vue-router'
import CourseServices from '@/api/CourseServices.js'
import { onMounted, ref, watch } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
const currentpage = ref(1)
const total = ref(0)
const router = useRouter()
const courses = ref([])
const pageSize = ref(17)

onMounted(async () => {
  await getAllCoursesList(null, currentpage.value, pageSize.value)
  const data = await CourseServices.getAllCoursesOverViewList(null, 1, null)
  total.value = data.length
  console.log(total.value)
})
watch(currentpage, async (newVal, oldVal) => {
  await getAllCoursesList(null, newVal,  pageSize.value)
})
async function getAllCoursesList(fitlerQuery, pageNumber, pageSize) {
  try {
    const data = await CourseServices.getAllCoursesOverViewList(fitlerQuery, pageNumber, pageSize)
    courses.value = data
  } catch (error) {
    console.log(error)
  }
}
const toEdit = (courseId) => {
  router.push({ name: 'ClassUpdateStepOne', params: { courseId: courseId } })
}
const deleteCourse = async (courseId,index) => {
  ElMessageBox.confirm('删除当前主章节?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
  .then(async () => {
    const res=await CourseServices.deleteCourseById(courseId)
    courses.value.splice(index, 1)
      console.log(res)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })


}
</script>
<style lang=""></style>
