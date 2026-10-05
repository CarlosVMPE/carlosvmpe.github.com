import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  it('renders the contact section', async () => {
    await TestBed.configureTestingModule({ imports: [Contact] }).compileComponents();

    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.querySelector('section')).toBeTruthy();
    fixture.destroy();
  });
});