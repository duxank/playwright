import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

// This test navigates to the page and takes a Percy visual snapshot

test('imagePercy for Selenium demo page', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/elementsPageCheckbox');
  // Percy visual snapshot
  await percySnapshot(page, 'Selenium Demo Page Percy');
  //   await page.context().close();
});
