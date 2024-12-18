<template>
  <div
    class="bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 overflow-hidden"
  >
    <h3 class="mb-3 text-xl font-bold text-blue-600">{{ classItemData.courseName }}</h3>
    <div class="relative">
      <img
        class="w-full rounded-xl"
        :src="classItemData.imageUrl + '?auto=format&fit=crop&w=1050&h=700&q=80'"
        alt="Colors"
      />
    </div>

    <div class="my-4 flex flex-col w-full">
      <div class="flex space-x-1 items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6 text-blue-600 mb-1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
        <div class="w-4/5 flex gap-2">
          <el-tag
            v-for="(tagInfo, id) in classItemData.courseTags"
            :type="tagColorList[tagInfo.tagColor - 1]"
            :key="id"
            >{{ tagInfo.tagName }}</el-tag
          >
        </div>
      </div>
      <div class="flex space-x-1 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-600 mb-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        <p>章节数量:{{ classItemData.chapterCount }}</p>
      </div>
      <div class="flex space-x-1 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-blue-600 mb-1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </span>
        <span class="overflow-hidden text-ellipsis inline-block w-full whitespace-nowrap">{{
          classItemData.introduction
        }}</span>
      </div>
      <router-link :to="{ name: 'CourseDesc', params: { courseId: classItemData.courseId } }">
        <button
          v-if="!deletemode"
          class="mt-4 text-xl w-full text-white bg-blue-600 py-2 rounded-xl shadow-lg"
        >
          进入
        </button>
      </router-link>
      <button
        v-if="deletemode"
        class="mt-4 text-xl w-full text-white bg-red-600 py-2 rounded-xl shadow-lg"
        @click="deleteCourse"
      >
        移除
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { tagColorList } from '@/api/staticdata'

export default defineComponent({
  props: {
    deletemode: {
      type: Boolean,
      default: false
    },
    classItemData: {
      type: Object,
      default: () => {}
    }
  },
  name: 'CourseItem',
  data() {
    return {
      tagColorList
    }
  },
  methods: {
    deleteCourse() {
      this.$emit('deleteCourse', this.classItemData.courseId)
    }
  }
})
</script>
