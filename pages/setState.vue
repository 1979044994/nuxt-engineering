<template>
  <div class="flex flex-col">
    <div class="mt-2"> {{ count }}</div>
    <div class="mt-2">{{ counterRef }}</div>
    <Button class="w-20" @click="handleAdd">+</Button>
    <Button class="w-20" @click="handleSub">-</Button>
    <Button class="w-20" @click="handleSetCookie">setCookie</Button>
    <NuxtImg
      src="https://th.bing.com/th/id/R.3a726f5a99f225ff9d68873fb34313a6?rik=zExOLZryHfAw%2fQ&riu=http%3a%2f%2fi4.qhimg.com%2ft01cd21b2f34cd0c064.jpg&ehk=QBMDD4KlTaI4Zz8v7Tr6g6kB3JZuPI653%2bMGDSL74UQ%3d&risl=&pid=ImgRaw&r=0" />
    <img src="~/assets/image/test.jpeg" alt="">
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
const test = useCookie('test', {
  default: () => (0),
  watch: true
})
const handleSetCookie = () => {
  console.log(test.value)
  test.value++;

}
</script>

<style lang="scss" scoped>
.asd {
  flex-direction: column;
}
</style>
