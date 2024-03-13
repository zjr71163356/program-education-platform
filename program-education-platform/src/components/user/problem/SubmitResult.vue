<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="closeEvent">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              v-loading="loading"
              class="w-1/2 relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 mb-5"
                >提交结果</DialogTitle
              >

              <div class="bg-slate-100 w-full flex flex-wrap text-center rounded-lg">
                <div
                  v-for="(value, key) in resultDict"
                  :key="key"
                
                  class="flex flex-col w-1/3 my-1"
                >
                  <span class="text-sm text-gray-500" v-if="key !== '编译器输出'">{{ key }}</span>
                  <span v-if="key !== '编译器输出'" :class="{'text-green-500': key === '状态' && value === 'Accepted', 'text-red-500': key === '状态' && value === 'Wrong Answer'}">{{ value }}</span>
                </div>
              </div>
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left">
                <!-- Card header -->
                <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                  <h5
                    class="flex items-center justify-start text-neutral-500 dark:text-neutral-300"
                  >
                    <span> 编译器输出 </span>
                  </h5>
                </div>

                <!-- Card body -->
                <div class="p-6 bg-slate-700 text-white ">
                  {{ resultDict['编译器输出'] }}
                </div>
              </div>
              <div class="mt-3 flex justify-end">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 right-0"
                  @click="closeEvent"
                >
                  返回
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
const props = defineProps({
  IsOpen: {
    type: Boolean,
    default: false
  },
  SubmitResultDict: {
    type: Object
  }
})
const resultDict = ref({})
const emit = defineEmits(['update:IsOpen'])
const closeEvent = () => {
  open.value = false
  emit('update:IsOpen', false)
  // console.log('closeEvent')
}
const loading = ref(true)

watch(
  () => props.SubmitResultDict,
  (newVal, oldVal) => {
    console.log('newVal', newVal)
    resultDict.value = newVal
    loading.value = false
  }
)
watch(
  () => props.IsOpen,
  (newVal, oldVal) => {
    // console.log('newVal', newVal)
    open.value = newVal
    loading.value=true
  }
)
</script>
