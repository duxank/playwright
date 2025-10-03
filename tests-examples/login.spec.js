// login.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('./loginPage');

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('validUser', 'validPassword');
  // Add assertions for a successful login
});

test('unsuccessful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalidUser', 'invalidPassword');
  await loginPage.assertLoginError();
});
