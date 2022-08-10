<template>
  <button :style="{ backgroundColor: 'yellow' }">{{ prefix }}定制button</button>
</template>


<script lang="ts" setup>
defineProps({
  prefix: String
})
</script>