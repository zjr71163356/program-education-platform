<template lang="">
  <li
    v-for="(comment, index) in props.comments"
    :key="index"
    class="flex flex-col justify-between py-3"
  >
    <div class="flex flex-col min-w-0 gap-x-4 grow">
      <div class="flex items-center gap-x-2">
        <img
          class="h-6 w-6 flex-none rounded-full bg-gray-50"
          :src="'https://ui-avatars.com/api/?name=' + comment['from_username']"
          alt=""
        />
        <p class="text-sm leading-6 text-gray-900">{{ comment['from_username'] }}</p>
        <p class="  text-xs leading-5 text-gray-500 justify-self-end    ">
        <time datetime="2023-01-23T13:23Z">{{ comment['timestamp'] }}</time>
        </p>
        <p v-if="comment.to_username" class="justify-self-start text-gray-500">
          回复了 {{ comment['to_username'] }}的评论
        </p>
      </div>

      <div class="min-w-0 flex-auto">
        <p class="my-3">{{ comment['content'] }}</p>
      </div>
      <div class="flex items-center justify-between self-start gap-x-3">
        <div class="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 mr-1 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>

          <p class="text-gray-500">{{ comment['likes'] }}</p>
        </div>
        <div
          class="flex items-center text-gray-500 cursor-pointer"
          @click="toggleCommentVis(index)"
        >
          回复
        </div>
      </div>
    </div>
    <CommentPlugin v-if="showComment[index]" class="grow w-full" :small="true" />
    <ul class="w-11/12 self-end bg-slate-200 px-6 rounded-lg my-1">
      <CommentBlock
        v-if="comment.replies && comment.replies.length > 0"
        :comments="comment.replies"
      />
    </ul>
  </li>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  comments: Array
})
const showComment = ref([])
const toggleCommentVis = (index) => {
  showComment.value[index] = !showComment.value[index]
}
</script>
<style lang=""></style>
