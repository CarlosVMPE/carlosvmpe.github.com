import { expect, test } from '@playwright/test';

test('technical skills show the current full-stack tool groups', async ({ page }) => {
  await page.goto('/#skills');

  const skills = page.locator('#skills');
  await expect(skills.locator('.skill-group')).toHaveCount(8);

  for (const name of [
    'Angular',
    'Blazor',
    'PostgreSQL',
    'Playwright',
    'AWS',
    'GitHub',
    'C++',
    'OpenAI Codex',
  ]) {
    await expect(skills.getByText(name, { exact: true }).first()).toBeAttached();
  }

  const localSkillIcons = await skills.locator('img[src^="assets/skills/"]').count();
  expect(localSkillIcons).toBeGreaterThan(40);
});

test('experience entries expand to show project responsibilities', async ({ page }) => {
  await page.goto('/#experience');

  const dsgToggle = page.locator('#collapse-0-0-toggle');
  const jmFamilyToggle = page.locator('#collapse-0-1-toggle');
  const dsgDetails = page.locator('#experience .collapse-content').nth(0);
  const jmFamilyDetails = page.locator('#experience .collapse-content').nth(1);

  await expect(dsgToggle).toBeChecked();
  await expect(dsgDetails).toContainText('migración de Angular 21 a Angular 22');
  await expect(jmFamilyToggle).not.toBeChecked();
  await jmFamilyToggle.check();
  await expect(jmFamilyDetails).toContainText('Blazor y MudBlazor');
});

test('contact section exposes working professional and email links', async ({ page }) => {
  await page.goto('/#contact');

  const contact = page.locator('#contact');
  await expect(contact.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/carlos-vilchez-malasquez-0a7b97129/',
  );
  await expect(contact.getByRole('link', { name: 'carlosvmp0@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:carlosvmp0@gmail.com',
  );
  await expect(contact.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/CarlosVMPE',
  );
});
