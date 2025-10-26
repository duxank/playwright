import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorDiv: Locator;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('input[name="username"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.submitButton = this.page.locator('#submit');
    this.errorDiv = this.page.locator("xpath=//div[@id='error']");
  }

  async goto() {
    await this.page.goto('https://duxank.github.io/Selenium/loginPage.html');
  }
}
