import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/seleniumApp/loginPage';
import { VehicleHomePage } from '../pages/vehicleInsurance/vehicleHomePage';

type Fixtures = {
  loginPage: LoginPage;
  vehicleHomePage: VehicleHomePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  vehicleHomePage: async ({ page }, use) => {
    const vehicleHomePage = new VehicleHomePage(page);
    await use(vehicleHomePage);
  },
});

export const expect = test.expect;
