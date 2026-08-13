<template>
  <div class="min-h-screen bg-slate-900 py-8">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CalculatorApp />
      <CurrencyConverter />
      <WeatherWidget />
    </div>
  </div>
</template>

<script setup>
import CalculatorApp from './components/calculator/CalculatorApp.vue'
import CurrencyConverter from './components/currency/CurrencyConverter.vue'
import WeatherWidget from './components/weather/WeatherWidget.vue'
</script>