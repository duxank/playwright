import { test, expect } from '@playwright/test';

test('navigate to Tricentis sample app', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/');
  await expect(page).toHaveURL('https://sampleapp.tricentis.com/101/');
  await page.getByRole('link', { name: 'Automobile', exact: true }).click();
  const counterLocator = page.locator('#entervehicledata > span');
  await expect(counterLocator).toBeVisible();
  await expect(counterLocator).toHaveText('6');
  await page.locator('#make').selectOption({ label: 'Audi' });
  await page.locator('#enterinsurantdata').click();
  //   await page.locator('#make').selectOption({ label: 'Audi' });
});
