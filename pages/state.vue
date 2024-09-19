<template>
  <div>
    <h2>用户信息</h2>
    <p>用户名：{{ username }}</p>
    <p>邮箱：{{ email }}</p>
    <Button @click="editUserInfo">编辑</Button>
    <div v-if="isEditing">
      <input v-model="newUsername" placeholder="新用户名" />
      <input v-model="newEmail" placeholder="新邮箱" />
      <Button @click="saveUserInfo">保存</Button>
    </div>
    <Button @click="handleIndex">前往index</Button>
    <Button @click="setStoreValue">setStore</Button>
    <Button @click="delStoreValue">delStore</Button>
  </div>
</template>

<script setup lang="ts">

// 初始状态
const username = useState('username', () => '初始用户名');
const email = useState('email', () => '初始邮箱');
const isEditing = useState('isEditing', () => false);
const isLogin = useLogin()
console.log(isLogin.value);

const store = useStore()
console.log(store.state);
const setStoreValue = () => {
  store.setState({ [username.value]: email.value })
  console.log(store.state);
}
const delStoreValue = () => {
  store.removeState(username.value)
  console.log(store.state);
}
const newUsername = ref('');
const newEmail = ref('');

const editUserInfo = () => {
  isEditing.value = true;
};
const handleIndex = () => {
  navigateTo("/");
}


const saveUserInfo = () => {
  username.value = newUsername.value;
  email.value = newEmail.value;
  isEditing.value = false;
};
</script>
<!-- <template>
  <div>
    <p>Count: {{ state.count }}</p>
    <button @click="incrementCount">Increment Count</button>
    <p>Another Count: {{ anotherState.anotherCount }}</p>
    <button @click="incrementAnotherCount">Increment Another Count</button>
  </div>
</template>

<script setup lang="ts">

const countKey = 'myCount';
const initCountValue = 0;
const state = useState(countKey, () => ({ count: initCountValue }));

const anotherCountKey = 'anotherMyCount';
const initAnotherCountValue = 5;
const anotherState = useState(anotherCountKey, () => ({ anotherCount: initAnotherCountValue }));

const incrementCount = () => {
  state.value.count++;
};

const incrementAnotherCount = () => {
  anotherState.value.anotherCount++;
};
</script> -->
<!-- <template>
  <div>
    <p>Value: {{ state }}</p>
    <button @click="updateValue">Update Value</button>
    <button @click="reloadValue">Reload Value</button>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app';

const key = 'myValueKey';
const initialValue = Math.random();
const state = useState(key, () => initialValue);

const updateValue = () => {
  state.value++;
};

const reloadValue = () => {
  const newState = useState(key, () => initialValue);
  console.log('Reloaded state value:', newState.value);
};
</script> -->
<!-- <template>
  <div>
    <p>随机数: {{ state }}</p>
    <p>随机数Ref:{{ stateRef }}</p>
  </div>
</template>

<script setup lang="ts">
const key = 'randomValueKey';
const getRandomValue = () => Math.random();
const state = useState(key, getRandomValue);
console.log('state', state.value);

const stateRef = ref(getRandomValue());
console.log('stateRef', stateRef.value);
// 在服务端渲染完成后，前端注水时再次获取状态
</script> -->
