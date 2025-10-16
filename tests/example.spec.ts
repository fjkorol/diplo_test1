import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await expect(page.locator('h1')).toContainText('Practice Form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Fernando');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Korol');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('fernandokorol@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('3764776655');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2000');
  await page.getByRole('option', { name: 'Choose Tuesday, October 24th,' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('test');
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address22222' }).fill('San Ignacio 445566');
  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Noida', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
  //await page.screenshot({ path: "resultado-test.png", fullPage: true });
  
});