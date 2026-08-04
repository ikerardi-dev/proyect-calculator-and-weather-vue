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

// Los de memoria los dejamos preparados de momento, sin Pinia todavía
function handleMemoryAdd() {
  console.log('memory add:', display.value)
}

function handleMemoryRecall() {
  console.log('memory recall')
}

function handleMemoryClear() {
  console.log('memory clear')
}
</script>