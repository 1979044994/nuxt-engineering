<template>
  <div class="title">参数</div>
  <div>query {{ route.query.id }} age{{ route.query.age }}</div>
  <div>params {{ route.params.id }} </div>
  <Button>Button</Button>
  <div class="one two" v-for="item in 10">
    这里是内容
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
</script>

<style lang="scss" scoped></style>
