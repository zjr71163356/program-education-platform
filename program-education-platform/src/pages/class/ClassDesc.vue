<template>
  <!-- Container for demo purpose -->
  <div class="flex flex-col items-center">
    <div class="container my-24 mx-auto md:px-6 xl:px-32">
      <!-- Section: Design Block -->
      <section class="mb-32">
        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div class="flex items-center h-1/2">
            <div class="block shrink-0 grow-0 basis-auto w-1/3 p-2">
              <img
                :src="course.imageUrl + '?auto=format&fit=crop&w=1050&h=1050&q=80'"
                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                alt="Course Image"
              />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="mb-6 pb-2 text-4xl font-bold">{{ course.courseName }}</h2>
                <div class="flex gap-2 my-2">
                  <el-tag
                    v-for="(tag, index) in course.courseTags"
                    :type="tagColorList[tag.tagColor - 1]"
                    :key="index"
                    >{{ tag.tagName }}</el-tag
                  >
                </div>
                <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                  {{ course.introduction }}
                </p>

                <div class="flex justify-start gap-5">
                  <RouterLink
                    :to="{
                      name: 'ClassContent',
                      query: {
                        subChapterIndex: 0,
                        chapterIndex: 0,
                        courseId: courseId
                      },
                      params: {
                        subChapterId: subChapterId
                      }
                    }"
                  >
                    <button
                      type="button"
                      class="inline-block rounded bg-primary px-5 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      进入
                    </button>
                  </RouterLink>
                  <button
                    type="button"
                    class="inline-block rounded px-5 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out"
                    :class="{
                      'bg-green-500': !userCourseRepeat,
                      'bg-gray-300 cursor-not-allowed': userCourseRepeat,
                      'shadow-[0_4px_9px_-4px_#3b71ca]': !userCourseRepeat,
                      'hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.3),0_4px_18px_0_rgba(34,197,94,0.2)]':
                        !userCourseRepeat,
                      'focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.3),0_4px_18px_0_rgba(34,197,94,0.2)]':
                        !userCourseRepeat,
                      'active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.3),0_4px_18px_0_rgba(34,197,94,0.2)]':
                        !userCourseRepeat,
                      'dark:shadow-[0_4px_9px_-4px_rgba(34,197,94,0.5)]': !userCourseRepeat,
                      'dark:hover:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.2),0_4px_18px_0_rgba(34,197,94,0.1)]':
                        !userCourseRepeat,
                      'dark:focus:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.2),0_4px_18px_0_rgba(34,197,94,0.1)]':
                        !userCourseRepeat,
                      'dark:active:shadow-[0_8px_9px_-4px_rgba(34,197,94,0.2),0_4px_18px_0_rgba(34,197,94,0.1)]':
                        !userCourseRepeat
                    }"
                    :disabled="userCourseRepeat"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    @click="AddUserCourse"
                  >
                    {{ userCourseRepeat ? '已添加' : '添加到我的课程列表' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>

    <div class="flex w-full justify-center">
      <SideBar :IsShow="false" :items="course.courseChapters" class="w-1/5 self-start" />
      <SideBarDesc :Course="course" class="w-2/3" />
    </div>
  </div>
  <!-- Container for demo purpose -->
</template>
<script setup>
import SideBar from '../../components/user/class/SideBar.vue'
import SideBarDesc from '../../components/user/class/SideBarDesc.vue'
import CourseServices from '@/api/CourseServices.js'
import UserServices from '@/api/UserServices'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { tagColorList } from '@/api/staticdata'
 
const userCourseRepeat = ref(false)
const route = useRoute()
const course = ref({})
const courseId = ref(route.params.courseId)
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const subChapterId=ref(1)
onMounted(async () => {
  
  userCourseRepeat.value = await UserServices.isUserCourseRepeat(userId, courseId.value)
  await getCoursesById(courseId.value)
})

const AddUserCourse = async () => {
  const userCourse = {
    userId: userId,
    courseId: courseId.value,
    isFavorite: true
  }
  const data = await UserServices.addUserCourse(userCourse)
  if (data) {
    userCourseRepeat.value = true
  }
}

async function getCoursesById(courseId) {
  try {
    const data = await CourseServices.getCoursesById(courseId)
    course.value = data
    subChapterId.value=course.value.courseChapters[0].subChapters[0].subChapterId
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang=""></style>
