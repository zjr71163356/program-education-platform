import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ClassItem from '../components/ClassItem.vue'
import ClassList from '@/pages/ClassList.vue'
import MyClassList from '@/pages/MyClassList.vue'
import QuestionBank from '@/pages/QuestionBank.vue'
import SignIn from '@/components/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
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
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})

export default router
