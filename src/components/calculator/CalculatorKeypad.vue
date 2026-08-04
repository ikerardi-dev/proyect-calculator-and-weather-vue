<template>
  <div class="grid grid-cols-4 gap-2">
    <CalculatorButton label="CE" variant="action" @click="$emit('clear')" />
    <CalculatorButton label="M+" variant="memory" @click="$emit('memory-add')" />
    <CalculatorButton label="MR" variant="memory" @click="$emit('memory-recall')" />
    <CalculatorButton label="MC" variant="memory" @click="$emit('memory-clear')" />

    <CalculatorButton label="7" @click="$emit('digit', 7)" />
    <CalculatorButton label="8" @click="$emit('digit', 8)" />
    <CalculatorButton label="9" @click="$emit('digit', 9)" />
    <CalculatorButton label="÷" variant="operator" @click="$emit('operation', '/')" />

    <CalculatorButton label="4" @click="$emit('digit', 4)" />
    <CalculatorButton label="5" @click="$emit('digit', 5)" />
    <CalculatorButton label="6" @click="$emit('digit', 6)" />
    <CalculatorButton label="×" variant="operator" @click="$emit('operation', '*')" />

    <CalculatorButton label="1" @click="$emit('digit', 1)" />
    <CalculatorButton label="2" @click="$emit('digit', 2)" />
    <CalculatorButton label="3" @click="$emit('digit', 3)" />
    <CalculatorButton label="−" variant="operator" @click="$emit('operation', '-')" />

    <CalculatorButton label="0" @click="$emit('digit', 0)" />
    <CalculatorButton label="." @click="$emit('decimal')" />
    <CalculatorButton label="=" variant="equals" @click="$emit('equals')" />
    <CalculatorButton label="+" variant="operator" @click="$emit('operation', '+')" />
  </div>
</template>

<script setup>
import CalculatorButton from './CalculatorButton.vue'

defineEmits([
  'digit',
  'decimal',
  'operation',
  'equals',
  'clear',
  'memory-add',
  'memory-recall',
  'memory-clear',
])
</script>