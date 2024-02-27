<template lang="">
  <!-- Card -->
  <div
    class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-2/3 flex flex-col items-center"
  >
    <!-- Card header -->
    <div
      class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500 flex flex-col items-center justify-center w-full"
    >
      <h5 class="flextext-neutral-500 dark:text-neutral-300 text-3xl">
        <span class="mr-2"> {{ PostInfo['title'] }} </span>
      </h5>

      <div class="flex items-center gap-x-2 mt-5">
        <img
          class="h-6 w-6 flex-none rounded-full bg-gray-50"
          :src="'https://ui-avatars.com/api/?name=' + PostInfo['user']"
          alt=""
        />
        <p class="text-base leading-6 text-gray-900">{{ PostInfo['user'] }}</p>
        <p class="text-base leading-5 text-gray-500 justify-self-end">
          <time datetime="2023-01-23T13:23Z">{{ PostInfo['time'] }}</time>
        </p>
      </div>
      <div class="mt-3 text-gray-900 flex">
        推荐合计:
        <div class="ml-3">
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
            />
          </svg>
          <p class="text-center">{{ PostInfo['like'] }}</p>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle  @click="showdeleteDialog(PostInfo['Id'])"/>
      </div>
    </div>
    <!-- Card body -->
    <div class="p-6">
      <MdPreview :editorId="id" :modelValue="text" />
    </div>
    <div class="flex w-1/5 text-gray-500 justify-between mb-5">
      <div class="cursor-pointer" @click="toggleRecommend(true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :fill="isrecommend === true ? 'currentColor' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
        <p>推荐</p>
      </div>
      <div class="cursor-pointer" @click="toggleRecommend(false)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :fill="isrecommend === false ? 'currentColor' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
          />
        </svg>
        <p>不推荐</p>
      </div>
    </div>
    <CommentPlugin />

    <ul role="list" class="divide-y divide-gray-100 w-4/5">
      <CommentBlock :comments="comments" />
    </ul>
    <el-pagination layout="prev, pager, next" :total="1000" />
  </div>
  <!-- Card -->
  <DeleteDialog :isVisible="dialogVisible"   @confirm-delete="handleDelete"/>
</template>
<script setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import data from '@/data/doc/problemsolution.md?raw'
import { MdPreview } from 'md-editor-v3'
import { comments, PostInfo } from '@/data/data'
import CommentBlock from '@/components/user/post/CommentBlock.vue'

const id = 'problem'
const dialogVisible = ref(false)
const DeleteId = ref('')
const showdeleteDialog = (Id) => {
  DeleteId.value = Id
  dialogVisible.value = true

}
const text = ref(data)
const isrecommend = ref('')
const toggleRecommend = (value) => {
  isrecommend.value = value
}
const handleDelete = (userConfirmed) => {
  dialogVisible.value = false
  if (userConfirmed) {
    // 如果用户确认删除，那么删除数据
    console.log('delete');
  } else {
    // 如果用户没有确认删除，那么不做任何事情
    console.log('cancel');
  }
};
</script>
<style scoped></style>
