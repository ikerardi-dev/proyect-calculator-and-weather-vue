<template>
  <div>
    <h2 class="text-white font-semibold text-lg mb-3">Conversor de Divisas</h2>

    <div v-if="isLoading" class="text-slate-400 text-sm">
      Cargando tasas de cambio...
    </div>

    <div v-else-if="error" class="text-red-400 text-sm">
      {{ error }}
      <button
        type="button"
        @click="loadRates"
        class="underline ml-2"
      >
        Reintentar
      </button>
    </div>

    <div v-else class="space-y-3">
      <input
        v-model="amount"
        type="number"
        class="w-full bg-slate-700 text-white rounded-lg px-3 py-2"
        placeholder="Cantidad"
      />

      <div class="flex items-center gap-2">
        <CurrencySelector
          v-model="fromCurrency"
          :currencies="SUPPORTED_CURRENCIES"
        />
        <span class="text-white">→</span>
        <CurrencySelector
          v-model="toCurrency"
          :currencies="SUPPORTED_CURRENCIES"
        />
      </div>

      <p class="text-white text-xl font-mono">
        {{ convertedAmount !== null ? convertedAmount : '—' }}
        <span class="text-slate-400 text-sm">{{ toCurrency }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCurrency } from '../../composables/useCurrency.js'
import CurrencySelector from './CurrencySelector.vue'

const {
  rates,
  isLoading,
  error,
  amount,
  fromCurrency,
  toCurrency,
  convertedAmount,
  loadRates,
  SUPPORTED_CURRENCIES,
} = useCurrency()

onMounted(() => {
  loadRates()
})
</script>