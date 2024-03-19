<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-2/3">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-between dark:text-neutral-300">
        <span class="mr-2 text-xl"> Title </span>
        <router-link
          :to="{
            name: 'PostAdd',
            params: { problemId: route.params.problemId },
            query: { title: route.query.title, postType: false }
          }"
        >
          <button
            type="button"
            class="rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            发布讨论
          </button></router-link
        >
      </h5>
    </div>

    <!-- Card body -->
    <div class="p-6">
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="(Posts, index) in PostsList"
          :key="index"
          class="flex justify-between gap-x-6 py-5"
        >
          <div class="flex min-w-0 gap-x-4">
            <!-- <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  /></svg
                >{{ Posts['like'] }}
              </div> -->
            <img
              class="h-12 w-12 flex-none rounded-full bg-gray-50"
              :src="Posts['avatar']"
              alt=""
            />
            <router-link
              :to="{
                name: 'PostDesc',
                params: { postId: Posts['postId'] },
                query: { problemId: route.params.problemId, title: route.query.title }
              }"
            >
              <div class="min-w-0 flex-auto">
                <p class="text-lg font-semibold leading-6 text-gray-900">{{ Posts['title'] }}</p>
              </div>
            </router-link>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">{{ Posts['userName'] }}</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">
              回复于:
              <time datetime="2023-01-23T13:23Z">{{ Posts['postTime'].replace('T', ' ') }}</time>
            </p>
          </div>
        </li>
      </ul>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        v-model:current-page="currentpage"
      />
    </div>
  </div>
  <!-- Card -->
</template>

<script setup>
// import { PostsList } from '@/data/data'
import PostServices from '@/api/PostServices'
import UserServices from '@/api/UserServices'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  problemId: {
    type: String
  }
})
const total = ref(0)
const pageSize = 7
const currentpage = ref(1)
const PostsList = ref([])
const route = useRoute()
onMounted(async () => {
  await PostServices.getAllPostsOverViewList(false, props.problemId, 1, null).then(async (data) => {
    total.value = data.length
  })
  await PostServices.getAllPostsOverViewList(false, props.problemId, 1, pageSize).then(
    async (data) => {
      for (const post of data) {
        const userName = await UserServices.getUserName(post.userId)
        const avatar = await UserServices.getUserAvatar(post.userId)
        PostsList.value.push({ ...post, userName: userName, avatar: avatar })
      }
    }
  )
})

watch(currentpage, async (newVal, oldVal) => {
  PostsList.value = []
  await PostServices.getAllPostsOverViewList(false, props.problemId, newVal, pageSize).then(
    async (data) => {
      for (const post of data) {
        const userName = await UserServices.getUserName(post.userId)
        const avatar = await UserServices.getUserAvatar(post.userId)
        PostsList.value.push({ ...post, userName: userName, avatar: avatar })
      }
    }
  )
})
</script>
