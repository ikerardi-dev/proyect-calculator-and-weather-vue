<template>
  <div class="bg-slate-800 rounded-lg p-4 mt-6">
    <h2 class="text-white font-semibold text-lg mb-3">El Tiempo</h2>

    <WeatherLocationSelector
      :model-value="scope"
      @update:model-value="setScope"
    />

    <div v-if="isLoading" class="text-slate-400 text-sm">
      Cargando el tiempo...
    </div>

    <div v-else-if="error" class="text-red-400 text-sm">
      {{ error }}
      <button
        type="button"
        @click="loadWeather"
        class="underline ml-2"
      >
        Reintentar
      </button>
    </div>

    <ul v-else class="space-y-2 max-h-80 overflow-y-auto">
      <li
        v-for="city in cities"
        :key="city.name"
        class="flex items-start justify-between bg-slate-700 rounded-lg px-3 py-2"
      >
        <div class="flex items-start gap-2">
          <WeatherIcon
            :state-sky-id="city.stateSky?.id"
            :description="city.stateSky?.description"
          />
          <div style="text-align: start;">
            <p class="text-white font-medium">{{ city.name }}</p>
            <p class="text-slate-400 text-xs">{{ city.stateSky?.description }}</p>
          </div>
        </div>
        <p class="text-white text-sm font-mono">
          {{ city.temperatures?.max }}° / {{ city.temperatures?.min }}°
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWeather } from '../../composables/useWeather.js'
import WeatherLocationSelector from './WeatherLocationSelector.vue'
import WeatherIcon from './WeatherIcon.vue'

const { scope, cities, isLoading, error, loadWeather, setScope } = useWeather()

onMounted(() => {
  loadWeather()
})
</script>