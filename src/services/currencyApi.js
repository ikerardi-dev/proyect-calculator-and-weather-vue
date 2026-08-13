import axios from 'axios'

const BASE_URL = 'https://api.currencyfreaks.com/v2.0/rates/latest'
const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY

export async function fetchExchangeRates() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
      },
    })
    return response.data.rates
  } catch (error) {
    throw new Error('No se pudieron obtener los tipos de cambio')
  }
}