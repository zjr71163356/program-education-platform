<template>
    <div class="flex w-full container-height">
      <el-menu default-active="1" class=" " :router="true"> 
        <el-menu-item index="1" :route="{ name: 'MyClassList' }">
          <el-icon>
            <Notebook />
          </el-icon>
          <span>我的课程</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{ name: 'MyProblemSolution' }">
          <el-icon><DocumentChecked /></el-icon>
          <span>我的题解</span>
        </el-menu-item>
        <el-menu-item index="3" :route="{ name: 'MyDiscussionPost' }">
          <el-icon>
            <ChatLineRound />
          </el-icon>
          <span>我的讨论贴</span>
        </el-menu-item>
        <el-menu-item index="4" :route="{ name: 'MyHistorySubmission' }">
          <el-icon>
            <Clock />
          </el-icon>
          <span>历史提交</span>
        </el-menu-item>
        <el-sub-menu index="5" >
          <template #title>
            <el-icon>
              <Suitcase />
            </el-icon>
            <span>课程管理</span>
          </template>

          <el-menu-item index="5-1" :route="{ name: 'ClassListManage' }">
            <el-icon>
              <Tickets />
            </el-icon>
            <span>课程列表</span>
          </el-menu-item>
          <el-menu-item index="5-2" :route="{ name: 'ClassAddStepOne' }">
            <el-icon>
              <DocumentAdd />
            </el-icon>
            <span>添加课程</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>

      <div class="w-full container-height bg-white    ">
        <RouterView ></RouterView>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {
 
  Notebook,
  ChatLineRound,
  Clock,
  Suitcase,
  DocumentChecked,
  DocumentAdd,
  Tickets

} from '@element-plus/icons-vue'
</script>
<style scoped>
.container-height {
    height: calc(100vh - 48px);
  }
</style>
