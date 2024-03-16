<template lang="">
  <!-- Card -->

  <div class="flex w-screen">
    <div
      class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 container-height overflow-auto"
    >
      <div class="border border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 class="flex items-center justify-start text-xl">
          <span class="mr-2"> {{ TheProblem.title }} </span>
        </h5>
      </div>
      <!-- Card body -->
      <div>
        <!-- Title -->
        <MdPreview :modelValue="text" />
      </div>
    </div>
    <div
      class="flex flex-col block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left w-1/2 container-height overflow-hidden"
    >
      <div class="bg-slate-100 flex justify-between content-center">
        <SelectList class="w-1/5 p-2" @selectedlanguage="language = $event" />
        <div class="w-1/2 flex justify-end">
          <!-- {{TheProblem.title}} -->
          <router-link
            :to="{
              name: 'PostList',
              params: { problemId: problemId},query: { title: TheProblem.title, postType: false }
            }"
            class="self-center"
          >
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <div class="self-center">讨论</div>
            </div>
          </router-link>
          <router-link
            :to="{
              name: 'PostList',
              params: { problemId: problemId },query: { title: TheProblem.title, postType: true }
            }"
            class="self-center"
          >
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8 self-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <div class="self-center">题解</div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'CurrentHistroySubmission', params: { problemId: problemId } }"
            class="self-center"
          >
            <div
              class="rounded-lg flex h-1/2 mr-5 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div class="self-center">历史提交</div>
            </div>
          </router-link>
        </div>
      </div>
      <CodeEditer
        :selectedlanguage="language"
        v-model:IsSendCode="isSendCode"
        @code-submitted="receiveCode"
      />
      <FooterBannerProblemDesc class="bg-white footer-h p-5">
        <template #button>
          <button
            @click="openSubmitResult"
            type="button"
            class="rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            提交代码
          </button>
        </template>
      </FooterBannerProblemDesc>
    </div>
  </div>
  <SubmitResult v-model:IsOpen="isOpen" :SubmitResultDict="Submission" />
  <!-- Card -->
</template>
<script setup>
import { onMounted, ref } from 'vue'

import { MdPreview } from 'md-editor-v3'
import FooterBannerProblemDesc from '@/components/user/layout/FooterBannerProblemDesc.vue'
import CodeEditer from '@/components/user/problem/CodeEditer.vue'
import SubmitResult from '@/components/user/problem/SubmitResult.vue'
import { useRoute } from 'vue-router'
import ProblemServices from '@/api/ProblemServices'
import UserServices from '@/api/UserServices'
import { getDate, getMaxTimeAndMemory, UnicodeDecodeB64 } from '@/utils/tools'

const prop = defineProps({
  problemId: {
    type: Number
  }
})

const TheProblem = ref('')
const route = useRoute()
const problemId = ref(prop.problemId)
const language = ref('C++')
const text = ref('')
const isOpen = ref(false)
const isSendCode = ref(false)
const Submission = ref({})
const userId = JSON.parse(localStorage.getItem('token')).userId
const userName = JSON.parse(localStorage.getItem('token')).userName

const openSubmitResult = () => {
  console.log('openSubmitResult')
  isSendCode.value = true
  isOpen.value = true
}
const resultCheck = async (resultList) => {
  let description = 'Accepted'
  let compiler_output = ''

  resultList.forEach((submission) => {
    if (submission.status.description !== 'Accepted') {
      description = submission.status.description
      compiler_output = UnicodeDecodeB64(submission.compile_output)
      return // 停止循环
    }
  })

  return { description, compiler_output }
}

const receiveCode = async (codeFromEditer) => {
  // console.log('receiveCode')
  // console.log(codeFromEditer)
  isSendCode.value = false
  const testData = await ProblemServices.getProblemTestData(problemId.value)
  // console.log(testData)

  const data = await ProblemServices.SendGetSubmission(language.value, codeFromEditer, testData)

  const { maxTime, maxMemory } = await getMaxTimeAndMemory(data)
  const submitTime = await getDate()
  const { description, compiler_output } = await resultCheck(data)
  console.log(maxTime, maxMemory)
  Submission.value = {
    题目Id: problemId.value,
    题目: TheProblem.value.title,
    用户名: userName,
    提交时间: submitTime,
    语言: language.value,
    内存: `${maxMemory}MB/125MB`,
    用时: `${maxTime}s/1s `,
    状态: description,
    编译器输出: compiler_output
  }
  console.log(problemId.value)
  const addSubmission = {
    problemId: problemId.value,
    userId: userId,
    userName: userName,
    title: TheProblem.value.title,
    resultState: description,
    compiler: language.value,
    memory: maxMemory,
    runtime: maxTime,
    submitTime: submitTime,
    code: codeFromEditer,
    compilerOutput: compiler_output
  }
  console.log(addSubmission)
  await UserServices.addSubmissionRecord(addSubmission)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })

  // console.log(Submission.value)
}

onMounted(async () => {
  // console.log(route.params)
  // console.log('mounted')
  // console.log(problemId.value)
  await ProblemServices.getSystemInfo()
  await ProblemServices.getProblemById(problemId.value)
    .then((problem) => {
      TheProblem.value = problem
      console.log(problem)

      text.value = problem.problemContent
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<style scoped>
.custome-h {
  height: calc(100vh - 90px);
}
.footer-h {
  height: 6%;
}
.container-height {
  height: calc(100vh - 48px);
}
</style>
