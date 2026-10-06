import { expect, test } from '@playwright/test';

test('mobile navigation opens, scrolls to a section, and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menuButton = page.getByRole('button', { name: 'Abrir menú' });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  const projectsLink = page.locator('.nav-options a[href="#projects"]');
  await expect(projectsLink).toBeVisible();
  await projectsLink.click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator('#projects')).toBeInViewport();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('unknown paths redirect to the home page', async ({ page }) => {
  await page.goto('/unknown-e2e-route');

  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
});
