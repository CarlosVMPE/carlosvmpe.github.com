import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders and exposes the current year', async () => {
    await TestBed.configureTestingModule({ imports: [Footer] }).compileComponents();

    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    expect(fixture.componentInstance.year()).toBe(new Date().getFullYear());
    expect(fixture.nativeElement.querySelector('footer')).toBeTruthy();
    fixture.destroy();
  });
});