<script setup lang="ts">
const counter = useCookie('counter')

counter.value = counter.value || Math.round(Math.random() * 1000)
</script>

<template>
  <div>
    <h1>Counter: {{ counter || '-' }}</h1>
    <Button @click="counter = null">reset</Button>
    <Button @click="counter--">-</Button>
    <Button @click="counter++">+</Button>
  </div>
</template>
