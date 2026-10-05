import { Component, signal, SimpleChange, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CustomCarousel } from './custom-carousel';

@Component({
  standalone: true,
  imports: [CustomCarousel],
  template: `
    <ng-template #item let-value><span>{{ value }}</span></ng-template>
    <app-custom-carousel
      [items]="items()"
      [itemTemplate]="item"
      [visibleItems]="visibleItems()"
      [itemsInMediumDevices]="mediumItems()"
      [autoplay]="autoplay()"
      [autoplayInterval]="autoplayInterval()"
      [loop]="loop()"
      [navigation]="navigation()"
      [showPagination]="showPagination()" />
  `,
})
class CarouselHost {
  @ViewChild(CustomCarousel) carousel!: CustomCarousel<string>;
  items = signal(['one', 'two', 'three', 'four']);
  visibleItems = signal(3);
  mediumItems = signal(2);
  autoplay = signal(false);
  autoplayInterval = signal(100);
  loop = signal(false);
  navigation = signal(true);
  showPagination = signal(true);
}

interface CarouselOptions {
  items?: string[];
  visibleItems?: number;
  mediumItems?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  loop?: boolean;
  navigation?: boolean;
  showPagination?: boolean;
}

class MockResizeObserver {
  static instances: MockResizeObserver[] = [];
  observe = vi.fn();
  disconnect = vi.fn();

  constructor(private readonly callback: ResizeObserverCallback) {
    MockResizeObserver.instances.push(this);
  }

  trigger(): void {
    this.callback([], this as unknown as ResizeObserver);
  }
}

function pointerEvent(
  target: HTMLElement,
  values: Partial<Pick<PointerEvent, 'pointerType' | 'button' | 'clientX' | 'pointerId'>> = {},
): PointerEvent {
  return {
    target,
    pointerType: 'touch',
    button: 0,
    clientX: 0,
    pointerId: 1,
    ...values,
  } as unknown as PointerEvent;
}

function setViewportWidth(carousel: CustomCarousel<string>, width: number): void {
  vi.spyOn(carousel.viewport.nativeElement, 'getBoundingClientRect')
    .mockReturnValue({ width } as DOMRect);
  carousel.onResize();
}

