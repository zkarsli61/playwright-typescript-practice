import { test, expect } from '@playwright/test';

test('crypto analysis', async ({ page }) => {
  await page.goto('https://www.tradingview.com/crypto-coins-screener/')

  await test.step('Filter coins', async () => {

    await page.locator('.addFilterButton-RMcYwJOr').click();
    await page.getByPlaceholder('Type filter name').click();
    await page.getByPlaceholder('Type filter name').fill('bol');
    await page.locator('div').filter({ hasText: /^Bollinger Bands$/ }).first().click();
    await page.getByRole('button', { name: 'Upper' }).click();
    await page.getByText('Basis').click();
    await page.getByRole('button', { name: 'Add filter' }).click();

  })
})