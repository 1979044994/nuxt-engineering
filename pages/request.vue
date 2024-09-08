<template>
  <div>
    请求内容页
  </div>
</template>

<script lang="ts" setup>
const res = await $fetch('/api/provideData')
console.log(res);

</script>

<style></style>
