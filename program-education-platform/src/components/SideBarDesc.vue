<template lang="">
  <!-- Card -->
  <div class="flex flex-col justify-center">
    <div
      v-for="item in props.items"
      class="mx-20 block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center mb-10"
      :key="item.id"
    >
      <!-- Card header -->
      <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          <span class="mr-2"> {{ item.title }} </span>
        </h5>
      </div>

      <!-- Card body -->
      <div class="p-6">
        <ul
          class="!visible relative m-0 list-none p-0 data-[te-collapse-show]:block"
          data-te-sidenav-collapse-ref
        >
          <li v-for="itemchild in item.links" class="relative" :key="itemchild.id">
            <a
              class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              >{{ itemchild.title }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Card -->
</template>
<script setup>
const props = defineProps({
  items: Array
})
</script>
<style lang=""></style>