describe('CustomCarousel', () => {
  let originalWindowWidth: number;

  beforeEach(() => {
    originalWindowWidth = window.innerWidth;
    MockResizeObserver.instances = [];
    vi.stubGlobal('ResizeObserver', MockResizeObserver);
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalWindowWidth,
    });
  });

  async function createFixture(options: CarouselOptions = {}) {
    await TestBed.configureTestingModule({ imports: [CarouselHost] }).compileComponents();
    const fixture = TestBed.createComponent(CarouselHost);
    const host = fixture.componentInstance;
    if (options.items !== undefined) host.items.set(options.items);
    if (options.visibleItems !== undefined) host.visibleItems.set(options.visibleItems);
    if (options.mediumItems !== undefined) host.mediumItems.set(options.mediumItems);
    if (options.autoplay !== undefined) host.autoplay.set(options.autoplay);
    if (options.autoplayInterval !== undefined) host.autoplayInterval.set(options.autoplayInterval);
    if (options.loop !== undefined) host.loop.set(options.loop);
    if (options.navigation !== undefined) host.navigation.set(options.navigation);
    if (options.showPagination !== undefined) host.showPagination.set(options.showPagination);
    fixture.detectChanges();
    return fixture;
  }

  it('calculates responsive item counts, clones, widths, and positions', async () => {
    const fixture = await createFixture({ visibleItems: 5, mediumItems: 4 });
    const carousel = fixture.componentInstance.carousel;

    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 });
    expect(carousel.currentVisibleItems).toBe(1);
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 800 });
    expect(carousel.currentVisibleItems).toBe(4);
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1200 });
    expect(carousel.currentVisibleItems).toBe(5);

    expect(carousel.totalItems).toBe(4);
    expect(carousel.cloneCount).toBe(4);
    expect(carousel.renderedItems).toEqual(fixture.componentInstance.items());
    expect(carousel.initialIndex).toBe(4);
    expect(carousel.maxIndex).toBe(0);
    expect(carousel.slideWidth).toBe('20%');
    expect(carousel.translateX).toBe(0);
    setViewportWidth(carousel, 500);
    carousel.currentIndex.set(2);
    carousel.dragX.set(10);
    expect(carousel.translateX).toBe(-190);

    fixture.componentInstance.loop.set(true);
    fixture.detectChanges();
    expect(carousel.renderedItems).toHaveLength(12);
    expect(carousel.renderedItems.slice(0, 4)).toEqual(['one', 'two', 'three', 'four']);
    expect(carousel.maxIndex).toBe(4);
    carousel.currentIndex.set(carousel.cloneCount);
    expect(carousel.realIndex).toBe(0);

    fixture.componentInstance.items.set([]);
    fixture.detectChanges();
    expect(carousel.cloneCount).toBe(0);
    expect(carousel.renderedItems).toEqual([]);
    expect(carousel.realIndex).toBe(0);
    fixture.destroy();
  });

  it('clamps non-loop indexes and handles navigation boundaries', async () => {
    const fixture = await createFixture();
    const carousel = fixture.componentInstance.carousel;

    expect(fixture.nativeElement.textContent).toContain('one');
    expect(carousel.totalItems).toBe(4);
    expect(carousel.canGoNext).toBe(true);
    expect(carousel.canGoPrevious).toBe(false);

    carousel.next();
    expect(carousel.currentIndex()).toBe(1);
    expect(carousel.canGoPrevious).toBe(true);
    carousel.previous();
    expect(carousel.currentIndex()).toBe(0);
    carousel.goTo(2);
    expect(carousel.realIndex).toBe(2);
    carousel.currentIndex.set(10);
    expect(carousel.realIndex).toBe(3);
    carousel.currentIndex.set(2);
    carousel.goTo(4);
    carousel.goTo(-1);
    expect(carousel.currentIndex()).toBe(2);

    fixture.componentInstance.items.set(['one', 'two', 'three']);
    fixture.detectChanges();
    carousel.currentIndex.set(0);
    expect(carousel.canGoNext).toBe(false);
    expect(carousel.canGoPrevious).toBe(false);
    carousel.next();
    carousel.previous();
    expect(carousel.currentIndex()).toBe(0);
    fixture.destroy();
  });

  it('initializes loop positioning, handles item changes, and disconnects its observer', async () => {
    const fixture = await createFixture({ loop: true });
    const carousel = fixture.componentInstance.carousel;

    expect(carousel.loop()).toBe(true);
    carousel.ngAfterViewInit();
    expect(carousel.currentIndex()).toBe(carousel.initialIndex);
    expect(carousel.transitionEnabled()).toBe(true);
    expect(MockResizeObserver.instances[0].observe).toHaveBeenCalledWith(carousel.viewport.nativeElement);

    carousel.currentIndex.set(5);
    carousel.dragX.set(18);
    carousel.ngOnChanges({});
    carousel.ngOnChanges({ items: new SimpleChange(['one'], ['two'], true) });
    expect(carousel.currentIndex()).toBe(5);

    carousel.ngOnChanges({ items: new SimpleChange(['one'], ['two'], false) });
    expect(carousel.currentIndex()).toBe(carousel.initialIndex);
    expect(carousel.dragX()).toBe(0);
    expect(carousel.transitionEnabled()).toBe(true);

    setViewportWidth(carousel, 240);
    expect(carousel.translateX).toBe(-(carousel.currentIndex() * 80));
    MockResizeObserver.instances.at(-1)?.trigger();
    window.dispatchEvent(new Event('resize'));
    carousel.onResize();

    fixture.destroy();
    expect(MockResizeObserver.instances.at(-1)?.disconnect).toHaveBeenCalledOnce();
  });

  it('ignores resize and item changes before the viewport exists', async () => {
    const fixture = await createFixture();
    const carousel = fixture.componentInstance.carousel;
    const viewport = carousel.viewport;
    carousel.viewport = undefined!;

    carousel.onResize();
    carousel.ngOnChanges({ items: new SimpleChange(['one'], ['two'], false) });

    expect(carousel.currentIndex()).toBe(0);
    carousel.viewport = viewport;
    fixture.destroy();
  });

  it('wraps loop transitions at the end and beginning', async () => {
    const fixture = await createFixture({ loop: true });
    const carousel = fixture.componentInstance.carousel;
    carousel.ngAfterViewInit();

    carousel.currentIndex.set(carousel.cloneCount + carousel.totalItems);
    carousel.dragX.set(20);
    carousel.onTransitionEnd();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount);
    expect(carousel.dragX()).toBe(0);
    expect(carousel.transitionEnabled()).toBe(true);

    carousel.currentIndex.set(carousel.cloneCount - 1);
    carousel.onTransitionEnd();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount + carousel.totalItems - 1);

    carousel.currentIndex.set(carousel.cloneCount + 1);
    carousel.onTransitionEnd();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount + 1);

    fixture.componentInstance.loop.set(false);
    fixture.detectChanges();
    carousel.onTransitionEnd();
    fixture.destroy();
  });

  it('supports loop navigation and refuses items that cannot scroll', async () => {
    const fixture = await createFixture({ loop: true });
    const carousel = fixture.componentInstance.carousel;
    carousel.ngAfterViewInit();

    expect(carousel.canGoNext).toBe(true);
    expect(carousel.canGoPrevious).toBe(true);
    carousel.goTo(2);
    expect(carousel.currentIndex()).toBe(carousel.cloneCount + 2);
    carousel.next();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount + 3);
    carousel.previous();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount + 2);

    fixture.componentInstance.items.set(['one', 'two', 'three']);
    fixture.detectChanges();
    expect(carousel.canGoNext).toBe(false);
    expect(carousel.canGoPrevious).toBe(false);
    carousel.next();
    carousel.previous();
    expect(carousel.currentIndex()).toBe(carousel.cloneCount);
    fixture.destroy();
  });

  it('handles pointer drag thresholds, interactive targets, and capture failures', async () => {
    const fixture = await createFixture();
    const carousel = fixture.componentInstance.carousel;
    const viewport = carousel.viewport.nativeElement;
    setViewportWidth(carousel, 100);
    const capture = vi.fn();
    const release = vi.fn();
    Object.defineProperty(viewport, 'setPointerCapture', { configurable: true, value: capture });
    Object.defineProperty(viewport, 'releasePointerCapture', { configurable: true, value: release });
    const target = document.createElement('div');

    carousel.onPointerMove(pointerEvent(target, { clientX: 12 }));
    expect(carousel.dragX()).toBe(0);
    carousel.onPointerDown(pointerEvent(target, { pointerType: 'mouse', button: 1 }));
    expect(carousel.isDragging()).toBe(false);
    carousel.onPointerDown(pointerEvent(document.createElement('button')));
    expect(carousel.isDragging()).toBe(false);

    carousel.onPointerDown(pointerEvent(target, { clientX: 100 }));
    expect(carousel.isDragging()).toBe(true);
    expect(capture).toHaveBeenCalledWith(1);
    carousel.onPointerMove(pointerEvent(target, { clientX: 70 }));
    expect(carousel.dragX()).toBe(-30);
    carousel.onPointerUp(pointerEvent(target));
    expect(carousel.currentIndex()).toBe(1);
    expect(carousel.isDragging()).toBe(false);

    carousel.isDragging.set(true);
    carousel.dragX.set(30);
    release.mockImplementationOnce(() => { throw new Error('capture released'); });
    carousel.onPointerUp(pointerEvent(target));
    expect(carousel.currentIndex()).toBe(0);

    carousel.isDragging.set(true);
    carousel.dragX.set(5);
    carousel.onPointerUp(pointerEvent(target));
    expect(carousel.dragX()).toBe(0);
    fixture.destroy();
  });

  it('handles pointer cancellation and a drag that cannot advance', async () => {
    const fixture = await createFixture();
    const carousel = fixture.componentInstance.carousel;
    const viewport = carousel.viewport.nativeElement;
    const target = document.createElement('div');
    const release = vi.fn();
    Object.defineProperty(viewport, 'releasePointerCapture', { configurable: true, value: release });

    carousel.onPointerUp(pointerEvent(target));
    carousel.onPointerCancel(pointerEvent(target));
    carousel.isDragging.set(true);
    carousel.dragX.set(30);
    carousel.onPointerCancel(pointerEvent(target));
    expect(carousel.isDragging()).toBe(false);
    expect(carousel.dragX()).toBe(0);

    carousel.isDragging.set(true);
    release.mockImplementationOnce(() => { throw new Error('capture released'); });
    carousel.onPointerCancel(pointerEvent(target));
    expect(carousel.isDragging()).toBe(false);

    fixture.componentInstance.items.set(['one', 'two', 'three']);
    fixture.detectChanges();
    setViewportWidth(carousel, 100);
    carousel.isDragging.set(true);
    carousel.dragX.set(-30);
    carousel.onPointerUp(pointerEvent(target));
    expect(carousel.currentIndex()).toBe(0);
    fixture.destroy();
  });

  it('starts, pauses, restarts, and clears autoplay across focus and pointer events', async () => {
    vi.useFakeTimers();
    const fixture = await createFixture({ autoplay: true, autoplayInterval: 100 });
    const carousel = fixture.componentInstance.carousel;
    carousel.onMouseLeave();

    vi.advanceTimersByTime(100);
    expect(carousel.currentIndex()).toBe(1);
    carousel.onMouseEnter();
    vi.advanceTimersByTime(200);
    expect(carousel.currentIndex()).toBe(1);
    carousel.onMouseLeave();
    vi.advanceTimersByTime(100);
    expect(carousel.currentIndex()).toBe(2);

    carousel.onFocusIn();
    carousel.onFocusOut({
      relatedTarget: carousel.viewport.nativeElement.querySelector('.carousel__slide'),
    } as unknown as FocusEvent);
    vi.advanceTimersByTime(100);
    expect(carousel.currentIndex()).toBe(2);

    carousel.onFocusOut({ relatedTarget: document.body } as unknown as FocusEvent);
    vi.advanceTimersByTime(100);
    expect(carousel.currentIndex()).toBe(3);

    carousel.onPointerDown(pointerEvent(document.createElement('button')));
    vi.advanceTimersByTime(100);
    expect(carousel.currentIndex()).toBe(3);
    fixture.destroy();
    vi.advanceTimersByTime(200);
    expect(carousel.currentIndex()).toBe(3);
  });
});
