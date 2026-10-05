import { TestBed } from '@angular/core/testing';
import { Welcome } from './welcome';

describe('Welcome', () => {
  it('renders the welcome section', async () => {
    await TestBed.configureTestingModule({ imports: [Welcome] }).compileComponents();

    const fixture = TestBed.createComponent(Welcome);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.querySelector('section')).toBeTruthy();
    fixture.destroy();
  });
});