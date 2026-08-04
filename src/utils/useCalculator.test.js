import { describe, it, expect, beforeEach } from 'vitest'
import { useCalculator } from './useCalculator.js'

describe('useCalculator', () => {
  let calculator

  beforeEach(() => {
    calculator = useCalculator()
  })

  describe('inputDigit', () => {
    it('empieza mostrando "0"', () => {
      expect(calculator.display.value).toBe('0')
    })

    it('reemplaza el "0" inicial al pulsar un dígito', () => {
      calculator.inputDigit(5)
      expect(calculator.display.value).toBe('5')
    })

    it('concatena dígitos sucesivos', () => {
      calculator.inputDigit(1)
      calculator.inputDigit(2)
      calculator.inputDigit(3)
      expect(calculator.display.value).toBe('123')
    })
  })

  describe('inputDecimal', () => {
    it('añade un punto decimal', () => {
      calculator.inputDigit(5)
      calculator.inputDecimal()
      calculator.inputDigit(2)
      expect(calculator.display.value).toBe('5.2')
    })

    it('no permite añadir dos puntos decimales', () => {
      calculator.inputDigit(5)
      calculator.inputDecimal()
      calculator.inputDecimal()
      expect(calculator.display.value).toBe('5.')
    })

    it('empieza con "0." si se pulsa el punto sin dígitos previos', () => {
      calculator.inputDecimal()
      expect(calculator.display.value).toBe('0.')
    })
  })

  describe('operaciones básicas', () => {
    it('suma dos números correctamente', () => {
      calculator.inputDigit(5)
      calculator.setOperation('+')
      calculator.inputDigit(3)
      calculator.calculate()
      expect(calculator.display.value).toBe('8')
    })

    it('resta dos números correctamente', () => {
      calculator.inputDigit(9)
      calculator.setOperation('-')
      calculator.inputDigit(4)
      calculator.calculate()
      expect(calculator.display.value).toBe('5')
    })

    it('multiplica dos números correctamente', () => {
      calculator.inputDigit(6)
      calculator.setOperation('*')
      calculator.inputDigit(7)
      calculator.calculate()
      expect(calculator.display.value).toBe('42')
    })

    it('divide dos números correctamente', () => {
      calculator.inputDigit(8)
      calculator.setOperation('/')
      calculator.inputDigit(2)
      calculator.calculate()
      expect(calculator.display.value).toBe('4')
    })

    it('permite encadenar operaciones sin pulsar "="', () => {
      calculator.inputDigit(2)
      calculator.setOperation('+')
      calculator.inputDigit(3)
      calculator.setOperation('+')
      calculator.inputDigit(4)
      calculator.calculate()
      expect(calculator.display.value).toBe('9')
    })
  })

  describe('control de errores', () => {
    it('muestra "Error" al dividir entre cero', () => {
      calculator.inputDigit(5)
      calculator.setOperation('/')
      calculator.inputDigit(0)
      calculator.calculate()
      expect(calculator.display.value).toBe('Error')
      expect(calculator.error.value).toBe('No se puede dividir entre cero')
    })

    it('permite seguir operando tras un error al pulsar un nuevo dígito', () => {
      calculator.inputDigit(5)
      calculator.setOperation('/')
      calculator.inputDigit(0)
      calculator.calculate()
      calculator.inputDigit(7)
      expect(calculator.display.value).toBe('7')
      expect(calculator.error.value).toBe(null)
    })
  })

  describe('clear (CE)', () => {
    it('resetea el display a "0"', () => {
      calculator.inputDigit(9)
      calculator.inputDigit(9)
      calculator.clear()
      expect(calculator.display.value).toBe('0')
    })

    it('resetea el estado de operación pendiente', () => {
      calculator.inputDigit(5)
      calculator.setOperation('+')
      calculator.clear()
      calculator.inputDigit(3)
      calculator.setOperation('+')
      calculator.inputDigit(2)
      calculator.calculate()
      expect(calculator.display.value).toBe('5')
    })
  })

  describe('setDisplayValue (para MR)', () => {
    it('establece el valor del display directamente', () => {
      calculator.setDisplayValue(42)
      expect(calculator.display.value).toBe('42')
    })

    it('permite seguir escribiendo un número nuevo tras recuperarlo', () => {
      calculator.setDisplayValue(42)
      calculator.inputDigit(7)
      expect(calculator.display.value).toBe('7')
    })
  })
})