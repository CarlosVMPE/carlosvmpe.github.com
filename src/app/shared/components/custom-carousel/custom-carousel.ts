import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  input,
  signal
} from '@angular/core';

import { NgTemplateOutlet, NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './custom-carousel.html',
  styleUrl: './custom-carousel.css'
})
export class CustomCarousel<T> implements AfterViewInit, OnChanges, OnDestroy {

  items = input.required<T[]>();

  visibleItems = input(3);

  autoplay = input(false);

  autoplayInterval = input(5000);

  loop = input(false);

  navigation = input(true);

  showPagination = input(true);

  itemsInMediumDevices = input(2);

  itemTemplate =
    input.required<TemplateRef<{ $implicit: T }>>();

  @ViewChild('viewport')
  viewport!: ElementRef<HTMLElement>;


  // =====================================================
  // STATE
  // =====================================================

  currentIndex = signal(0);

  dragX = signal(0);

  isDragging = signal(false);

  transitionEnabled = signal(true);


  // =====================================================
  // DRAG
  // =====================================================

  private startX = 0;

  private viewportWidth = signal(0);

  private viewportResizeObserver?: ResizeObserver;


  // =====================================================
  // AUTOPLAY
  // =====================================================

  private autoplayTimer?: ReturnType<typeof setInterval>;


  // =====================================================
  // RESPONSIVE
  // =====================================================

  get currentVisibleItems(): number {

    const width = window.innerWidth;

    if (width < 640) {
      return 1;
    }

    if (width < 1024) {
      return Math.min(this.itemsInMediumDevices(), this.visibleItems());
    }

    return this.visibleItems();

  }


  // =====================================================
  // ITEMS
  // =====================================================

  get totalItems(): number {

    return this.items().length;

  }


  /**
   * Cantidad de clones que necesitamos.
   */
  get cloneCount(): number {

    return Math.min(
      this.currentVisibleItems,
      this.totalItems
    );

  }


  /**
   * Items que realmente renderizamos.
   *
   * Ejemplo:
   *
   * 1 2 3 4 5
   *
   * visible = 3
   *
   * 3 4 | 1 2 3 4 5 | 1 2 3
   */
  get renderedItems(): T[] {

    const items = this.items();

    if (
      !this.loop() ||
      items.length === 0
    ) {
      return items;
    }

    const count = this.cloneCount;

    return [
      ...items.slice(-count),
      ...items,
      ...items.slice(0, count)
    ];

  }


  // =====================================================
  // INDEX
  // =====================================================

  /**
   * Índice inicial dentro de renderedItems.
   */
  get initialIndex(): number {

    return this.cloneCount;

  }


  /**
   * Índice real del item.
   */
  get realIndex(): number {

    if (!this.loop()) {

      return Math.min(
        this.currentIndex(),
        Math.max(0, this.totalItems - 1)
      );

    }

    if (this.totalItems === 0) {
      return 0;
    }

    const index =
      this.currentIndex() - this.cloneCount;

    return (
      (
        index % this.totalItems
      ) +
      this.totalItems
    ) % this.totalItems;

  }


  // =====================================================
  // MAX INDEX
  // =====================================================

  get maxIndex(): number {

    if (this.loop()) {

      return this.totalItems;

    }

    return Math.max(
      0,
      this.totalItems -
      this.currentVisibleItems
    );

  }


  // =====================================================
  // SLIDE WIDTH
  // =====================================================

  get slideWidth(): string {

    return `${100 / this.currentVisibleItems}%`;

  }


  // =====================================================
  // TRANSLATE
  // =====================================================

  get translateX(): number {

    const viewportWidth = this.viewportWidth();

    if (!viewportWidth) {
      return 0;
    }

    const slideWidth =
      viewportWidth /
      this.currentVisibleItems;


    const step = slideWidth;

    return (
      -(this.currentIndex() * step)
      +
      this.dragX()
    );

  }


  // =====================================================
  // LIFECYCLE
  // =====================================================

