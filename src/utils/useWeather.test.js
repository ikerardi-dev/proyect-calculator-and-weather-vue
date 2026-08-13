import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useWeather } from '../composables/useWeather.js'
import * as weatherApi from '../services/weatherApi.js'

const mockNationalResponse = {
  ciudades: [
    { name: 'Madrid', nameProvince: 'Madrid', stateSky: { description: 'Despejado', id: '11' }, temperatures: { max: '37', min: '24' } },
    { name: 'Oviedo', nameProvince: 'Asturias', stateSky: { description: 'Intervalos nubosos', id: '13' }, temperatures: { max: '27', min: '18' } },
  ],
}

const mockAsturiasResponse = {
  ciudades: [
    { name: 'Gijón', nameProvince: 'Asturias', stateSky: { description: 'Poco nuboso', id: '12' }, temperatures: { max: '25', min: '20' } },
    { name: 'Oviedo', nameProvince: 'Asturias', stateSky: { description: 'Intervalos nubosos', id: '13' }, temperatures: { max: '27', min: '18' } },
  ],
}

describe('useWeather', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('empieza en modo "nacional" sin datos cargados', () => {
    const { scope, cities, isLoading, error } = useWeather()
    expect(scope.value).toBe('nacional')
    expect(cities.value).toEqual([])
    expect(isLoading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  it('carga el tiempo nacional correctamente', async () => {
    vi.spyOn(weatherApi, 'fetchNationalWeather').mockResolvedValue(mockNationalResponse)

    const { loadWeather, cities, isLoading } = useWeather()
    await loadWeather()

    expect(cities.value).toHaveLength(2)
    expect(cities.value[0].name).toBe('Madrid')
    expect(isLoading.value).toBe(false)
  })

  it('carga el tiempo de Asturias al cambiar el scope', async () => {
    vi.spyOn(weatherApi, 'fetchProvinceWeather').mockResolvedValue(mockAsturiasResponse)

    const { setScope, cities, scope } = useWeather()
    await setScope('asturias')

    expect(scope.value).toBe('asturias')
    expect(cities.value).toHaveLength(2)
    expect(cities.value[0].name).toBe('Gijón')
  })

  it('llama a fetchProvinceWeather con el código de Asturias (33)', async () => {
    const spy = vi.spyOn(weatherApi, 'fetchProvinceWeather').mockResolvedValue(mockAsturiasResponse)

    const { setScope } = useWeather()
    await setScope('asturias')

    expect(spy).toHaveBeenCalledWith('33')
  })

  it('guarda un mensaje de error si la API falla', async () => {
    vi.spyOn(weatherApi, 'fetchNationalWeather').mockRejectedValue(
      new Error('No se pudo obtener el tiempo a nivel nacional')
    )

    const { loadWeather, error, cities } = useWeather()
    await loadWeather()

    expect(error.value).toBe('No se pudo obtener el tiempo a nivel nacional')
    expect(cities.value).toEqual([])
  })
})