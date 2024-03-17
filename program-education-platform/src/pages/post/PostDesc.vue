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
      <div class="flex justify-end w-full">
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle @click="showdeleteDialog(PostInfo['Id'])" />
      </div>
    </div>
    <!-- Card body -->
    <div class="p-6">
      <MdPreview :editorId="id" :modelValue="text" />
    </div>

    <CommentPlugin class="w-4/5"/>

    <ul role="list" class="divide-y divide-gray-100 w-4/5">
      <CommentBlock :comments="comments" />
    </ul>
    <el-pagination layout="prev, pager, next" :total="1000" />
  </div>
  <!-- Card -->
  <DeleteDialog :isVisible="dialogVisible" @confirm-delete="handleDelete" />
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
// const isrecommend = ref('')
// const toggleRecommend = (value) => {
//   isrecommend.value = value
// }
const handleDelete = (userConfirmed) => {
  dialogVisible.value = false
  if (userConfirmed) {
    // 如果用户确认删除，那么删除数据
    console.log('delete')
  } else {
    // 如果用户没有确认删除，那么不做任何事情
    console.log('cancel')
  }
}
</script>
<style scoped></style>
