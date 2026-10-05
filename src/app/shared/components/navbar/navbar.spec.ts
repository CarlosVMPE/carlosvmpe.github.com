import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let originalWindowWidth: number;
  let originalOverflowY: string;

  beforeEach(() => {
    originalWindowWidth = window.innerWidth;
    originalOverflowY = document.body.style.overflowY;
  });

  afterEach(() => {
    document.querySelectorAll('[data-navbar-test-section]').forEach(section => section.remove());
    document.body.style.overflowY = originalOverflowY;
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalWindowWidth,
    });
    vi.restoreAllMocks();
  });

  it('opens and closes its responsive menu', async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();

    const menuButton = fixture.nativeElement.querySelector('.menu-icon') as HTMLButtonElement;
    menuButton.click();
    fixture.detectChanges();
    expect(menuButton.getAttribute('aria-expanded')).toBe('true');

    (fixture.nativeElement.querySelector('.nav-options a[href="#home"]') as HTMLAnchorElement).click();
    fixture.detectChanges();
    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    fixture.destroy();
  });

  it('keeps the menu open on mobile and closes it on desktop resize', async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const navbar = fixture.componentInstance;

    navbar.toggleMenu();
    (navbar as unknown as { updateBodyScroll(): void }).updateBodyScroll();
    expect(document.body.style.overflowY).toBe('hidden');

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 767 });
    window.dispatchEvent(new Event('resize'));
    expect(navbar.isMenuOpen()).toBe(true);

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 768 });
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(navbar.isMenuOpen()).toBe(false);
    expect(document.body.style.overflowY).toBe('scroll');

    window.dispatchEvent(new Event('resize'));
    expect(navbar.isMenuOpen()).toBe(false);
    fixture.destroy();
  });

  it('updates the active section from scroll positions and clears it when none qualify', async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const navbar = fixture.componentInstance;

    const addSection = (id: string, top: number): HTMLElement => {
      const section = document.createElement('section');
      section.id = id;
      section.dataset['navbarTestSection'] = 'true';
      vi.spyOn(section, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect);
      document.body.append(section);
      return section;
    };

    const about = addSection('about', 80);
    const projects = addSection('projects', 60);
    const contact = addSection('contact', 20);

    window.dispatchEvent(new Event('scroll'));
    expect(navbar.activeSection()).toBe('contact');

    contact.getBoundingClientRect = vi.fn().mockReturnValue({ top: 61 } as DOMRect);
    projects.getBoundingClientRect = vi.fn().mockReturnValue({ top: 60 } as DOMRect);
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.activeSection()).toBe('projects');

    about.getBoundingClientRect = vi.fn().mockReturnValue({ top: 80 } as DOMRect);
    projects.getBoundingClientRect = vi.fn().mockReturnValue({ top: 61 } as DOMRect);
    window.dispatchEvent(new Event('scroll'));
    expect(navbar.activeSection()).toBe('');

    window.dispatchEvent(new Event('scroll'));
    expect(navbar.activeSection()).toBe('');
    fixture.destroy();
  });
});
