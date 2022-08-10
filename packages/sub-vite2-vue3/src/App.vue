<template>
  <h1 :style="{ margin: '50px' }">
    这是vue3子应用页面
  </h1>
  <SelfButton :style="{ margin: '0 50px' }" prefix="sub-vite2-vue3" />
</template>

<script lang="ts" setup>
import SelfButton from 'button-vite2-vue3'
</script>
