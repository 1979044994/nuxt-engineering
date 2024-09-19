export const useMyGameStore = defineStore("useGameStore", () => {
  const state = ref<{ [key: string]: any }>({ name: 'game', score: 0 })
  const addScore = (score: number) => {
    state.value.score += score
  }
  const setName = (name: string) => {
    state.value.name = name
  }
  return { state, addScore, setName }
})
