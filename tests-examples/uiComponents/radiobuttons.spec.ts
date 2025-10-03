import { test, expect } from '@playwright/test';

test('select checkbox action', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('button', { name: 'Elements', exact: true }).click();
  await page.getByRole('link', { name: 'Checkbox', exact: true }).click();
  await page.locator('input:nth-child(6)').check();
  await page.locator('input:nth-child(6)').uncheck();
});

test('unselect checkbox action', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('button', { name: 'Elements', exact: true }).click();
  await page.getByRole('link', { name: 'Checkbox', exact: true }).click();
  await page.locator('input').first().uncheck();
});
