import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import { useProfileStore } from '@/stores/user'
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
      path: '/CourseItem',
      name: 'CourseItem',
      component: () => import('@/pages/personal_center/mycourse/CourseItem.vue')
    },
    {
      path: '/CourseList',
      name: 'CourseList',
      component: () => import('@/pages/course/CourseList.vue')
    },

    {
      path: '/ProblemBank',
      name: 'ProblemBank',
      component: () => import('../pages/problem/ProblemBank.vue')
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import('@/pages/auth/SignIn.vue')
    },
    {
      path: '/TheRegister',
      name: 'TheRegister',
      component: () => import('@/pages/auth/TheRegister.vue')
    },
    {
      path: '/CourseDesc/:courseId',
      name: 'CourseDesc',
      component: () => import('@/pages/course/CourseDesc.vue'),
      props: true
    },
    {
      path: '/CurrentHistroySubmission/:problemId',
      name: 'CurrentHistroySubmission',
      component: () => import('@/pages/personal_center/myproblem/CurrentHistroySubmission.vue'),
      props: true
    },
    {
      path: '/SubmitResultDescPage/:recordId',
      name: 'SubmitResultDescPage',
      component: () => import('../pages/problem/SubmitResultDescPage.vue'),
      props: true
    },
    {
      path: '/SideBar',
      name: 'SideBar',
      component: () => import('@/pages/course/SideBar.vue')
    },
    {
      path: '/TheProfile',
      name: 'TheProfile',
      component: () => import('../pages/personal_center/myinfo/TheProfile.vue')
    },
    {
      path: '/CourseContent/:subChapterId',
      name: 'CourseContent',
      component: () => import('@/pages/course/CourseContent.vue'),
      props: true
    },
    {
      path: '/ProblemDesc/:problemId',
      name: 'ProblemDesc',
      component: () => import('../pages/problem/ProblemDesc.vue'),
      props: true
    },
    {
      path: '/SolutionPostList/:problemId',
      name: 'SolutionPostList',
      component: () => import('@/pages/post/SolutionPostList.vue'),
      props: true
    },
    {
      path: '/DiscussionPostList/:problemId',
      name: 'DiscussionPostList',
      component: () => import('@/pages/post/DiscussionPostList.vue'),
      props: true
    },
    {
      path: '/PostDesc/:postId',
      name: 'PostDesc',
      component: () => import('@/pages/post/PostDesc.vue')
    },
    {
      path: '/PostAdd/:problemId',
      name: 'PostAdd',
      component: () => import('@/pages/post/PostAdd.vue'),
      props: true
    },
    {
      path: '/EditPassword',
      name: 'EditPassword',
      component: () => import('@/pages/personal_center/myinfo/EditPassword.vue')
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: () => import('@/components/layout/PersonalCenter.vue'),
      children: [
        {
          path: 'MyCourseList',
          name: 'MyCourseList',
          component: () => import('@/pages/personal_center/mycourse/MyCourseList.vue')
        },
        {
          path: 'MyProblemSolution',
          name: 'MyProblemSolution',
          component: () => import('@/pages/personal_center/mypost/MyProblemSolution.vue')
        },
        {
          path: 'MyDiscussionPost',
          name: 'MyDiscussionPost',
          component: () => import('@/pages/personal_center/mypost/MyDiscussionPost.vue')
        },
        {
          path: 'MyHistorySubmission',
          name: 'MyHistorySubmission',
          component: () => import('@/pages/personal_center/myproblem/MyHistorySubmission.vue')
        },
        {
          path: 'CourseListManage',
          name: 'CourseListManage',
          component: () => import('@/pages/course/CourseList.vue')
        },
        {
          path: 'ProblemManage',
          name: 'ProblemManage',
          component: () => import('@/pages/manage/problem_manage/ProblemBankManage.vue')
        },
        {
          path: 'CourseAddStepOne',
          name: 'CourseAddStepOne',
          component: () => import('@/pages/manage/course_manage/CourseAddStepOne.vue')
        },
        {
          path: 'CourseAddStepTwo/:courseId',
          name: 'CourseAddStepTwo',
          component: () => import('@/pages/manage/course_manage/CourseAddStepTwo.vue'),
          props: true
        },
        {
          path: 'CourseAddStepThree',
          name: 'CourseAddStepThree',
          component: () => import('@/pages/manage/course_manage/CourseAddStepThree.vue')
        },
        {
          path: 'CourseUpdateStepOne/:courseId',
          name: 'CourseUpdateStepOne',
          component: () => import('@/pages/manage/course_manage/CourseAddStepOne.vue'),
          props: true
        },
        {
          path: 'ProblemAddStepOne',
          name: 'ProblemAddStepOne',
          component: () => import('@/pages/manage/problem_manage/ProblemAddStepOne.vue')
        },
        {
          path: 'ProblemAddStepTwo/:problemId',
          name: 'ProblemAddStepTwo',
          component: () => import('@/pages/manage/problem_manage/ProblemAddStepTwo.vue'),
          props: true
        },
        {
          path: 'ProblemAddStepThree',
          name: 'ProblemAddStepThree',
          component: () => import('@/pages/manage/problem_manage/ProblemAddStepThree.vue')
        },
        {
          path: 'ProblemUpdateStepOne/:problemId',
          name: 'ProblemUpdateStepOne',
          component: () => import('@/pages/manage/problem_manage/ProblemAddStepOne.vue'),
          props: true
        },
        {
          path: 'UserList',
          name: 'UserList',
          component: () => import('@/pages/manage/user_manage/UserList.vue')
        },
        {
          path: 'UserDesc/:userId',
          name: 'UserDesc',
          component: () => import('@/pages/manage/user_manage/AddUser.vue'),
          props: true
        },
        {
          path: 'EditUserPassword',
          name: 'EditUserPassword',
          component: () => import('@/pages/manage/user_manage/EditUserPassword.vue')
        },
        {
          path: 'AddUser',
          name: 'AddUser',
          component: () => import('@/pages/manage/user_manage/AddUser.vue')
        },
        {
          path: 'AddUserFinish',
          name: 'AddUserFinish',
          component: () => import('@/pages/manage/user_manage/AddUserFinish.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = useProfileStore().userId
  if (to.name !== 'SignIn' && to.name !== 'TheRegister' && !token) next({ name: 'SignIn' })
  else next()
})
export default router
