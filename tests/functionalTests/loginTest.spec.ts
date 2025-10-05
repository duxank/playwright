import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Invalid login to Selenium app', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername('selenium1');
  await loginPage.fillPassword('Asd123');
  await loginPage.clickLogin();
  // Example assertion: check for error message or successful login
  await expect(page.locator("xpath=//div[@id='error']")).toBeVisible();
});
