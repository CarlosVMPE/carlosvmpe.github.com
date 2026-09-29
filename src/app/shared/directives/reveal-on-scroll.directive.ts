import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnChanges, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;
  private initialized = false;

  @Input() appRevealOnScroll: unknown;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized && changes['appRevealOnScroll']) {
      this.observe();
    }
  }

  ngAfterViewInit(): void {
    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion) {
      return;
    }

    this.initialized = true;
    this.observe();
  }

  private observe(): void {
    this.observer?.disconnect();
    this.renderer.removeClass(this.element, 'reveal-visible');
    this.renderer.addClass(this.element, 'reveal-pending');
    this.observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        this.renderer.removeClass(this.element, 'reveal-pending');
        this.renderer.addClass(this.element, 'reveal-visible');
        this.observer?.unobserve(this.element);
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
