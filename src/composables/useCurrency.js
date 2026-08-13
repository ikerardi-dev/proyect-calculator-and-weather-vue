import { ref, computed } from 'vue'
import { fetchExchangeRates } from '../services/currencyApi.js'

const SUPPORTED_CURRENCIES = ['EUR', 'USD', 'JPY']

export function useCurrency() {
  const rates = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const amount = ref(1)
  const fromCurrency = ref('EUR')
  const toCurrency = ref('USD')

  async function loadRates() {
    isLoading.value = true
    error.value = null

    try {
      rates.value = await fetchExchangeRates()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  const convertedAmount = computed(() => {
    if (!rates.value) return null

    const numericAmount = parseFloat(amount.value)
    if (isNaN(numericAmount)) return null

    // Las tasas vienen en base USD, así que primero pasamos a USD y luego a la divisa destino
    const rateFrom = fromCurrency.value === 'USD' ? 1 : parseFloat(rates.value[fromCurrency.value])
    const rateTo = toCurrency.value === 'USD' ? 1 : parseFloat(rates.value[toCurrency.value])

    if (!rateFrom || !rateTo) return null

    const amountInUsd = numericAmount / rateFrom
    const result = amountInUsd * rateTo

    return result.toFixed(4)
  })

  return {
    rates,
    isLoading,
    error,
    amount,
    fromCurrency,
    toCurrency,
    convertedAmount,
    loadRates,
    SUPPORTED_CURRENCIES,
  }
}