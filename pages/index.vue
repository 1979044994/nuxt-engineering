<template>
  <div class="flex flex-col">
    <div>index</div>
    <nuxt-link to="/details/2">details</nuxt-link>
    <nuxt-link to="/content?id=2">content</nuxt-link>
    <div @click="handleRouter" class="info">test</div>
    <p>2222222</p>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const handleRouter = () => {
  router.push('/content')
}
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

if (import.meta.server) {
  console.log('Server side')
} else {
  console.log('client side')
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
