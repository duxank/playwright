import { test, expect } from '../fixtures';

test('@p2 Invalid login to Selenium app', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.usernameInput.fill('selenium1');
  await loginPage.passwordInput.fill('Asd123');
  await loginPage.submitButton.click();
  await expect(loginPage.errorDiv).toBeVisible();
});

test('@p1 Valid login to Selenium app', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.usernameInput.fill('selenium');
  await loginPage.passwordInput.fill('Asd123');
  await loginPage.submitButton.click();
  await expect(loginPage.successMessage).toBeVisible();
});
