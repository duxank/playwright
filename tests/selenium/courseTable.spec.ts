import { test, expect } from '@playwright/test';
import { CourseTable } from '../../pages/selenium/CourseTable';

test.describe('Sorting tests', () => {
  let courseTable: CourseTable;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    courseTable = new CourseTable(page);
  });
  test('Sort by course name', async () => {
    await courseTable.selectSortBy('col_course');
  });
});
