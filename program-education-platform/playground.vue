<template>
  <div>
    <h1>用户信息</h1>
    <p>姓名: {{ user.name }}</p>
    <p>年龄: {{ user.age }}</p>
    <button @click="updateUser">更新用户信息</button>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

// 使用 reactive 创建一个响应式对象
const user = reactive({
  name: '张三',
  age: 25
})

// 定义一个方法来更新用户信息
const updateUser = () => {
  user.name = '李四'
  user.age = 30
}

// 使用 deep: true 选项来监听对象的深层变化
watch(user, (newVal, oldVal) => {
  console.log('用户信息已更新:', newVal)
}, { deep: true })
</script>