import { ref } from 'vue'
import { add, subtract, multiply, divide } from './mathOperations.js'

export function useCalculator() {
  const display = ref('0')
  const previousValue = ref(null)
  const operation = ref(null)
  const waitingForNewValue = ref(false)
  const error = ref(null)

  function inputDigit(digit) {
    if (error.value) {
      clear()
    }

    if (waitingForNewValue.value) {
      display.value = String(digit)
      waitingForNewValue.value = false
    } else {
      display.value = display.value === '0' ? String(digit) : display.value + digit
    }
  }

  function inputDecimal() {
    if (error.value) {
      clear()
    }

    if (waitingForNewValue.value) {
      display.value = '0.'
      waitingForNewValue.value = false
      return
    }

    if (!display.value.includes('.')) {
      display.value += '.'
    }
  }

  function setOperation(nextOperation) {
    if (error.value) return

    const inputValue = parseFloat(display.value)

    if (previousValue.value === null) {
      previousValue.value = inputValue
    } else if (operation.value && !waitingForNewValue.value) {
      const result = performCalculation()
      if (result === null) return
      display.value = String(result)
      previousValue.value = result
    }

    operation.value = nextOperation
    waitingForNewValue.value = true
  }

  function performCalculation() {
    const inputValue = parseFloat(display.value)
    const prev = previousValue.value

    try {
      switch (operation.value) {
        case '+':
          return add(prev, inputValue)
        case '-':
          return subtract(prev, inputValue)
        case '*':
          return multiply(prev, inputValue)
        case '/':
          return divide(prev, inputValue)
        default:
          return inputValue
      }
    } catch (err) {
      error.value = err.message
      display.value = 'Error'
      return null
    }
  }

  function calculate() {
    if (operation.value === null || previousValue.value === null) return

    const result = performCalculation()
    if (result === null) return

    display.value = String(result)
    previousValue.value = null
    operation.value = null
    waitingForNewValue.value = false
  }

  function clear() {
    display.value = '0'
    previousValue.value = null
    operation.value = null
    waitingForNewValue.value = false
    error.value = null
  }

  function setDisplayValue(value) {
    display.value = String(value)
    waitingForNewValue.value = true
  }

  return {
    display,
    previousValue,
    operation,
    error,
    inputDigit,
    inputDecimal,
    setOperation,
    calculate,
    clear,
    setDisplayValue,
  }
}