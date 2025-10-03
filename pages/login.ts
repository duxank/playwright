class LoginPage {
  constructor(page) {
    this.page = page;
    this.automobile = page.getByLabel('Automobile');
  }

  async navigateToAutomobile() {
    await this.automobile.click();
  }
}

module.exports = LoginPage;
