<template>
  <div class="flex w-full">
    <!-- Static sidebar for desktop -->

    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto border border-gray-200 bg-white px-10 pb-4 container-height"
    >
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1 w-50">
              <li v-for="item in navigation" :key="item.name">
                <router-link :to="{ name: item.href.name }">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-5 text-sm leading-6 font-semibold whitespace-nowrap' // Add 'whitespace-nowrap' class here
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-blue-600'
                          : 'text-gray-400 group-hover:text-blue-600',
                        'h-6 w-6 shrink-0'
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <div class="w-full container-height bg-white border  ">
      <RouterView class="h-full overflow-y-auto w-full    "></RouterView>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router' // Import the 'router' object from the 'vue-router' package
import {
 
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'
const router = useRoute()
const navigation = ref([
  { name: '我的课程', href: { name: 'MyClassList' }, icon: HomeIcon, current: false },
  { name: '我的题解', href: {name:'MyProblemSolution'}, icon: UsersIcon, current: false },
  { name: '我的讨论帖', href:{name:'MyDiscussionPost'}, icon: FolderIcon, current: false },
  { name: '历史提交', href: {name:'MyHistorySubmission'}, icon: DocumentDuplicateIcon, current: false }
])

watch(
  () => router.name,
  () => {
    navigation.value.forEach((item) => {
      item.current = item.href.name === router.name
    })
  },
  { immediate: true }
)
</script>
<style scoped>
.container-height {
  height: calc(100vh - 48px);
}
</style>
