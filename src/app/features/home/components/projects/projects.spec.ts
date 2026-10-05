import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(() => {
    vi.stubGlobal('ResizeObserver', class {
      observe() {}
      disconnect() {}
    });
  });

  afterEach(() => vi.unstubAllGlobals());

  it('renders the project carousel and navigates to selected project details', async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    expect(fixture.nativeElement.querySelector('app-custom-carousel')).toBeTruthy();
    fixture.componentInstance.goToDetails('sample-work');

    expect(navigate).toHaveBeenCalledWith(['works/sample-work']);
    fixture.destroy();
  });
});