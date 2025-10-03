import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/');
  await page.getByRole('link', { name: 'Automobile', exact: true }).click();
});
