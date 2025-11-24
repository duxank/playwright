import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/selenium/loginPage';
import { VehicleHomePage } from '../pages/vehicleInsurance/vehicleHomePage';
import { CourseTable } from '../pages/selenium/CourseTable';

type Fixtures = {
  loginPage: LoginPage;
  vehicleHomePage: VehicleHomePage;
  courseTable: CourseTable;
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
  courseTable: async ({ page }, use) => {
    const courseTable = new CourseTable(page);
    await use(courseTable);
  },
});

export const expect = test.expect;
