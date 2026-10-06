import { expect, test } from '@playwright/test';

test('opens a project from the home page and navigates to the next project', async ({ page }) => {
  await page.goto('/');

  const dsgDetails = page.locator(
    '#projects app-custom-carousel a[aria-label="Ver detalle del proyecto"][href="/works/dsg"]:visible',
  ).first();
  await dsgDetails.click();

  await expect(page).toHaveURL(/\/works\/dsg$/);
  await expect(page.locator('.work-container h1')).toHaveText('Web Checkout - List & Services UI');
  await expect(page.locator('.work-container .wordmark')).toHaveText("Dick's Sporting Goods");

  await page.locator('footer.pager a[href="/works/jm-family"]').click();

  await expect(page).toHaveURL(/\/works\/jm-family$/);
  await expect(page.locator('.work-container h1')).toHaveText('Gyde Project - Insight Project');
});

test('shows not-found for an unknown project and returns home', async ({ page }) => {
  await page.goto('/works/unknown-e2e-project');

  await expect(page.locator('.error-code')).toHaveText('404');
  await expect(page.getByRole('heading', { name: 'Proyecto no encontrado' })).toBeVisible();
  await page.locator('.action-button').click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
});
