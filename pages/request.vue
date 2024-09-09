<template>
  <div @click="handleClick">
    请求内容页{{ name }}
  </div>
</template>

<script lang="ts" setup>
// const res = await $fetch('/api/provideData')
// console.log(res);

// let response = await useAsyncData('data', () => {
//   console.log(11111111111);

//   return $fetch('/api/provideData')
// })
// console.log(response.data.value);
let { data: { value: { name } }, refresh } = await useAsyncData('data', () => {
  return $fetch('/api/provideData')
})
// const getData = async () => {

//   return response;
// }

const handleClick = async () => {

  refresh();


}
</script>

<style></style>
