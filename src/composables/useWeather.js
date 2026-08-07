import { ref, computed } from 'vue'
import { fetchNationalWeather, fetchProvinceWeather } from '../services/weatherApi.js'

const ASTURIAS_COD_PROV = '33'

export function useWeather() {
  const scope = ref('nacional') // 'nacional' | 'asturias'
  const rawData = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const cities = computed(() => {
    if (!rawData.value) return []
    return rawData.value.ciudades || []
  })

  async function loadWeather() {
    isLoading.value = true
    error.value = null

    try {
      if (scope.value === 'nacional') {
        rawData.value = await fetchNationalWeather()
      } else {
        rawData.value = await fetchProvinceWeather(ASTURIAS_COD_PROV)
      }
    } catch (err) {
      error.value = err.message
      rawData.value = null
    } finally {
      isLoading.value = false
    }
  }

  function setScope(newScope) {
    scope.value = newScope
    loadWeather()
  }

  return {
    scope,
    cities,
    isLoading,
    error,
    loadWeather,
    setScope,
  }
}