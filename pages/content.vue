<template>
  <header></header>
  <div>
    content {{ route.query.id }}
    age{{ route.query.age }}
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
</script>

<style scoped></style>
