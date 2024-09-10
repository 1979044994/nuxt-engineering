<template>
  <div @click="handleClick">

    <div v-if="status === 'success'"> 请求内容页{{ data?.name }}</div>
    <div v-else> 加载中............</div>
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

// let { data, refresh } = await useAsyncData('data', () => {
//   return $fetch('/api/provideData')
// })
// console.log(data);

let { data, refresh, status } = await useFetch('/api/provideData', { lazy: true });
// let { data, refresh, status } = await useFetch('/api/provideData');
console.log(status.value);

// const handleClick = async () => {
//   let response = await useAsyncData('data', () => {
//     return $fetch('/api/provideData')
//   })
//   return response
// }

// const getData = async () => {

//   return response;
// }

const handleClick = async () => {
  refresh();
}
</script>

<style></style>
