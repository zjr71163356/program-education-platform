<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center w-full">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300 text-3xl">
        <span class="mr-2"> 我的教程 </span>
      </h5>
    </div>

    <!-- Card body -->

    <div class="flex flex-col">
      <div class="flex justify-end">
        <button
          type="button"
          class="mt-5 rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          @click="setDeleteMode()"
        >
          {{ buttonString }}
        </button>
      </div>

      <div class="flex flex-wrap items-center justify-center">
        <!-- Text -->

        <div v-for="(course, id) in myCourseList" :key="id" class="text item w-1/4">
          <CourseItem
            :deletemode="deleteMode"
            :classItemData="course"
            @deleteCourse="handleDeleteCourse"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import CourseItem from './CourseItem.vue'
import UserServices from '@/api/UserServices'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useProfileStore } from '@/stores/user'
const deleteMode = ref(false)
const buttonString = ref('编辑教程')
const myCourseList = ref()
const userId = useProfileStore().userId

const handleDeleteCourse = async (courseId) => {
  ElMessageBox.confirm('删除当前教程?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const res = await UserServices.deleteUserCourse(userId, courseId)
    console.log(res)
    myCourseList.value = myCourseList.value.filter((item) => item.courseId !== courseId)
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
  })
}
onMounted(async () => {
  // myCourseList.value = a
  const res = await UserServices.getUserCourseList(userId)
  console.log(res)
  myCourseList.value = res
})
const setDeleteMode = () => {
  deleteMode.value = !deleteMode.value
  buttonString.value = deleteMode.value ? '取消' : '编辑教程'
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin: 18px;
}

.box-card {
  width: 80vw;
}

.el-row {
  justify-content: center;
  align-items: center;
}
</style>
