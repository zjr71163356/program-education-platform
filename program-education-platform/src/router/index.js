import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ClassItem from '../components/ClassItem.vue'
import ClassList from '@/pages/ClassList.vue'
import MyClassList from '@/pages/MyClassList.vue'
import QuestionBank from '@/pages/QuestionBank.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ClassItem',
      name: 'ClassItem',
      component: ClassItem
    },
    {
      path: '/ClassList',
      name: 'ClassList',
      component: ClassList
    },
    {
      path: '/MyClassList',
      name: 'MyClassList',
      component: MyClassList
    },
    {
      path: '/QuestionBank',
      name: 'QuestionBank',
      component: QuestionBank
    }
  ]
})

export default router
