<template>
  <div class="flex gap-2 mb-3">
    <button
      type="button"
      class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
      :class="modelValue === 'nacional'
        ? 'bg-blue-600 text-white'
        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
      @click="$emit('update:modelValue', 'nacional')"
    >
      Nacional
    </button>
    <button
      type="button"
      class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
      :class="modelValue === 'asturias'
        ? 'bg-blue-600 text-white'
        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'"
      @click="$emit('update:modelValue', 'asturias')"
    >
      Asturias
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>