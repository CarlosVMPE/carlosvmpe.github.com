import { TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('Experience', () => {
  it('renders the experience section', async () => {
    await TestBed.configureTestingModule({ imports: [Experience] }).compileComponents();

    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.querySelector('section')).toBeTruthy();
    fixture.destroy();
  });
});