import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { SkillsComponent } from './skills';

describe('SkillsComponent', () => {
  beforeEach(() => {
    vi.stubGlobal('ResizeObserver', class {
      observe() {}
      disconnect() {}
    });
  });

  afterEach(() => vi.unstubAllGlobals());

  it('renders its skills and opens links in a new tab', async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const event = new Event('click', { cancelable: true });
    const stopPropagation = vi.spyOn(event, 'stopPropagation');

    expect(fixture.nativeElement.querySelector('app-custom-carousel')).toBeTruthy();
  fixture.componentInstance.goToDetails('sample-work');
  expect(navigate).toHaveBeenCalledWith(['works/sample-work']);

    fixture.componentInstance.onLinkClick(event, 'https://example.test');
    await fixture.whenStable();

    expect(event.defaultPrevented).toBe(true);
    expect(stopPropagation).toHaveBeenCalled();
    expect(open).toHaveBeenCalledWith('https://example.test', '_blank', 'noopener,noreferrer');
    fixture.destroy();
  });
});
