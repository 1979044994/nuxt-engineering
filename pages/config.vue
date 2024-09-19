<template>
  <div>
    <div>{{ state.name }}</div>
    <div>
      {{ state.score }}
    </div>
    <Button @click="handleAddScore">add</Button>

    <div>{{ appConfig.appName }}</div>
    <Button @click="handleChangeNmae">修改name</Button>
  </div>
</template>

<script lang="ts" setup>
const { state } = useMyGameStore()
console.log(state);
const handleAddScore = () => {
  state.score += 1
}
const handleChangeNmae = () => {
  appConfig.appName = 'new name'
}
const appConfig = useAppConfig();
console.log('App Name:', appConfig.appName);
console.log('Theme Mode:', appConfig.themeMode);
console.log('Default Page Title:', appConfig.defaultPageTitle);
</script>

<style></style>
