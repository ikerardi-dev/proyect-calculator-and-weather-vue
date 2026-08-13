import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMemoryStore = defineStore('memory', () => {
  const value = ref(null)

  const hasValue = computed(() => value.value !== null)

  function setMemory(newValue) {
    value.value = newValue
  }

  function clearMemory() {
    value.value = null
  }

  return {
    value,
    hasValue,
    setMemory,
    clearMemory,
  }
})