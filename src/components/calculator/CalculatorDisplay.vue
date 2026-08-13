<template>
  <div class="bg-slate-800 rounded-lg p-4 mb-4">
    <p
      class="text-right text-3xl font-mono text-white truncate"
      :class="{ 'text-red-400': isError }"
      data-testid="calculator-display"
    >
      {{ value }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  isError: {
    type: Boolean,
    default: false,
  },
})
</script>