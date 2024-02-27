<template lang="">
  <el-dialog v-model="dialogVisible" title="提示" width="500" :show-close="false">
    <span>确认要删除吗?</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="confirmDelete(false)">取消</el-button>
        <el-button type="danger" @click="confirmDelete(true)"> 删除 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isVisible: Boolean
})

let dialogVisible = ref(false)
const emit = defineEmits(['confirm-delete'])

watch(
  () => props.isVisible,
  (newVal) => {
    dialogVisible.value = newVal
  }
)
const confirmDelete = (userConfirmed) => {
  // 假设 userConfirmed 是用户是否确认删除的布尔值
  emit('confirm-delete', userConfirmed)
  dialogVisible.value = false
}
</script>
<style lang=""></style>
