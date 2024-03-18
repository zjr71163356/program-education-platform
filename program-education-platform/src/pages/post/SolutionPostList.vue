<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-2/3">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-between dark:text-neutral-300">
        <span class="mr-2 text-xl"> {{ route.query.title }} </span>
        <router-link
          :to="{
            name: 'PostAdd',
            params: { problemId: route.params.problemId },
            query: { title: route.query.title, postType: true }
          }"
        >
          <button
            type="button"
            class="rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            发布题解
          </button>
        </router-link>
      </h5>
    </div>
    <!-- Card body -->
    <div class="p-6">
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="(Posts, index) in PostsList"
          :key="index"
          class="flex flex-col justify-between gap-x-6 py-5 gap-y-3"
        >
          <div class="flex min-w-0 gap-x-4">
            <img
              class="h-12 w-12 flex-none rounded-full bg-gray-50 border-2 border-gray-300"
              :src="Posts['avatar']"
              alt=""
            />
            <div class="flex flex-col">
              <div class="min-w-0 flex-auto">
                <p class="text-sm leading-6 text-gray-900">{{ Posts['userName'] }}</p>
                <!-- <p class="text-lg font-semibold leading-6 text-gray-900">{{ Posts['userName'] }}</p> -->
              </div>
            </div>
          </div>

          <p class="text-2xl font-semibold leading-6 text-gray-900 self-center">
            {{ Posts['title'] }}
          </p>

          <div :class="{ 'max-h-40 overflow-hidden': !showFullContent[index] }">
            <MdPreview :modelValue="Posts['postContent']" />
          </div>
          <button
            class="mt-2 text-blue-600"
            @click="toggleContent(index)"
            v-if="Posts['postContent'].length > 200"
          >
            {{ showFullContent[index] ? '点击收起' : '点击展开查看更多' }}
          </button>
          <div class="flex gap-5 items-center">
            <p class="mt-1 text-xs leading-5 text-gray-500">
              发布于: <time datetime="2023-01-23T13:23Z">{{ Posts['postTime'] }}</time>
            </p>
            <div class="flex items-center cursor-pointer" @click="getComment(Posts['postId'])">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span> 回复</span>
            </div>
            <!-- {{ Posts['userId'] }} -->
            <span
              class="cursor-pointer"
              v-if="role !== 'student' || userId == Posts['userId']"
              @click="removePost(Posts['postId'], index)"
            >
              删除</span
            >
          </div>
        </li>
      </ul>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="6"
        v-model:current-page="currentpage"
      />
    </div>
  </div>

  <el-dialog class="w-4/5" v-model="dialogVisible" title="评论">
    <CommentPlugin :postId="selectedPostId" @commented="getComment(selectedPostId)" />
    <ul role="list" class="divide-y divide-gray-100 w-4/5">
      <CommentBlock :comments="postComments" @deleteComment="getComment(selectedPostId)" />
    </ul>

    <el-pagination
      layout="prev, pager, next"
      :total="commentTotal"
      :page-size="commentPageSize"
      v-model:current-page="commentCurrentpage"
    />
  </el-dialog>
  <!-- Card -->
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PostServices from '@/api/PostServices'
import UserServices from '@/api/UserServices'
import { MdPreview } from 'md-editor-v3'
import { ElMessageBox, ElMessage } from 'element-plus'

const commentTotal = ref(0)
const commentPageSize = 6
const commentCurrentpage = ref(1)
const selectedPostId = ref('')
const route = useRoute()
const PostsList = ref([])
const total = ref(0)
const currentpage = ref(1)
const showFullContent = ref([])
const dialogVisible = ref(false)
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const role = localStorage.getItem('role')
const postComments = ref([])
const props = defineProps({
  problemId: {
    type: String
  }
})
const getComment = async (postId) => {
  console.log(postId)
  selectedPostId.value = postId
  dialogVisible.value = true
  await PostServices.getCommentsByPostId(postId).then(async (data) => {
    postComments.value = []
    for (const comment of data) {
      const avatar = await UserServices.getUserAvatar(comment.fromUserId)
      postComments.value.push({ ...comment, avatar: avatar })
    }
    commentTotal.value = data.length
  })
}

const removePost = async (postId, index) => {
  ElMessageBox.confirm('删除当前题解?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const res = await PostServices.removePostById(postId).then((res) => {
      PostsList.value.splice(index, 1)
      console.log(res)
    })

    ElMessage({
      type: 'success',
      message: '删除成功'
    })
  })
}
onMounted(async () => {
  console.log('userId', userId)
  console.log('role', role)
  await PostServices.getAllPostsOverViewList(
    route.query.postType,
    route.params.problemId,
    1,
    null
  ).then(async (data) => {
    total.value = data.length
  })

  await PostServices.getAllPostsOverViewList(
    route.query.postType,
    route.params.problemId,
    1,
    6
  ).then(async (data) => {
    for (const post of data) {
      const userName = await UserServices.getUserName(post.userId)
      const avatar = await UserServices.getUserAvatar(post.userId)
      PostsList.value.push({ ...post, userName: userName, avatar: avatar })
      showFullContent.value.push(post.postContent.length <= 200)
    }
  })
})
watch(commentCurrentpage, async (newVal, oldVal) => {
  postComments.value = []
  await PostServices.getCommentsByPostId(selectedPostId.value, newVal, commentPageSize).then(
    async (data) => {
      for (const comment of data) {
        const avatar = await UserServices.getUserAvatar(comment.fromUserId)
        postComments.value.push({ ...comment, avatar: avatar })
      }
    }
  )
})

watch(currentpage, async (newVal, oldVal) => {
  await PostServices.getAllPostsOverViewList(
    route.query.postType,
    route.params.problemId,
    newVal,
    6
  ).then(async (data) => {
    PostsList.value = []
    showFullContent.value = []
    for (const post of data) {
      const userName = await UserServices.getUserName(post.userId)
      const avatar = await UserServices.getUserAvatar(post.userId)
      PostsList.value.push({ ...post, userName: userName, avatar: avatar })
      showFullContent.value.push(post.postContent.length <= 200)
    }
  })
})

const toggleContent = (index) => {
  showFullContent.value[index] = !showFullContent.value[index]
}
</script>

<style></style>
