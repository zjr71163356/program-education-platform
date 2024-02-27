<template>
  <el-table :data="userList" style="width: 100%">
    <el-table-column prop="userId" label="用户Id" width="180" />
    <el-table-column prop="account" label="账号" width="180" />
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="role" label="角色" width="180" />

    <el-table-column align="right">
      <template #header> </template>
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
const router=useRouter()
const toUserDesc = (userId) => {
  console.log(userId);
  router.push({name:'UserDesc',params:{id:userId}})
}
</script>
<style lang=""></style>
