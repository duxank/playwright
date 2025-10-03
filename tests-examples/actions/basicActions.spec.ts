import { test, expect } from '@playwright/test';

test('click action', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
});

test('enter text', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('some text');
});

test('clear text', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('some text');
  await page.getByRole('textbox', { name: 'username' }).clear();
});
