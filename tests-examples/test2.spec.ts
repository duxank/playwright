import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/');
  await page.getByRole('link', { name: 'Automobile', exact: true }).click();
  await page.locator('#make').selectOption('Audi');
  await page.locator('#engineperformance').click();
  await page.locator('#engineperformance').fill('120');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('02/04/2022');
  await page.locator('#numberofseats').selectOption('5');
  await page.locator('#fuel').selectOption('Petrol');
  await page.locator('#listprice').click();
  await page.locator('#listprice').fill('25000');
  await page.locator('#annualmileage').click();
  await page.locator('#annualmileage').fill('25000');
  //   await page.getByRole('link', { name: 'Enter Vehicle Data' }).click({
  //     button: 'right',
  //   });
  await page.getByRole('link', { name: 'Enter Vehicle Data' }).click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.getByRole('button', { name: '« Prev' }).click();
  await expect(page.locator('#entervehicledata')).toContainText('0');
  await page.getByRole('button', { name: 'Next »' }).click();
});
