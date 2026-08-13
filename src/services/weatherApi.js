import axios from 'axios'

const BASE_URL = 'https://api.el-tiempo.net/json/v3'

export async function fetchNationalWeather() {
  try {
    const response = await axios.get(`${BASE_URL}/general`)
    return response.data
  } catch (error) {
    throw new Error('No se pudo obtener el tiempo a nivel nacional')
  }
}

export async function fetchProvinceWeather(codProv) {
  try {
    const response = await axios.get(`${BASE_URL}/provincias/${codProv}`)
    return response.data
  } catch (error) {
    throw new Error('No se pudo obtener el tiempo de la provincia')
  }
}