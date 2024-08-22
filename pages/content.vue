<template>
  <div>
    content {{ route.query.id }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'content',
  layout: 'none'
})
const route = useRoute()
</script>

<style scoped></style>
