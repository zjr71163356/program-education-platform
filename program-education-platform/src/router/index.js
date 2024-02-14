import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

 
 
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
      component: () => import('../components/user/class/ClassItem.vue')
    },
    {
      path: '/ClassList',
      name: 'ClassList',
      component: () => import('../pages/class/ClassList.vue')
    },

    {
      path: '/ProblemBank',
      name: 'ProblemBank',
      component: () => import('../pages/problem/ProblemBank.vue')
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import('../components/user/SignIn.vue')
    },
    {
      path: '/ClassDesc',
      name: 'ClassDesc',
      component: () => import('../pages/class/ClassDesc.vue')
    },
    {
      path: '/CurrentHistroySubmission',
      name: 'CurrentHistroySubmission',
      component: () => import('../components/user/problem/CurrentHistroySubmission.vue')
    },
    {
      path: '/SideBar',
      name: 'SideBar',
      component: () => import('../components/user/layout/SideBar.vue')
    },
    {
      path: '/TheProfile',
      name: 'TheProfile',
      component: () => import('../pages/TheProfile.vue')
    },
    {
      path: '/ClassContent',
      name: 'ClassContent',
      component: () => import('../pages/class/ClassContent.vue'),
      props: true
    },

    {
      path: '/ProblemDesc',
      name: 'ProblemDesc',
      component: () => import('../pages/problem/ProblemDesc.vue')
    },
    {
      path: '/PostList',
      name: 'PostList',
      component:  () => import('@/pages/post/PostList.vue')
    },
    {
      path: '/PostDesc',
      name: 'PostDesc',
      component:  () => import('@/pages/post/PostDesc.vue')
    },
    {
      path: '/PostAdd',
      name: 'PostAdd',
      component:  () => import('@/pages/post/PostAdd.vue')
    },
    {
      path: '/SubmitResultDescPage',
      name: 'SubmitResultDescPage',
      component: ()=> import('../pages/problem/SubmitResultDescPage.vue')
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: () => import('../pages/PersonalCenter.vue'),
      children: [
        {
          path: 'MyClassList',
          name: 'MyClassList',
          component: () => import('../components/user/class/MyClassList.vue')
        },
        {
          path: 'MyProblemSolution',
          name: 'MyProblemSolution',
          component: ()=> import('../components/user/post/MyProblemSolution.vue')
        },
        {
          path: 'MyDiscussionPost',
          name: 'MyDiscussionPost',
          component: ()=> import('../components/user/post/MyDiscussionPost.vue')
        },
        {
          path: 'MyHistorySubmission',
          name: 'MyHistorySubmission',
          component: ()=> import('../components/user/problem/MyHistorySubmission.vue')
        },
        {
          path: 'ClassManage',
          name: 'ClassManage',
          component: ()=> import('../components/user/problem/MyHistorySubmission.vue')
        }
      ]
    }
  ]
})

export default router
