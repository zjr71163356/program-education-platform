<template>
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-full">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-start text-neutral-500 dark:text-neutral-300 text-2xl">
        历史提交
      </h5>
    </div>

    <!-- Card body -->
    <div class="p-6">
      <div class="w-full">
        <el-table :data="historyRecords" stripe style="width: 100%; font-size: 12px">
          <el-table-column label="题目" prop="title">
            <template #default="{ row }">
              <router-link
                class="text-sky-400"
                :to="{ name: 'ProblemDesc', params: { problemId: row.problemId } }"
                >{{ row.title }}</router-link
              >
            </template>
          </el-table-column>
          <el-table-column label="提交时间" prop="submitTime" />
          <el-table-column label="提交状态" prop="resultState" />

          <el-table-column label="编译器" prop="compiler" />
          <el-table-column label="内存(MB)" prop="memory" />
          <el-table-column label="用时(s)" prop="runtime" />
          <el-table-column align="right">
            <template #header> </template>
            <template #default="{ row }">
              <router-link
                :to="{ name: 'SubmitResultDescPage', params: { recordId: row.recordId } }"
              >
                <div class="flex justify-center">
                  <el-button size="small">查看</el-button>
                </div>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- {{  total}} -->
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          v-model:current-page="currentpage"
        />
      </div>
      <!-- <el-table :data="historyRecords" stripe style="width: 100%; font-size: 12px">
        <el-table-column label="题目" prop="title">
          <template #default="{ row }">
            <router-link
              class="text-sky-400"
              :to="{ name: 'ProblemDesc', params: { problemId: row.problemId } }"
              >{{ row.title }}</router-link
            >
          </template>
        </el-table-column>
        <el-table-column label="提交时间" prop="submittime" />
        <el-table-column label="状态" prop="state" />


        <el-table-column label="编译器" prop="compiler" />
        <el-table-column label="内存" prop="memory" />
        <el-table-column label="用时" prop="runtime" />
        <el-table-column align="right">
          <template #header> </template>
          <template #default>
            <router-link :to="{ name: 'SubmitResultDescPage' }">
              <div class="flex justify-center">
                <el-button size="small">查看</el-button>
              </div>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000" /> -->
    </div>
  </div>
</template>

<script setup>
// import { historyRecords } from '@/data/data'
import UserServices from '@/api/UserServices'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProfileStore } from '@/stores/user'
const route = useRoute()
const historyRecords = ref([])

const userId = useProfileStore().userId
const total = ref(0)
const currentpage = ref(1)
const pageSize = ref(10)
const problemId = ref(route.params.problemId ? route.params.problemId : null)
onMounted(async () => {
  await UserServices.getHistorySubmission(userId, problemId.value, 1, null)
    .then((data) => {
      total.value = data.length
      historyRecords.value = data
    })
    .catch((error) => {
      console.log(error)
    })

  await UserServices.getHistorySubmission(userId, problemId.value, 1, pageSize.value)
    .then((data) => {
      historyRecords.value = data
    })
    .catch((error) => {
      console.log(error)
    })
})
watch(currentpage, async (newVal, oldVal) => {
  await UserServices.getHistorySubmission(userId, problemId.value, newVal, pageSize.value)
    .then((data) => {
      historyRecords.value = data
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
