// loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
  }

  async goto() {
    await this.page.goto('https://duxank.github.io/Selenium/loginPage.html');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginError() {
    await expect(this.page.locator('#error')).toBeVisible();
  }
}

module.exports = LoginPage;
