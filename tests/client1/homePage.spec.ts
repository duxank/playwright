import { test, expect } from '@playwright/test';

test.describe('Sorting tests', () => {
  test('Navigate to page', async ({ page }) => {
    await page.goto('https://www.universe.com/explore');
    // Add sorting logic here
    await page.getByRole('button', { name: 'Accept All' }).click();
    await page
      .locator("//div[@id='root']//input[@page='explore']")
      .fill('some text');
    await page.locator("//input[@placeholder='Location']").fill('New York');
    await page.locator("//button[contains(@class, 'searchButton-')]").click();
    await expect(
      page.locator("//h1[contains(@class, 'title-')]")
    ).toContainText('events in New York');
  });
});
