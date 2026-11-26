import { expect, test } from '@playwright/test';
import { workIds } from './work-ids';

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
  const sitemapXml = await sitemap.text();
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
  expect(sitemapUrls).toContain('https://carlosvmpe.github.io/');

  for (const workId of workIds) {
    expect(sitemapUrls).toContain(`https://carlosvmpe.github.io/works/${workId}`);
  }

  expect(new Set(sitemapUrls).size).toBe(sitemapUrls.length);

  const socialImage = await page.request.get('/assets/og-portfolio.png');
  expect(socialImage.ok()).toBe(true);
  expect(socialImage.headers()['content-type']).toContain('image/png');
});
