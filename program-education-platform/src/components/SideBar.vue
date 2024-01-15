<template>
  <nav
    id="sidenav-1"
    class="rounded-lg z-[1035]   overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800"
    data-te-sidenav-init
    data-te-sidenav-hidden="false"
    data-te-sidenav-position="relative"
    data-te-sidenav-backdrop="false"
  >
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
        <span class="mr-2"> Introduction </span>
      </h5>
    </div>

    <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
      <li v-for="item in props.items" class="relative" :key="item.id">
        <a
          class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
          data-te-sidenav-link-ref
        >
          <span
            class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300"
          >
          </span>
          <span>{{item.title }}</span>

        </a>
       
      </li>
    </ul>
  </nav>
  <!-- Sidenav -->

  <!-- Toggler -->
</template>

<script setup>



const props = defineProps({
  items: Array
})


// Initialization for ES Users


</script>
