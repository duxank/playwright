import { test, expect } from '@playwright/test';

test('submit', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.fill('#username', 'myusername'); // Fill input
  await page.fill('#password', 'mypassword'); // Fill password
  await page.click('button[type="button"]'); // Click submit button
});

test('get text from element', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  const title = await page.textContent('h1'); // Extract text from an element
  console.log(`Page title: ${title}`);
});

test('dropdowns', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');
  await page.getByRole('button', { name: 'Elements', exact: true }).click();
  await page.getByRole('link', { name: 'Dropdown', exact: true }).click();
  await page.selectOption('#mySelect', 'Set to 50%'); // Select option by value
});
