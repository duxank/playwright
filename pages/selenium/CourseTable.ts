import { Page, Locator } from '@playwright/test';

export class CourseTable {
  readonly rows: Locator;
  readonly languageFilter: Locator;
  readonly levelCheckbox: (level: string) => Locator;
  readonly minEnrollmentsSelect: Locator;
  readonly sortBySelect: Locator;
  readonly resetButton: Locator;

  constructor(private page: Page) {
    this.rows = page.locator('table tbody tr');
    this.languageFilter = page.locator('select[name="language"]'); // adjust selector
    this.levelCheckbox = (level) =>
      page.locator(`input[type="checkbox"][value="${level}"]`);
    this.minEnrollmentsSelect = page.locator('select[name="min_enrollments"]');
    this.sortBySelect = page.locator('#sortBy');
    this.resetButton = page.locator('button', { hasText: 'Reset' });
  }

  // call this from an async test or helper to change the select value
  async selectSortBy(value: string) {
    await this.sortBySelect.selectOption(value);
  }
}
