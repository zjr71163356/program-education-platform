<template>
  <el-table :data="classdata" style="width: 100%">
    <el-table-column prop="name" label="课程名称">
      <template #default="{ row }">
        <router-link class="text-sky-400" :to="{ name: 'ClassDesc'  }">{{
          row.name
        }}</router-link>
      </template>
    </el-table-column>
    <el-table-column prop="chapterCount" label="章节数量" />
    <el-table-column prop="tag" label="标签">
      <template #default="scope">
        <div class="flex">
          <el-tag
            v-for="(tag, index) in scope.row.tag"
            :type="stringToTag(tag)"
            :key="index"
            class="mr-2"
            >{{ tag }}
          </el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="Introduction" label="简介" :show-overflow-tooltip="true" />
    <el-table-column align="right">
      <template #header> </template>
      <template #default>
        <router-link :to="{ name: 'ClassAddStepOne' }">
          <div class="flex justify-center">
            <el-button size="small" type="primary">编辑</el-button>
     
          </div>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>
<script setup>
import { classdata } from '@/data/data.js'
import { stringToTag } from '@/utils/tools.js'
</script>
<style lang=""></style>
