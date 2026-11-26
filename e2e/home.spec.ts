import { expect, test } from '@playwright/test';

test('renders the current portfolio sections and profile summary', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Carlos Vilchez Malasquez | Ingeniero de Software');
  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
  await expect(page.getByRole('heading', { name: 'Desarrollador Full Stack Senior' })).toBeVisible();
  await expect(page.locator('#about')).toContainText('Soy Ingeniero de Software y Desarrollador Full Stack Senior');
  await expect(page.locator('#about')).toContainText('Soy muy curioso');
  await expect(page.locator('#projects h1')).toContainText('Mis');
  await expect(page.locator('#skills h1').first()).toContainText('Habilidades');
  await expect(page.locator('#experience')).toContainText('Globant');
  await expect(page.locator('#contact h1')).toContainText('contactarme');
});

test('switches language and keeps it after a reload', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Cambiar idioma a inglés' }).click();

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#home h1').first()).toHaveText('Welcome to my');
  await expect(page.getByRole('button', { name: 'Switch language to Spanish' })).toBeVisible();

  await page.reload();

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#home h1').first()).toHaveText('Welcome to my');
  await expect(page.getByRole('button', { name: 'Switch language to Spanish' })).toBeVisible();
});
