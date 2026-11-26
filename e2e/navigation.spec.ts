import { expect, test } from '@playwright/test';

test('desktop navigation points to every portfolio section', async ({ page }) => {
  await page.goto('/');

  for (const section of ['home', 'about', 'projects', 'skills', 'experience', 'contact']) {
    await expect(page.locator(`.nav-options a[href="#${section}"]`)).toBeVisible();
    await expect(page.locator(`#${section}`)).toHaveCount(1);
  }
});

test('navbar active state follows the section reached by scrolling', async ({ page }) => {
  await page.goto('/');
  await page.locator('.nav-options a[href="#skills"]').click();

  await expect(page).toHaveURL(/#skills$/);
  await expect(page.locator('.nav-options li.active a[href="#skills"]')).toBeVisible();

  await page.evaluate(() => window.scrollBy(0, 400));
  await expect(page.locator('.nav-options li.active a[href="#skills"]')).toBeVisible();
});

test('mobile navigation opens, scrolls to a section, and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menuButton = page.getByRole('button', { name: 'Abrir menú' });
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  const projectsLink = page.locator('.nav-options a[href="#projects"]');
  await expect(projectsLink).toBeVisible();
  await projectsLink.click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator('#projects')).toBeInViewport();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('unknown top-level paths redirect to the home page', async ({ page }) => {
  await page.goto('/unknown-e2e-route');

  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
});
