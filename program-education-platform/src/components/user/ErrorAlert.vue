<template>
    <div class="rounded-md bg-red-50 p-4 fade-in fade-out"  v-if="IsShow">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-red-800">{{ props.message }} </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckCircleIcon } from '@heroicons/vue/20/solid'
  
  // Define props
  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    IsShow: {
      type: Boolean,
      default: false
    }
  })
  </script>
  
  <style scoped>
  .fade-in {
    animation: fadeIn 1s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  