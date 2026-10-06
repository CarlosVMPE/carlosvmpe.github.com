import { expect, test } from '@playwright/test';

test('loads the home page and switches language', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
  await expect(page.getByRole('button', { name: 'Cambiar idioma a inglés' })).toBeVisible();

  await page.getByRole('button', { name: 'Cambiar idioma a inglés' }).click();

  await expect(page.locator('#home h1').first()).toHaveText('Welcome to my');
  await expect(page.getByRole('button', { name: 'Switch language to Spanish' })).toBeVisible();

  await page.reload();

  await expect(page.locator('#home h1').first()).toHaveText('Welcome to my');
  await expect(page.getByRole('button', { name: 'Switch language to Spanish' })).toBeVisible();
});
