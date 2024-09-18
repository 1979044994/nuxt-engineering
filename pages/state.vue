<template>
  <div class="flex flex-col">
    <div class="mt-2"> {{ count }}</div>
    <div class="mt-2">{{ counterRef }}</div>
    <Button class="w-20" @click="handleAdd">+</Button>
    <Button class="w-20" @click="handleSub">-</Button>
  </div>
</template>

<script setup lang="ts">
let count = useState("counter", () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random() * 1000));
const handleAdd = () => {
  count.value++;
  counterRef.value++;
};
const handleSub = () => {
  count.value--;
  counterRef.value--;
};
</script>

<style lang="scss" scoped>
.asd {
  flex-direction: column;
}
</style>
