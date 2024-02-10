import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

import ClassItem from '../components/ClassItem.vue'
import ClassList from '@/pages/ClassList.vue'
import MyClassList from '@/components/MyClassList.vue'
import QuestionBank from '@/pages/ProblemBank.vue'
import SignIn from '@/components/SignIn.vue'
import ClassDesc from '@/pages/ClassDesc.vue'
import ClassContent from '@/pages/ClassContent.vue'
import SideBar from '@/components/SideBar.vue' 
import MyProblemSolution from '@/components/MyProblemSolution.vue' 
import MyDiscussionPost from '@/components/MyDiscussionPost.vue' 
import MyHistorySubmission from '@/components/MyHistorySubmission.vue' 

import ProblemDesc from '@/pages/ProblemDesc.vue'
import PostList from '@/pages/PostList.vue'
import PostDesc from '@/pages/PostDesc.vue'
import PostAdd from '@/pages/PostAdd.vue'
import SubmitResultDescPage from '@/pages/SubmitResultDescPage.vue'
import PersonalCenter from '@/pages/PersonalCenter.vue'
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
      path: '/ProblemDesc',
      name: 'ProblemDesc',
      component: ProblemDesc
    },
    {
      path: '/PostList',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/PostDesc',
      name: 'PostDesc',
      component: PostDesc
    },
    {
      path: '/PostAdd',
      name: 'PostAdd',
      component: PostAdd
    },
    {
      path: '/SubmitResultDescPage',
      name: 'SubmitResultDescPage',
      component: SubmitResultDescPage
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        {
          path: 'MyClassList',
          name: 'MyClassList',
          component: MyClassList
        },
        {
          path: 'MyProblemSolution',
          name: 'MyProblemSolution',
          component: MyProblemSolution
        },
        {
          path: 'MyDiscussionPost',
          name: 'MyDiscussionPost',
          component: MyDiscussionPost
        },
        {
          path: 'MyHistorySubmission',
          name: 'MyHistorySubmission',
          component: MyHistorySubmission
        }
      ]
    }
  ]
})

export default router
