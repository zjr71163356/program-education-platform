<template >

  <div class="flex w-full ">
    <!-- Static sidebar for desktop -->
 
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="h-full  flex grow flex-col gap-y-5 overflow-y-auto   border   border-gray-200 bg-white px-10 pb-4 "
      >
 
        <nav class="flex flex-1 flex-col ">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1 w-50">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-5 text-sm leading-6 font-semibold whitespace-nowrap' // Add 'whitespace-nowrap' class here
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
 
          </ul>
        </nav>
 
    </div>

    <div class="w-full h-full bg-white    ">
 
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
 
import {
 
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'
 

const navigation = [
  { name: '我的课程', href: '#', icon: HomeIcon, current: true },
  { name: '我的题解', href: '#', icon: UsersIcon, current: false },
  { name: '我的讨论帖', href: '#', icon: FolderIcon, current: false },
  { name: '我的回复', href: '#', icon: CalendarIcon, current: false },
  { name: '历史提交', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false }
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]
 
 
</script>
