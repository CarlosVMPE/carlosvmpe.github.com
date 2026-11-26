import { expect, test } from '@playwright/test';
import { workIds } from './work-ids';

test('project cards identify the internal and external actions', async ({ page }) => {
  await page.goto('/#projects');

  const carousel = page.locator('#projects app-custom-carousel');
  const firstCurrentSlide = carousel.locator('.carousel__slide:not([inert])').first();
  const projectLink = firstCurrentSlide.locator('a.project-action--primary');
  const websiteLink = firstCurrentSlide.locator('a.project-action--secondary');

  await expect(projectLink).toHaveText('Ver proyecto');
  await expect(projectLink).toHaveAttribute('href', '/works/dsg');
  await expect(websiteLink).toHaveText('Sitio web');
  await expect(websiteLink).toHaveAttribute('target', '_blank');
  await expect(websiteLink).toHaveAttribute('rel', /noopener/);
  await expect(websiteLink).toHaveAttribute('href', 'https://www.dickssportinggoods.com/');
});

test('previous carousel navigation keeps a visible cloned project link interactive', async ({ page }) => {
  await page.goto('/#projects');

  const carousel = page.locator('#projects app-custom-carousel');
  await carousel.getByRole('button', { name: 'Anterior' }).click();

  // Once the loop settles at the last project, its following slides are visible clones.
  const dsgCloneLink = carousel.locator('a[href="/works/dsg"]').last();
  await expect.poll(() =>
    dsgCloneLink.evaluate((link) => link.closest('.carousel__slide')?.hasAttribute('inert')),
  ).toBe(false);
  await dsgCloneLink.click();

  await expect(page).toHaveURL(/\/works\/dsg$/);
  await expect(page.locator('.work-container h1')).toHaveText('Web Checkout - List & Services UI');
});

test('DSG detail shows first-person project sections and supports next and previous navigation', async ({ page }) => {
  await page.goto('/works/dsg');

  await expect(page.locator('.work-container .wordmark')).toHaveText("Dick's Sporting Goods");
  await expect(page.locator('.work-container h1')).toHaveText('Web Checkout - List & Services UI');
  await expect(page.locator('.work-sections .work-section')).toHaveCount(3);
  await expect(page.locator('.work-sections')).toContainText('Desarrollé funcionalidades para Checkout, Account, Cart, List y Services.');
  await expect(page.locator('.work-sections')).toContainText('Desarrollé APIs REST con NestJS y Clean Architecture.');
  await expect(page.locator('.work-sections')).toContainText('Implementé pruebas con Vitest y Playwright');
  await expect(page.locator('.work-container app-custom-carousel img').first()).toBeVisible();

  await page.locator('footer.pager a[href="/works/jm-family"]').click();
  await expect(page).toHaveURL(/\/works\/jm-family$/);
  await expect(page.locator('.work-container h1')).toHaveText('Gyde Project - Insight Project');

  await page.locator('footer.pager a[href="/works/dsg"]').click();
  await expect(page).toHaveURL(/\/works\/dsg$/);
});

test('Valquiria is ordered after Movistar and before Taxi Lima', async ({ page }) => {
  await page.goto('/works/valquiria');

  await expect(page.locator('.work-container .wordmark')).toHaveText('Valquiria Joyería y Platería');
  await expect(page.locator('footer.pager a[href="/works/movistar"]')).toBeVisible();
  await expect(page.locator('footer.pager a[href="/works/taxi-lima"]')).toBeVisible();

  await page.locator('footer.pager a[href="/works/taxi-lima"]').click();
  await expect(page).toHaveURL(/\/works\/taxi-lima$/);
  await expect(page.locator('footer.pager a[href="/works/valquiria"]')).toBeVisible();
});

test('all current work routes render their project detail', async ({ page }) => {
  for (const id of workIds) {
    await page.goto(`/works/${id}`);

    await expect(page.locator('.work-container')).toBeVisible();
    await expect(page.locator('.work-container h1')).not.toBeEmpty();
    await expect(page.locator('.work-container .wordmark')).not.toBeEmpty();
    await expect(page.locator('.work-sections .work-section').first()).toBeVisible();
  }
});

test('unknown project ids show a not-found page with a home action', async ({ page }) => {
  await page.goto('/works/unknown-e2e-project');

  await expect(page.locator('.error-code')).toHaveText('404');
  await expect(page.getByRole('heading', { name: 'Proyecto no encontrado' })).toBeVisible();
  await page.getByRole('link', { name: 'Volver al inicio' }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('#home h1').first()).toHaveText('Bienvenido a mi');
});

test('project details use English after switching the portfolio language', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Cambiar idioma a inglés' }).click();
  await page.goto('/works/dsg');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.work-sections h2').first()).toHaveText('Frontend');
  await expect(page.locator('.work-sections')).toContainText('I developed features for Checkout, Account, Cart, List, and Services.');
});
