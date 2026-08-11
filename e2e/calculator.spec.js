import { test, expect } from '@playwright/test'

test.describe('Calculadora', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('realiza una suma correctamente', async ({ page }) => {
    const display = page.getByTestId('calculator-display')

    await page.getByRole('button', { name: '5', exact: true }).click()
    await page.getByRole('button', { name: '+', exact: true }).click()
    await page.getByRole('button', { name: '3', exact: true }).click()
    await page.getByRole('button', { name: '=', exact: true }).click()

    await expect(display).toHaveText('8')
  })

  test('muestra error al dividir entre cero', async ({ page }) => {
    const display = page.getByTestId('calculator-display')

    await page.getByRole('button', { name: '5', exact: true }).click()
    await page.getByRole('button', { name: '÷', exact: true }).click()
    await page.getByRole('button', { name: '0', exact: true }).click()
    await page.getByRole('button', { name: '=', exact: true }).click()

    await expect(display).toHaveText('Error')
  })

  test('CE resetea el display a 0', async ({ page }) => {
    const display = page.getByTestId('calculator-display')

    await page.getByRole('button', { name: '9', exact: true }).click()
    await page.getByRole('button', { name: '9', exact: true }).click()
    await page.getByRole('button', { name: 'CE', exact: true }).click()

    await expect(display).toHaveText('0')
  })
})