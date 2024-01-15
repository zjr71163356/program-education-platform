<template lang="">
  <div class="flex justify-around w-full">
    <ClassContentSideBar class="w-1/6"></ClassContentSideBar>
    <Centered></Centered>
  </div>


</template>
<script setup>
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.render('# markdown-it rulezz!');
console.log(Object.keys(md.renderer.rules))
</script>
<style lang=""></style>
