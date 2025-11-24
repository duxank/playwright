import { test, expect } from '../fixtures';

// test.use({ launchOptions: { slowMo: 100 } }); // slow down only for this file

test('Navigate to Vehicle insurance', async ({ vehicleHomePage }) => {
  await vehicleHomePage.goto();
  await expect(vehicleHomePage.title).toBeVisible();
  await vehicleHomePage.automobileLink.click();

  //   await loginPage.passwordInput.fill('Asd123');
  //   await expect(loginPage.errorDiv).toBeVisible();
});
