import { expect, test } from '@playwright/test';

test('publishes crawlable metadata, sitemap, and social preview assets', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Carlos Vilchez Malasquez | Ingeniero de Software');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /Portafolio de Carlos Vilchez Malasquez/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://carlosvmpe.github.io/',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://carlosvmpe.github.io/assets/og-portfolio.png',
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    'content',
    'summary_large_image',
  );

  const robots = await page.request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain('Sitemap: https://carlosvmpe.github.io/sitemap.xml');

  const sitemap = await page.request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain('https://carlosvmpe.github.io/works/dsg');

  const socialImage = await page.request.get('/assets/og-portfolio.png');
  expect(socialImage.ok()).toBe(true);
  expect(socialImage.headers()['content-type']).toContain('image/png');
});
