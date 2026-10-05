import { TestBed } from '@angular/core/testing';
import { ToggleLanguage } from './toggle-language';

describe('ToggleLanguage', () => {
  it('toggles the language and updates the button label', async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({ imports: [ToggleLanguage] }).compileComponents();

    const fixture = TestBed.createComponent(ToggleLanguage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button span').textContent.trim()).toBe('EN');

    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(fixture.componentInstance.language.current()).toBe('en');
    expect(fixture.nativeElement.querySelector('button span').textContent.trim()).toBe('ES');
    fixture.destroy();
  });
});