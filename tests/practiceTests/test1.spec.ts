import { test, expect } from '../fixtures';

test('@p2 Valid login to Selenium app', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.usernameInput.fill('selenium');
  await loginPage.passwordInput.fill('Asd123');
  await loginPage.submitButton.click();
  //   await expect(loginPage.errorDiv).toBeVisible();
  await expect(loginPage.successMessage).toBeVisible();
  await page.getByRole('button', { name: /Elements/ }).click();
  await page.getByRole('link', { name: 'Checkbox' }).click();
  await expect(page.getByRole('checkbox', { name: 'One' })).toBeChecked();

  // Verify checkbox "One" is checked
  const checkboxOne = page.getByRole('checkbox', { name: 'One' });
  await expect(checkboxOne).toBeChecked();
});
