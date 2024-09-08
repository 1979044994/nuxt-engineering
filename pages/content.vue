<template>
  <Header></Header>
  <TopFullTip />
  <div>content {{ route.query.id }} age{{ route.query.age }}</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "content",
  layout: "none",
  auth: true,
});
const route = useRoute();
</script>

<style scoped></style>
