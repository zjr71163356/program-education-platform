<template>
  <div class="flex">
    <select
      v-model="selectedlanguage"
      id="location"
      name="location"
      class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      <option v-for="(language, id) in languageList" :key="id">{{ language }}</option>
    </select>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      languageList:['C++','Java','Python','JavaScript'],
      selectedlanguage: 'C++' // Initialize selected language as empty
    }
  },
  mounted() {
    console.log(this.selectedlanguage) // Print the selected language value in the mounted hook
  },
  watch: {
    selectedlanguage(newValue) {
        console.log(this.selectedlanguage) // Print the selected language value in the mounted hook
      this.$emit('selectedlanguage', newValue) // Emit the selected language value
    }
  }
}
</script>
