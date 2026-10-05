import { TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  it('renders and exposes the current experience duration', async () => {
    await TestBed.configureTestingModule({ imports: [About] }).compileComponents();

    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance.experienceYears()).toBe(new Date().getFullYear() - 2018);
    fixture.destroy();
  });
});