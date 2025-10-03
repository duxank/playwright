import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomv');
  await page.goto(
    'https://www.google.com/search?q=vehicle+insurance+tosca&oq=vehicle+insurance+tosca&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyNjM4ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8'
  );
  await page
    .getByRole('link', {
      name: 'Scan the demo application Tricentis https://documentation.tricentis.com ›',
    })
    .click({
      button: 'middle',
    });
  await page1
    .getByRole('link', { name: 'Tricentis Tosca First Steps' })
    .click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Click here to open it.' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: 'Automobile', exact: true }).click();
  await page2.locator('#make').selectOption('Audi');
  await expect(
    page2.getByRole('link', { name: 'Enter Vehicle Data' })
  ).toBeVisible();
});
