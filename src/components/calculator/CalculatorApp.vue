<template>
  <div class="max-w-sm mx-auto p-4">
    <CalculatorDisplay
      :value="display"
      :is-error="!!error"
    />
    <CalculatorKeypad
      @digit="inputDigit"
      @decimal="inputDecimal"
      @operation="setOperation"
      @equals="calculate"
      @clear="clear"
      @memory-add="handleMemoryAdd"
      @memory-recall="handleMemoryRecall"
      @memory-clear="handleMemoryClear"
    />
  </div>
</template>

<script setup>
import { useCalculator } from '../../composables/useCalculator.js'
import { useMemoryStore } from '../../stores/memory.js'
import CalculatorDisplay from './CalculatorDisplay.vue'
import CalculatorKeypad from './CalculatorKeypad.vue'

const {
  display,
  error,
  inputDigit,
  inputDecimal,
  setOperation,
  calculate,
  clear,
  setDisplayValue,
} = useCalculator()

const memoryStore = useMemoryStore()

function handleMemoryAdd() {
  memoryStore.setMemory(parseFloat(display.value))
}

function handleMemoryRecall() {
  if (memoryStore.hasValue) {
    setDisplayValue(memoryStore.value)
  }
}

function handleMemoryClear() {
  memoryStore.clearMemory()
}
</script>