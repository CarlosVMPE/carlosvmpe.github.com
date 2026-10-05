import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { vi } from 'vitest';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(
    readonly callback: IntersectionObserverCallback,
    readonly options?: IntersectionObserverInit,
  ) {
    MockIntersectionObserver.instances.push(this);
  }

  emit(isIntersecting: boolean): void {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
}

@Component({
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: '<div [appRevealOnScroll]="value"></div>',
})
class RevealHost {
  @ViewChild(RevealOnScrollDirective) directive!: RevealOnScrollDirective;
  value: unknown = 'initial';
}

describe('RevealOnScrollDirective', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
  });

  afterEach(() => vi.unstubAllGlobals());

  it('does not observe when IntersectionObserver is unavailable', async () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();

    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.reveal-pending')).toBeNull();
    fixture.destroy();
  });

  it('does not observe when reduced motion is preferred', async () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();

    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();

    expect(MockIntersectionObserver.instances).toHaveLength(0);
    fixture.destroy();
  });

  it('marks visible elements and observes updated inputs', async () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();

    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('div') as HTMLElement;
    const firstObserver = MockIntersectionObserver.instances[0];

    expect(firstObserver.options).toEqual({ threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    expect(firstObserver.observe).toHaveBeenCalledWith(element);
    expect(element.classList.contains('reveal-pending')).toBe(true);

    firstObserver.emit(false);
    expect(element.classList.contains('reveal-pending')).toBe(true);
    firstObserver.emit(true);
    expect(element.classList.contains('reveal-pending')).toBe(false);
    expect(element.classList.contains('reveal-visible')).toBe(true);
    expect(firstObserver.unobserve).toHaveBeenCalledWith(element);

    fixture.componentInstance.value = 'updated';
    fixture.detectChanges();
    fixture.componentInstance.directive.ngOnChanges({
      appRevealOnScroll: new SimpleChange('initial', 'updated', false),
    });
    const secondObserver = MockIntersectionObserver.instances[1];

    expect(firstObserver.disconnect).toHaveBeenCalledOnce();
    expect(element.classList.contains('reveal-visible')).toBe(false);
    expect(element.classList.contains('reveal-pending')).toBe(true);
    expect(secondObserver.observe).toHaveBeenCalledWith(element);

    fixture.componentInstance.directive.ngOnChanges({});
    expect(MockIntersectionObserver.instances).toHaveLength(2);

    fixture.destroy();
    expect(secondObserver.disconnect).toHaveBeenCalledOnce();
  });

  it('does not recreate the observer when the input change is absent', async () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();

    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();
    const directive = fixture.componentInstance.directive;

    directive.ngOnChanges({ appRevealOnScroll: new SimpleChange('initial', 'updated', false) });
    expect(MockIntersectionObserver.instances).toHaveLength(2);

    fixture.destroy();
  });
});
