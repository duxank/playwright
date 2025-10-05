import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

// This test navigates to the page and takes a Percy visual snapshot

test('imageVisual for Selenium demo page', async ({ page }) => {
  await page.goto('https://duxank.github.io/Selenium/elementsPageCheckbox');
  // Percy visual snapshot
  await percySnapshot(page, 'Selenium Demo Page Visual');
  //   await page.context().close();
});
