<template>
  <form action="#" class="w-4/5">
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
                :class="[props.small ? 'h-16' : '', 'block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6']"
              placeholder="此处评论"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div class="mt-2 flex justify-end">
      <button
      @click.prevent
        type="submit"
        class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        评论
      </button>
    </div>
  </form>
</template>

<script setup>
 
import { TabGroup, TabPanel, TabPanels } from '@headlessui/vue'
const props = defineProps({
  small: Boolean
})
 
</script>
