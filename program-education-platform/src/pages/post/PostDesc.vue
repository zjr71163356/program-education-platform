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
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" :src="PostInfo['avatar']" alt="" />
        <p class="text-base leading-6 text-gray-900">{{ PostInfo['userName'] }}</p>
        <p class="text-base leading-5 text-gray-500 justify-self-end">
          <time datetime="2023-01-23T13:23Z">{{ PostInfo['postTime'] }}</time>
        </p>
      </div>
      <div class="flex justify-end w-full">
        <router-link
          :to="{
            name: 'PostAdd',
            params: { problemId: route.query.problemId },
            query: { title: route.query.title, postType: false, postId: postId }
          }"
        >
          <el-button
            v-if="role !== 'student' || PostInfo['userId'] === userId"
            type="primary"
            :icon="Edit"
            circle
          />
        </router-link>
        <el-button
          v-if="role !== 'student' || PostInfo['userId'] === userId"
          type="danger"
          :icon="Delete"
          circle
          @click="showdeleteDialog(postId)"
        />
      </div>
    </div>
    <!-- Card body -->
    <div class="p-6">
      <MdPreview :editorId="id" :modelValue="PostInfo['postContent']" />
    </div>

    <CommentPlugin class="w-4/5" :postId="postId" @commented="addComment" :isReply="false" />

    <ul role="list" class="divide-y divide-gray-100 w-4/5">
      <CommentBlock :comments="postComments" :isReply="false" />
    </ul>
    <el-pagination
      layout="prev, pager, next"
      :total="commentTotal"
      :page-size="commentPageSize"
      v-model:current-page="commentCurrentpage"
    />
  </div>
  <!-- Card -->
  <DeleteDialog :isVisible="dialogVisible" @confirm-delete="handleDelete" />
</template>
<script setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import data from '@/data/doc/problemsolution.md?raw'
import { MdPreview } from 'md-editor-v3'
// import { comments, PostInfo } from '@/data/data'
import PostServices from '@/api/PostServices'
import UserServices from '@/api/UserServices'
import CommentBlock from '@/pages/post/CommentBlock.vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const role = localStorage.getItem('role')
const id = 'problem'
const commentTotal = ref(0)
const commentPageSize = 6
const commentCurrentpage = ref(1)
const dialogVisible = ref(false)
const DeleteId = ref('')
const PostInfo = ref('')
const route = useRoute()
const router = useRouter()
const postComments = ref([])
const postId = route.params.postId
onMounted(async () => {
  await PostServices.getPostById(postId).then(async (data) => {
    const userName = await UserServices.getUserName(data.userId)
    const avatar = await UserServices.getUserAvatar(data.userId)
    PostInfo.value = { ...data, userName: userName, avatar: avatar }
    console.log(data)
  })
  await getComment(postId)
})
const addComment = async (comment) => {
  const avatar = await UserServices.getUserAvatar(comment.fromUserId)
  postComments.value.push({ ...comment, avatar: avatar })
  commentTotal.value++
}

const getComment = async (postId) => {
  console.log(postId)

  await PostServices.getCommentsByPostId(postId).then(async (data) => {
    postComments.value = []
    for (const comment of data) {
      const avatar = await UserServices.getUserAvatar(comment.fromUserId)
      postComments.value.push({ ...comment, avatar: avatar })
    }
    commentTotal.value = data.length
  })
}
const showdeleteDialog = (postId) => {
  ElMessageBox.confirm('删除当前讨论贴?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await PostServices.removePostById(postId).then((res) => {
      console.log(res)
    })
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    router.push({
      name: 'DiscussionPostList',
      params: { problemId: route.query.problemId },
      query: { postType: route.query.postType, title: route.query.title }
    })
  })
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
