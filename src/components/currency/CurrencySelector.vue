<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="bg-slate-700 text-white rounded-lg px-3 py-2 font-medium"
  >
    <option v-for="currency in currencies" :key="currency" :value="currency">
      {{ currencyLabels[currency] || currency }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
})

defineEmits(['update:modelValue'])

const currencyLabels = {
  EUR: 'Euro (€)',
  USD: 'Dólar ($)',
  JPY: 'Berries (฿)',
}
</script>