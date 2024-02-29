<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column prop="userId" label="用户Id" width="180" />
    <el-table-column prop="account" label="账号" width="180" />
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="role" label="角色" width="180" />

    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入用户名进行搜索" />
      </template>
      <template #default="{row}">
        <div class="flex justify-center">
          <el-button size="small" type="primary" @click="toUserDesc(row.userId)">查看详情</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>
<script setup>
import { userList } from '@/data/data.js'
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue'
const router=useRouter()
const toUserDesc = (userId) => {
  console.log(userId);
  router.push({name:'UserDesc',params:{id:userId}})
}
const search = ref('')
const filterTableData = computed(() =>
userList.filter(
    (data) =>
      !search.value ||
      data.username.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>
<style scoped>:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}</style>
