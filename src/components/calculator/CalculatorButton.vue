<template>
  <button
    type="button"
    :class="buttonClasses"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  variant: {
    type: String,
    default: 'number', // 'number' | 'operator' | 'action' | 'equals'
  },
})

defineEmits(['click'])

const variantClasses = {
  number: 'bg-slate-700 hover:bg-slate-600 text-white',
  operator: 'bg-orange-500 hover:bg-orange-400 text-white',
  action: 'bg-slate-500 hover:bg-slate-400 text-white',
  equals: 'bg-green-600 hover:bg-green-500 text-white',
  memory: 'bg-blue-600 hover:bg-blue-500 text-white text-sm',
}

const buttonClasses = computed(() => {
  return [
    'rounded-lg font-semibold text-lg py-3 transition-colors active:scale-95',
    variantClasses[props.variant] || variantClasses.number,
  ]
})
</script>