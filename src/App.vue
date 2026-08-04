<template>
  <div class="min-h-screen bg-slate-900 py-8">
    <div class="max-w-sm mx-auto">
      <CalculatorApp />
      <CurrencyConverter />
    </div>
  </div>
</template>

<script setup>
import CalculatorApp from './components/calculator/CalculatorApp.vue'
import CurrencyConverter from './components/currency/CurrencyConverter.vue'
</script>