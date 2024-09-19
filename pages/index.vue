<template>
  <div class="flex flex-col">
    <div>index</div>
    <nuxt-link to="/details/2">details</nuxt-link>

    <nuxt-link to="/content?id=2&age=18">content</nuxt-link>
    <div @click="handleRouterPush" class="info">test</div>
    <div class="cursor-pointer" @click="handleMoreRoute">更多内容无参</div>
    <div class="cursor-pointer" @click="handleMoreRoutePath">更多内容路径参</div>
    <div class="cursor-pointer" @click="handleMoreRoutePathQ">更多内容路径参query</div>
    <div class="cursor-pointer" @click="handleMoreRouteName('content')">更多内容name content</div>
    <div class="cursor-pointer" @click="handleMoreRouteName('more')">更多内容name</div>
    <div class="cursor-pointer h-20 w-80 bg-teal-500" @click="handleMoreRouteName('request')"> 去请求</div>
    <div class="cursor-pointer h-20 w-80 bg-teal-500" @click="handleMoreRouteName('feaf')">错误</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "index",
})
const router = useRouter();
console.log(useState('username').value);


const handleRouterPush = () => {
  router.push("/details/1");
};
const handleMoreRoute = () => {
  navigateTo("/more");
};
const handleMoreRoutePath = () => {
  navigateTo("/more/1");
};
const handleMoreRoutePathQ = () => {
  navigateTo("/more/?id=1&age=18");
};

const handleMoreRouteName = (name: string) => {
  navigateTo({ name, query: { id: 1, age: 18 } });
};
const runtimeConfig = useRuntimeConfig();

const appConfig = useAppConfig();
// await navigateTo('/more/1', {
//   open: {
//     target: '_blank',
//     windowFeatures: {
//       width: 500,
//       height: 500
//     }
//   }
// })



// // 设置'external'参数为'true'，将成功重定向
// await navigateTo('https://nuxt.com', {
//   external: true
// })
// if (import.meta.server) {
//   console.log("Server side");
//     router.push("/details/1");
// } else {
//   // navigateTo("/more");
//   console.log("clihttps://nuxt.coment side");
// }
</script>

<style lang="scss" scoped>
.info {
  color: red;
}

p {
  color: $linkColor;
}
</style>
