<template lang="">
  <li
    v-for="(comment, index) in commentList"
    :key="index"
    class="flex flex-col justify-between py-3 gap-y-2"
  >
    <div class="flex flex-col min-w-0 gap-x-4 grow">
      <div class="flex items-center gap-x-2">
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" :src="avatar" alt="" />
        <p class="text-sm leading-6 text-gray-900">{{ comment['fromUsername'] }}</p>
        <p class="text-xs leading-5 text-gray-500 justify-self-end">
          <time datetime="2023-01-23T13:23Z">{{ comment['timestamp'].replace('T', ' ') }}</time>
        </p>
        <p v-if="comment.toUsername" class="justify-self-start text-gray-500">
          回复了 {{ comment['toUsername'] }}的评论
        </p>
      </div>

      <div class="min-w-0 flex-auto">
        <p class="my-3">{{ comment[props.isReply ? 'replyContent' : 'commentContent'] }}</p>
      </div>
      <div class="flex items-center justify-between self-start gap-x-3">
        <div
          v-if="!route.query.postType"
          class="flex items-center text-gray-500 cursor-pointer"
          @click="toggleCommentVis(index)"
        >
          回复
        </div>

        <div
          v-if="role !== 'student' || comment['fromUserId'] === userId"
          class="flex items-center text-gray-500 cursor-pointer"
          @click="showdeleteDialog(comment[props.isReply ? 'replyId' : 'commentId'], index)"
        >
          删除
        </div>
      </div>
    </div>
    <!-- <hr /> -->
    <CommentPlugin
      v-if="showComment[index]"
      class="grow w-full"
      :small="true"
      :isReply="true"
      :parentComment="comment"
      @commented="addComment($event, index)"
    />

    <ul
      v-if="comment.replies && comment.replies.length > 0"
      class="w-11/12 self-end bg-slate-200 px-6 rounded-lg my-1"
    >
      <!-- {{comment.commentId}} -->
      <CommentBlock :comments="comment.replies" :isReply="true" :commentIndex="index" />
    </ul>
  </li>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import CommentPlugin from './CommentPlugin.vue'
import { useRoute } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import PostServices from '@/api/PostServices'
import UserServices from '@/api/UserServices'
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const role = localStorage.getItem('role')
const emit = defineEmits(['deleteComment'])
const route = useRoute()
const avatar = ref('')
const props = defineProps({
  comments: Array,
  isReply: {
    type: Boolean,
    default: true
  },
  commentIndex: {
    type: Number,
    default: -1
  }
})
onMounted(async () => {
  avatar.value = await UserServices.getUserAvatar(userId)
  commentList.value = props.comments
  console.log(avatar.value)
})
watch(
  () => props.comments,
  (newVal) => {
    commentList.value = newVal
  }
)

const commentList = ref([])
const addComment = (comment, index) => {
  console.log(comment, index)
  if (props.isReply == false) commentList.value[index].replies.push(comment)
  else commentList.value.push(comment)
}
const showdeleteDialog = async (commentId, commentIndex) => {
  dialogVisible.value = true
  ElMessageBox.confirm('删除当前评论?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    if (props.isReply) {
      await PostServices.removeReply(commentId).then((res) => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        emit('deleteComment', true)
      })
    } else {
      await PostServices.removeComment(commentId).then((res) => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        emit('deleteComment', true)
      })
    }
    commentList.value.splice(commentIndex, 1)
  })
}
const dialogVisible = ref(false)
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

const showComment = ref([])
const toggleCommentVis = (index) => {
  showComment.value[index] = !showComment.value[index]
}
</script>
<style lang=""></style>
