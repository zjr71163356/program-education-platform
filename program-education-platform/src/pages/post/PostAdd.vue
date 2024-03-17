<template>
  <div class="w-screen">
    <div class="relative mb-3 mt-5 w-full flex justify-center items-center">
      <span class="text-xl">贴子标题</span>
      <el-input v-model="title" placeholder="请输入标题" style="padding: 0 10px; width: 50%" />
    </div>

    <MdEditor v-model="text" class="my-5" />

    <div class="flex justify-end">
      <button
        v-if="!route.query.postId"
        class="rounded-md bg-blue-600 px-8 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        @click="addPost"
      >
        发布
      </button>
      <button
        v-if="route.query.postId"
        class="rounded-md bg-blue-600 px-8 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        @click="updatePost"
      >
        编辑
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import PostServices from '@/api/PostServices'
import { getFormattedDate } from '@/utils/tools'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const title = ref('')
const text = ref('Hello Editor!')
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const route = useRoute()
const router = useRouter()
const props = defineProps({
  problemId: {
    type: Number
  }
})
onMounted(async () => {
  if (route.query.postId) {
    await PostServices.getPostById(route.query.postId).then((res) => {
      console.log(res)
      title.value = res.title
      text.value = res.postContent
    })
  }
})
const updatePost = async () => {
  let postType = false
  postType = route.query.postType == 'true'
  const post = {
    title: title.value,
    postTime: new Date(),
    postContent: text.value
  }
  await PostServices.updatePostById(route.query.postId, post)
    .then((res) => {
      console.log(res)
      ElMessage({
        type: 'success',
        message: '更新'
      })

      router.push({
        name: postType ? 'SolutionPostList' : 'DiscussionPostList',
        params: { problemId: route.params.problemId },
        query: { postType: route.query.postType, title: route.query.title }
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const addPost = async () => {
  const postTime = await getFormattedDate(new Date())
  let postType = false

  postType = route.query.postType == 'true'

  const post = {
    title: title.value,
    userId: userId,
    postTime: new Date(),
    postContent: text.value,
    postType: postType,
    problemId: route.params.problemId
  }
  console.log(post)
  await PostServices.addPost(post)
    .then((res) => {
      console.log(res)
      ElMessage({
        type: 'success',
        message: '添加'
      })

      router.push({
        name: postType ? 'SolutionPostList' : 'DiscussionPostList',
        params: { problemId: route.params.problemId },
        query: { postType: route.query.postType, title: route.query.title }
      })
    })
    .catch((err) => {
      console.log(err)
    })
  // Handle form submission logic here
}
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
