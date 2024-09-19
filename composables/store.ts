export const useStore = defineStore("userStore", () => {
  const state = ref<{ [key: string]: any }>({ token: '123' })


  const setState = (newState: any) => {
    state.value = { ...state.value, ...newState };
  };
  const removeState = (key: string) => {
    delete state.value[key];
  }


  return { state, setState, removeState }

}, {
  persist: {
    storage: piniaPluginPersistedstate.cookies()
  }
});
