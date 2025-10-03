// @ts-check

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SELENIUM PRACTICE/);

  // Create a locator.
  const getStarted = page.getByRole('link', { name: 'Login' });

  // Click it.
  await getStarted.click();

  // Go back to Home
  await page.getByRole('link', { name: 'Home' }).click();

  const element = page.locator('xpath=/html/body/div[3]/h1');
  await expect(element).toContainText('Home Page');
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('click docs', async ({ page }) => {
    // Test2
    await page.getByRole('link', { name: 'Docs' }).click();
  });

  test('click installing', async ({ page }) => {
    // Test2
    await page.getByRole('link', { name: 'Installing' }).click();
  });
});
