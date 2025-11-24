import { Page, Locator } from '@playwright/test';

export class VehicleHomePage {
  readonly title: Locator;
  readonly automobileLink: Locator;

  constructor(private page: Page) {
    this.title = this.page.locator('#app_sub_title');
    this.automobileLink = this.page
      .locator('.main-navigation')
      .locator('#nav_automobile');
  }

  async goto() {
    await this.page.goto('https://sampleapp.tricentis.com/101/');
  }
}
