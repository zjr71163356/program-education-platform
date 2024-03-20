<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center w-4/5">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300 text-3xl">
        <span class="mr-2"> 全部教程 </span>
      </h5>
    </div>

    <!-- Card body -->
    <div class="flex flex-wrap justify-center">
      <!-- Text -->
      <div v-for="(data, id) in courses" :key="id" class="text item w-1/4">
        <ClassItem :classItemData="data" />
      </div>

      <div class="flex justify-center w-full">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :page-size="6"
          v-model:current-page="currentpage"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ClassItem from '../../components/user/class/ClassItem.vue'
import CourseServices from '@/api/CourseServices.js'
import { onMounted, watch } from 'vue'
import { ref } from 'vue'
// import { classdata } from '@/data/data'
const currentpage = ref(1)
const total = ref(0)
const courses = ref([])
onMounted(async () => {
  await getAllCoursesList(null, currentpage.value, 6)
  const data = await CourseServices.getAllCoursesOverViewList(null, 1, null)
  total.value = data.length
  console.log(total.value)
})
watch(currentpage, async (newVal, oldVal) => {
  await getAllCoursesList(null, newVal, 6)
})
async function getAllCoursesList(fitlerQuery = null, pageNumber = 1, pageSize = 6) {
  try {
    const data = await CourseServices.getAllCoursesOverViewList(fitlerQuery, pageNumber, pageSize)
    courses.value = data
  } catch (error) {
    console.log(error)
  }
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
 
