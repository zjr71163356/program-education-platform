<template>
  <div >
    <TabGroup>
      <!-- These buttons are here simply as examples and don't actually do anything. -->

      <TabPanels class="mt-2">
        <TabPanel class="-m-0.5 rounded-lg p-0.5">
          <label for="comment" class="sr-only">Comment</label>
          <div>
            <textarea
              rows="5"
              name="comment"
              id="comment"
              v-model="text"
              :class="[
                props.small ? 'h-16' : '',
                'block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6'
              ]"
              placeholder="此处评论"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div class="mt-2 flex justify-end">
      <button
        @click="submitComment"
        class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        评论
      </button>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabPanel, TabPanels } from '@headlessui/vue'
import { watch, ref } from 'vue'
import PostServices from '@/api/PostServices'
const props = defineProps({
  small: Boolean,
  postId: Number
})
const token = localStorage.getItem('token')
const userId = JSON.parse(token).userId
const userName= JSON.parse(token).userName
const text = ref('')
const postId = ref(props.postId)
const emit = defineEmits(['commented'])
const submitComment = async () => {
  console.log('submitComment')
  const comment = {
    postId: postId.value,
    fromUserId: userId,
    fromUsername: userName,
    commentContent: text.value,
    timestamp: new Date()
  }
  await PostServices.addComment(comment).then((res) => {
    console.log(res)
    emit('commented', res)
  })
}
watch(
  () => props.postId,
  (newVal, oldVal) => {
    postId.value = newVal
    console.log('postId', postId.value)
  }
)
</script>
