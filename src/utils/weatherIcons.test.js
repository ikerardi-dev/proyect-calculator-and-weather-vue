import { describe, it, expect } from 'vitest'
import { getWeatherIcon } from '../composables/weatherIcons.js'

describe('getWeatherIcon', () => {
  it('devuelve el icono de sol para "despejado" (11)', () => {
    expect(getWeatherIcon('11')).toBe('☀️')
  })

  it('devuelve el icono de poco nuboso (12)', () => {
    expect(getWeatherIcon('12')).toBe('🌤️')
  })

  it('quita la "n" de los códigos nocturnos y mapea igual', () => {
    expect(getWeatherIcon('12n')).toBe('🌤️')
    expect(getWeatherIcon('15n')).toBe('☁️')
  })

  it('devuelve el icono de tormenta para códigos de tormenta', () => {
    expect(getWeatherIcon('43')).toBe('⛈️')
    expect(getWeatherIcon('64')).toBe('⛈️')
  })

  it('devuelve un icono por defecto si el código no está mapeado', () => {
    expect(getWeatherIcon('999')).toBe('🌡️')
  })

  it('devuelve un icono por defecto si no se pasa id', () => {
    expect(getWeatherIcon(null)).toBe('🌡️')
    expect(getWeatherIcon(undefined)).toBe('🌡️')
  })
})