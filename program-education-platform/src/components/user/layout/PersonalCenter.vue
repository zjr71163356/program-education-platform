<template>
  <div class="flex w-full container-height ">
    
    <el-menu :default-active="$route.name" class=" " :router="true">
      <component
        :is="item.children ? ElSubMenu : ElMenuItem"
        v-for="(item, key) in menuItems"
        :key="key"
        :index="item.index"
        :route="item.route"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          {{ item.label }}
        </template>

        <el-menu-item
          v-for="(subitem, subkey) in item.children"
          :key="subkey"
          :index="subitem.index"
          :route="subitem.route"
        >
          <el-icon>
            <component :is="subitem.icon" />
          </el-icon>
          {{ subitem.label }}
        </el-menu-item>
      </component>
    </el-menu>

    <div class="w-full container-height bg-white">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import {
  Notebook,
  ChatLineRound,
  Clock,
  Suitcase,
  DocumentChecked,
  DocumentAdd,
  Tickets,
  Folder,
  User
} from '@element-plus/icons-vue'
import { ElMenuItem, ElSubMenu } from 'element-plus'
// import { watch } from 'vue'

// import { useRoute } from 'vue-router'

// const route = useRoute()

// watch(()=>route.name, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
//   // 在这里进行路由变化后的逻辑处理
// })

const menuItems = [
  {
    index: 'MyClassList',
    route: { name: 'MyClassList' },
    icon: Notebook,
    label: '我的课程'
  },
  {
    index: 'MyProblemSolution',
    route: { name: 'MyProblemSolution' },
    icon: DocumentChecked,
    label: '我的题解'
  },
  {
    index: 'MyDiscussionPost',
    route: { name: 'MyDiscussionPost' },
    icon: ChatLineRound,
    label: '我的讨论贴'
  },
  {
    index: 'MyHistorySubmission',
    route: { name: 'MyHistorySubmission' },
    icon: Clock,
    label: '历史提交'
  },
  {
    index: 'ClassManage',
    icon: Suitcase,
    label: '课程管理',
    children: [
      {
        index: 'ClassListManage',
        route: { name: 'ClassListManage' },
        icon: Tickets,
        label: '课程列表'
      },
      {
        index: 'ClassAddStepOne',
        route: { name: 'ClassAddStepOne' },
        icon: DocumentAdd,
        label: '添加课程'
      }
    ]
  },
  {
    index: 'ProblemBankManage',
    icon: Folder,
    label: '题库管理',
    children: [
      {
        index: 'ProblemManage',
        route: { name: 'ProblemManage' },
        icon: Tickets,
        label: '题目列表'
      },
      {
        index: 'ProblemAddStepOne',
        route: { name: 'ProblemAddStepOne' },
        icon: DocumentAdd,
        label: '添加题目'
      }
    ]
  },
  {
    index: 'UserListManage',
    icon: User,
    label: '用户管理',
    children: [
      {
        index: 'UserList',
        route: { name: 'UserList' },
        icon: Tickets,
        label: '用户列表'
      },
      {
        index: 'AddUser',
        route: { name: 'AddUser' },
        icon: DocumentAdd,
        label: '添加用户'
      }
    ]
  }
]
</script>

<style scoped>
.container-height {
  height: calc(100vh - 48px);
}
</style>
