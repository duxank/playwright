import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

// This test navigates to the page and compares a screenshot to a stored reference image
// To use this, you must have a reference image in the __screenshots__ folder

test('image comparison for Selenium demo page', async ({ page }) => {
  // Percy visual snapshot

  await page.goto('https://duxank.github.io/Selenium/elementsPageCheckbox');
  // Uncheck the 'Married' checkbox using XPath if checked
  // const marriedCheckbox = page.locator('xpath=/html/body/div[3]/div/input[1]');
  // if (await marriedCheckbox.isChecked()) {
  //   await marriedCheckbox.click();
  // }

  // Take a screenshot and compare with the reference
  await expect(await page.screenshot()).toMatchSnapshot('selenium-demo.png', {
    maxDiffPixels: 1,
  });

  //   await page.context().close();
});
