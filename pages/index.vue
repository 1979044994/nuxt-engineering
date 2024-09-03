<template>
  <div class="flex flex-col">
    <div>index</div>
    <nuxt-link to="/details/2">details</nuxt-link>

    <nuxt-link to="/content?id=2&age=18">content</nuxt-link>
    <div @click="handleRouterPush" class="info">test</div>
    <p>2222222</p>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const handleRouterPush = () => {
  router.push("/details/1");
};
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
console.log(runtimeConfig.public.apiBase, "apiBase");

if (import.meta.server) {
  console.log("Server side");
} else {
  console.log("client side");
}
</script>

<style lang="scss" scoped>
.info {
  color: red;
}

p {
  color: $linkColor;
}
</style>
