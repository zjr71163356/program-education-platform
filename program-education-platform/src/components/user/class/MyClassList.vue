<template>
  <!-- Card -->
  <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center w-full">
    <!-- Card header -->
    <div class="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
      <h5 class="flex items-center justify-center text-neutral-500 dark:text-neutral-300 text-3xl">
        <span class="mr-2"> 我的课程 </span>
      </h5>

    </div>

    <!-- Card body -->
    
    <div class="flex flex-col">
  
        <div class="flex justify-end">
          <button type="button" class="mt-5 rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600" @click="setDeleteMode()">{{buttonString}}</button>
        </div>
        
        <div class=" flex flex-wrap items-center justify-center">
          <!-- Text -->
        
          <div v-for="o in 25" :key="o" class="text item w-1/4">
            <!-- <ClassItem :deletemode="deleteMode"/> -->
          </div>
        </div>

    </div>
  </div>
</template>
<script>
import ClassItem from './ClassItem.vue'
export default {
  components: { ClassItem },
  data() {
    return {
      deleteMode: false,
      buttonString: '编辑课程'
    }
  },
  methods: {
    setDeleteMode( ) {
      this.deleteMode = !this.deleteMode;
      this.buttonString= this.deleteMode ? '取消' : '编辑课程';
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin: 18px;
}

.box-card {
  width: 80vw;
}

.el-row {
  justify-content: center;
  align-items: center;
}
</style>
