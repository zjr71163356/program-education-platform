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
      component: () => import('../components/ClassItem.vue')
    },
    {
      path: '/ClassList',
      name: 'ClassList',
      component: () => import('../pages/ClassList.vue')
    },

    {
      path: '/ProblemBank',
      name: 'ProblemBank',
      component: () => import('../pages/ProblemBank.vue')
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import('../components/SignIn.vue')
    },
    {
      path: '/ClassDesc',
      name: 'ClassDesc',
      component: () => import('../pages/ClassDesc.vue')
    },
    {
      path: '/CurrentHistroySubmission',
      name: 'CurrentHistroySubmission',
      component: () => import('../components/CurrentHistroySubmission.vue')
    },
    {
      path: '/SideBar',
      name: 'SideBar',
      component: () => import('../components/SideBar.vue')
    },
    {
      path: '/TheProfile',
      name: 'TheProfile',
      component: () => import('../pages/TheProfile.vue')
    },
    {
      path: '/ClassContent',
      name: 'ClassContent',
      component: () => import('../pages/ClassContent.vue'),
      props: true
    },

    {
      path: '/ProblemDesc',
      name: 'ProblemDesc',
      component: () => import('../pages/ProblemDesc.vue')
    },
    {
      path: '/PostList',
      name: 'PostList',
      component: ()=> import('../pages/PostList.vue')
    },
    {
      path: '/PostDesc',
      name: 'PostDesc',
      component: ()=> import('../pages/PostDesc.vue')
    },
    {
      path: '/PostAdd',
      name: 'PostAdd',
      component: ()=> import('../pages/PostAdd.vue')
    },
    {
      path: '/SubmitResultDescPage',
      name: 'SubmitResultDescPage',
      component: ()=> import('../pages/SubmitResultDescPage.vue')
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: () => import('../pages/PersonalCenter.vue'),
      children: [
        {
          path: 'MyClassList',
          name: 'MyClassList',
          component: () => import('../components/MyClassList.vue')
        },
        {
          path: 'MyProblemSolution',
          name: 'MyProblemSolution',
          component: ()=> import('../components/MyProblemSolution.vue')
        },
        {
          path: 'MyDiscussionPost',
          name: 'MyDiscussionPost',
          component: ()=> import('../components/MyDiscussionPost.vue')
        },
        {
          path: 'MyHistorySubmission',
          name: 'MyHistorySubmission',
          component: ()=> import('../components/MyHistorySubmission.vue')
        }
      ]
    }
  ]
})

export default router
