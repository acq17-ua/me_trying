import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('https://www.notion.so/');
  });
  
test('test test', async ({ page }) => {
await expect(page).toHaveTitle(/Notion/);
});

test.describe('login page tests', () => {

	test.beforeEach(async ({ page }, testInfo) => {
		await page.getByRole('link', {name:/Try Notion free/}).first().click();
		await expect(page).toHaveTitle(/Sign up/);
	});

	test("try login dumbass", async({page}) => {

		// click continue w email before introducing one
		await page.getByRole('button', {name:/email/}).click();
		// expect error label to be displayed
		await expect(page.getByText(/Invalid/)).toBeVisible();
			
	});

	test("try login bad pw", async({page}) => {

		// fill in email
		await page.getByRole('textbox', {name:/email/}).fill('alba.carmonaq@gmail.com');
		// click continue w email
		await page.getByRole('button', {name:/email/}).click();
		// expect new textbox to appear and fill password
		await page.getByRole('textbox', {name:/Password/}).fill('ass');
		// click login
		await page.getByRole('button', {name:/password/}).click();	
		// expect error label to be displayed
		await expect(page.getByText(/Invalid/)).toBeVisible();
		
	});
