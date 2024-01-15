<template lang="">
  <div  v-html="result"> </div>
  <h3>156</h3>
</template>
<script setup>
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.render('### markdown-it rulezz!')
</script>
<style lang=""></style>
