<template>
  <Disclosure as="nav" class="bg-blue-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-12 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.href.name }"
                :class="[
                  item.current
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="relative rounded-full bg-blue-600 p-1 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <RouterLink
                   :to="{ name: 'TheProfile' }"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >个人资料</RouterLink
                  >
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >退出账号</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <div class="flex space-x-4 ml-2">
            <RouterLink
              v-for="item in navigation2"
              :key="item.name"
              :to="item.href"
              :class="[
                item.current
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-300 hover:bg-blue-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink, useRoute } from 'vue-router'
import { watch, ref } from 'vue'
export default {
  components: {
    Disclosure,
    DisclosureButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    RouterLink
  },
  setup() {
    let router = useRoute()
    const navigation = ref([
      { name: '首页', href: { name: 'Home' }, current: false },
      { name: '课程', href: { name: 'ClassList' }, current: false },
      { name: '题库', href: { name: 'ProblemBank' }, current: false }
    ])
    const navigation2 = ref([{ name: '个人中心', href: { name: 'MyClassList' }, current: false }])

    watch(
      () => router.name,
      () => {
        // console.log( router.name)
        navigation.value.forEach((item) => {
          item.current = item.href.name === router.name
        })
        navigation2.value.forEach((item) => {
          item.current = item.href.name === router.name
        })
      },
      { immediate: true }
    )
    return {
      navigation,
      navigation2
    }
  }
}
</script>