  ngAfterViewInit(): void {

    this.viewportResizeObserver = new ResizeObserver(() => {
      this.updateViewportWidth();
    });
    this.viewportResizeObserver.observe(this.viewport.nativeElement);
    this.updateViewportWidth();

    if (this.loop()) {
      this.transitionEnabled.set(false);

      this.currentIndex.set(
        this.initialIndex
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.transitionEnabled.set(true);
        });
      });

    }

    this.startAutoplay();

  }

  ngOnDestroy(): void {

    this.viewportResizeObserver?.disconnect();
    this.stopAutoplay();

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (
      !changes['items'] ||
      changes['items'].firstChange ||
      !this.viewport
    ) {
      return;
    }

    this.transitionEnabled.set(false);

    this.updateViewportWidth();
    this.setPositionWithoutTransition(
      this.loop() ? this.initialIndex : 0
    );

    this.restartAutoplay();

  }

  private setPositionWithoutTransition(index: number): void {

    this.transitionEnabled.set(false);
    this.currentIndex.set(index);
    this.dragX.set(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.transitionEnabled.set(true);
      });
    });

  }


  // =====================================================
  // RESIZE
  // =====================================================

  @HostListener('window:resize')
  onResize(): void {

    this.updateViewportWidth();

  }


  private updateViewportWidth(): void {

    if (!this.viewport) {
      return;
    }

    this.viewportWidth.set(
      this.viewport.nativeElement.getBoundingClientRect().width
    );

  }


  // =====================================================
  // BUTTONS
  // =====================================================

  get canGoNext(): boolean {

    if (this.loop()) {

      return this.totalItems >
        this.currentVisibleItems;

    }

    return this.currentIndex() <
      this.maxIndex;

  }


  get canGoPrevious(): boolean {

    if (this.loop()) {

      return this.totalItems >
        this.currentVisibleItems;

    }

    return this.currentIndex() > 0;

  }


  // =====================================================
  // NEXT
  // =====================================================

  next(): void {

    if (this.totalItems <= this.currentVisibleItems) {
      return;
    }

    this.transitionEnabled.set(true);

    this.currentIndex.update(
      index => index + 1
    );

    this.dragX.set(0);

    this.restartAutoplay();

  }


  // =====================================================
  // PREVIOUS
  // =====================================================

  previous(): void {

    if (this.totalItems <= this.currentVisibleItems) {
      return;
    }

    this.transitionEnabled.set(true);

    this.currentIndex.update(
      index => index - 1
    );

    this.dragX.set(0);

    this.restartAutoplay();

  }


  // =====================================================
  // GO TO
  // =====================================================

  goTo(index: number): void {

    if (
      index < 0 ||
      index >= this.totalItems
    ) {
      return;
    }

    this.transitionEnabled.set(true);

    if (this.loop()) {

      this.currentIndex.set(
        this.cloneCount + index
      );

    } else {

      this.currentIndex.set(index);

    }

    this.dragX.set(0);

    this.restartAutoplay();

  }


  // =====================================================
  // TRANSITION END
  // =====================================================

  onTransitionEnd(): void {

    if (!this.loop()) {
      return;
    }

    const total =
      this.totalItems;

    const clones =
      this.cloneCount;


    /*
     * ==================================================
     * FINAL
     * ==================================================
     *
     * Ejemplo:
     *
     * C D | A B C D E | A B C
     *                   ↑
     *
     * currentIndex = 8
     *
     * Debemos volver silenciosamente
     * a:
     *
     * C D | A B C D E | A B C
     *       ↑
     *
     * currentIndex = 3
     */

    if (
      this.currentIndex() >=
      clones + total
    ) {

      const newIndex =
        clones +
        (
          this.currentIndex() -
          (clones + total)
        );

      this.jumpTo(newIndex);

      return;
    }


    /*
     * ==================================================
     * INICIO
     * ==================================================
     *
     * Ejemplo:
     *
     * C D | A B C D E | A B C
     * ↑
     *
     * currentIndex = 1
     *
     * Debemos saltar a:
     *
     * C D | A B C D E | A B C
     *             ↑
     *
     * currentIndex = 6
     */

    if (
      this.currentIndex() < clones
    ) {

      const newIndex =
        clones +
        total -
        (
          clones -
          this.currentIndex()
        );

      this.jumpTo(newIndex);

    }

  }


  /**
   * Cambia de posición sin animación.
   */
  private jumpTo(index: number): void {

    this.transitionEnabled.set(false);

    this.currentIndex.set(index);

    this.dragX.set(0);


    /*
     * Esperamos dos frames para que
     * el navegador aplique primero
     * la posición sin transición.
     */

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        this.transitionEnabled.set(true);

      });

    });

  }


  // =====================================================
  // DRAG START
  // =====================================================

  onPointerDown(
    event: PointerEvent
  ): void {

    if (
      event.pointerType === 'mouse' &&
      event.button !== 0
    ) {
      return;
    }

    this.stopAutoplay();

    const target = event.target as HTMLElement;

    // No iniciar drag sobre elementos interactivos
    if (
      target.closest(
        'a, button, input, textarea, select, [role="button"]'
      )
    ) {
      return;
    }

    this.isDragging.set(true);

    this.startX = event.clientX;

    this.dragX.set(0);

    this.viewport.nativeElement
      .setPointerCapture(
        event.pointerId
      );

  }


  // =====================================================
  // DRAG MOVE
  // =====================================================

  onPointerMove(
    event: PointerEvent
  ): void {

    if (!this.isDragging()) {
      return;
    }

    const difference =
      event.clientX -
      this.startX;

    this.dragX.set(
      difference
    );

  }


  // =====================================================
  // DRAG END
  // =====================================================

  onPointerUp(
    event: PointerEvent
  ): void {

    if (!this.isDragging()) {
      this.startAutoplay();
      return;
    }

    this.isDragging.set(false);

    try {

      this.viewport.nativeElement
        .releasePointerCapture(
          event.pointerId
        );

    } catch {
      // ignore
    }

    const distance =
      this.dragX();

    const threshold =
      this.viewportWidth() * 0.15;


    if (
      distance < -threshold
    ) {

      this.next();

    }
    else if (
      distance > threshold
    ) {

      this.previous();

    }
    else {

      this.dragX.set(0);

      this.startAutoplay();

    }

  }


  // =====================================================
  // DRAG CANCEL
  // =====================================================

  onPointerCancel(
    event: PointerEvent
  ): void {

    if (!this.isDragging()) {
      this.startAutoplay();
      return;
    }

    this.isDragging.set(false);

    try {

      this.viewport.nativeElement
        .releasePointerCapture(
          event.pointerId
        );

    } catch {
      // ignore
    }

    this.dragX.set(0);

    this.startAutoplay();

  }


  // =====================================================
  // AUTOPLAY
  // =====================================================

  private startAutoplay(): void {

    if (!this.autoplay()) {
      return;
    }

    this.stopAutoplay();

    this.autoplayTimer =
      setInterval(() => {

        this.next();

      }, this.autoplayInterval());

  }


  private restartAutoplay(): void {

    if (!this.autoplay()) {
      return;
    }

    this.stopAutoplay();

    this.startAutoplay();

  }


  private stopAutoplay(): void {

    if (this.autoplayTimer) {

      clearInterval(
        this.autoplayTimer
      );

      this.autoplayTimer =
        undefined;

    }

  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }

  onFocusIn(): void {
    this.stopAutoplay();
  }

  onFocusOut(event: FocusEvent): void {

    const nextFocusedElement =
      event.relatedTarget as Node | null;

    if (
      nextFocusedElement &&
      this.viewport.nativeElement
        .closest('.carousel')
        ?.contains(nextFocusedElement)
    ) {
      return;
    }

    this.startAutoplay();
  }

}
