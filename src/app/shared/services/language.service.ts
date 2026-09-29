import { computed, Injectable, signal } from '@angular/core';
import { ENGLISH_EXPERIENCES, translations } from '@shared/mocks/translations';
import { allExperiences, ExperienceItem } from '@shared/models/experience';

type Language = keyof typeof translations;
export type TranslationKey = {
  [Key in keyof typeof translations.es]: typeof translations.es[Key] extends string ? Key : never
}[keyof typeof translations.es];

const englishExperiences: ExperienceItem[] = ENGLISH_EXPERIENCES;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'portfolio-language';

  readonly current = signal<Language>(this.readInitialLanguage());
  readonly experiences = computed(() => this.current() === 'es' ? allExperiences : englishExperiences);

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.current();
    }
  }

  private readInitialLanguage(): Language {
    if (typeof localStorage === 'undefined') {
      return 'es';
    }

    return localStorage.getItem(this.storageKey) === 'en' ? 'en' : 'es';
  }

  setLanguage(language: Language): void {
    this.current.set(language);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, language);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }

  toggle(): void {
    this.setLanguage(this.current() === 'es' ? 'en' : 'es');
  }

  t(key: TranslationKey, params: Record<string, string | number> = {}): string {
    return translations[this.current()][key].replace(/\{(\w+)\}/g, (placeholder, name: string) => {
      return String(params[name] ?? placeholder);
    });
  }
}
