import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ENGLISH_EXPERIENCES } from '@shared/mocks/translations';
import { allExperiences } from '@shared/models/experience';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let originalDocumentLanguage: string;

  beforeEach(() => {
    localStorage.clear();
    originalDocumentLanguage = document.documentElement.lang;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    localStorage.clear();
    document.documentElement.lang = originalDocumentLanguage;
  });

  it('initializes from stored English and updates experience translations', () => {
    localStorage.setItem('portfolio-language', 'en');
    const service = TestBed.inject(LanguageService);

    expect(service.current()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(service.experiences()).toBe(ENGLISH_EXPERIENCES);
  });

  it('defaults to Spanish for a missing or unsupported stored language', () => {
    localStorage.setItem('portfolio-language', 'fr');
    const service = TestBed.inject(LanguageService);

    expect(service.current()).toBe('es');
    expect(service.experiences()).toBe(allExperiences);
  });

  it('toggles from Spanish to English and back to Spanish', () => {
    const service = TestBed.inject(LanguageService);

    service.toggle();
    expect(service.current()).toBe('en');
    expect(localStorage.getItem('portfolio-language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');

    service.toggle();
    expect(service.current()).toBe('es');
    expect(localStorage.getItem('portfolio-language')).toBe('es');
    expect(document.documentElement.lang).toBe('es');
  });

  it('replaces provided interpolation values and preserves missing placeholders', () => {
    const service = TestBed.inject(LanguageService);

    expect(service.t('about.description', { years: 8 })).toContain('8 años');
    expect(service.t('about.description')).toContain('{years}');
    expect(service.t('nav.home')).toBe('Inicio');
  });

  it('falls back safely when browser storage and document are unavailable', () => {
    vi.stubGlobal('localStorage', undefined);
    vi.stubGlobal('document', undefined);

    const service = new LanguageService();

    expect(service.current()).toBe('es');
    service.setLanguage('en');
    expect(service.current()).toBe('en');
    service.toggle();
    expect(service.current()).toBe('es');
  });
});
