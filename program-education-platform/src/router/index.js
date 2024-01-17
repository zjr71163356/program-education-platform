import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

import ClassItem from '../components/ClassItem.vue'
import ClassList from '@/pages/ClassList.vue'
import MyClassList from '@/pages/MyClassList.vue'
import QuestionBank from '@/pages/ProblemBank.vue'
import SignIn from '@/components/SignIn.vue'
import ClassDesc from '@/pages/ClassDesc.vue'
import ClassContent from '@/pages/ClassContent.vue'
import SideBar from '@/components/SideBar.vue'
import TestPage from '@/components/TestPage.vue'
import ProblemDesc from '@/pages/ProblemDesc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
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
    },
    {
      path: '/ClassDesc',
      name: 'ClassDesc',
      component: ClassDesc
    },
    {
      path: '/SideBar',
      name: 'SideBar',
      component: SideBar
    },
    {
      path: '/ClassContent',
      name: 'ClassContent',
      component: ClassContent,
      props: true
    },
    {
      path: '/TestPage',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/ProblemDesc',
      name: 'ProblemDesc',
      component: ProblemDesc
    }
  ]
})

export default router
