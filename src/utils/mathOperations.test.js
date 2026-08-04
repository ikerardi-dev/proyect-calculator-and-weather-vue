import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '../composables/mathOperations.js'

describe('mathOperations', () => {
  describe('add', () => {
    it('suma dos números positivos correctamente', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('suma correctamente con números negativos', () => {
      expect(add(-2, 3)).toBe(1)
    })

    it('suma correctamente con decimales', () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8)
    })
  })

  describe('subtract', () => {
    it('resta dos números correctamente', () => {
      expect(subtract(5, 3)).toBe(2)
    })

    it('devuelve negativo si el resultado es menor que cero', () => {
      expect(subtract(3, 5)).toBe(-2)
    })
  })

  describe('multiply', () => {
    it('multiplica dos números correctamente', () => {
      expect(multiply(4, 3)).toBe(12)
    })

    it('multiplica por cero da cero', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('multiplica correctamente con negativos', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })

  describe('divide', () => {
    it('divide dos números correctamente', () => {
      expect(divide(10, 2)).toBe(5)
    })

    it('devuelve decimales cuando no es división exacta', () => {
      expect(divide(7, 2)).toBe(3.5)
    })

    it('lanza un error al dividir entre cero', () => {
      expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero')
    })
  })
})