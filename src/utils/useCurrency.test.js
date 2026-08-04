import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useCurrency } from '../composables/useCurrency.js'
import * as currencyApi from '../services/currencyApi.js'

describe('useCurrency', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('empieza sin tasas cargadas', () => {
    const { rates, isLoading, error } = useCurrency()
    expect(rates.value).toBe(null)
    expect(isLoading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  it('carga las tasas correctamente', async () => {
    vi.spyOn(currencyApi, 'fetchExchangeRates').mockResolvedValue({
      EUR: '0.92',
      JPY: '149.50',
    })

    const { rates, loadRates, isLoading } = useCurrency()
    await loadRates()

    expect(rates.value).toEqual({ EUR: '0.92', JPY: '149.50' })
    expect(isLoading.value).toBe(false)
  })

  it('guarda un mensaje de error si la API falla', async () => {
    vi.spyOn(currencyApi, 'fetchExchangeRates').mockRejectedValue(
      new Error('No se pudieron obtener los tipos de cambio')
    )

    const { error, loadRates } = useCurrency()
    await loadRates()

    expect(error.value).toBe('No se pudieron obtener los tipos de cambio')
  })

  it('convierte correctamente de EUR a USD', async () => {
    vi.spyOn(currencyApi, 'fetchExchangeRates').mockResolvedValue({
      EUR: '0.92',
      JPY: '149.50',
    })

    const { loadRates, amount, fromCurrency, toCurrency, convertedAmount } = useCurrency()
    await loadRates()

    amount.value = 10
    fromCurrency.value = 'EUR'
    toCurrency.value = 'USD'

    // 10 EUR -> USD: 10 / 0.92 = 10.8696
    expect(convertedAmount.value).toBe('10.8696')
  })

  it('convierte correctamente de USD a JPY', async () => {
    vi.spyOn(currencyApi, 'fetchExchangeRates').mockResolvedValue({
      EUR: '0.92',
      JPY: '149.50',
    })

    const { loadRates, amount, fromCurrency, toCurrency, convertedAmount } = useCurrency()
    await loadRates()

    amount.value = 1
    fromCurrency.value = 'USD'
    toCurrency.value = 'JPY'

    expect(convertedAmount.value).toBe('149.5000')
  })

  it('devuelve null si las tasas no se han cargado', () => {
    const { convertedAmount } = useCurrency()
    expect(convertedAmount.value).toBe(null)
  })
})