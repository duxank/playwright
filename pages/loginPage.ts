import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://duxank.github.io/Selenium/loginPage.html');
  }

  async fillUsername(username: string) {
    await this.page.fill('input[name="username"]', username);
  }

  async fillPassword(password: string) {
    await this.page.fill('input[name="password"]', password);
  }

  async clickLogin() {
    await this.page.click('#submit');
  }

  async getErrorMessage() {
    return this.page.textContent("xpath=//div[@id='error']");
  }
}
