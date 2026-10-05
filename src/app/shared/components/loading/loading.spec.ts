import { TestBed } from '@angular/core/testing';
import { Loading } from './loading';

describe('Loading', () => {
  it('renders the loading indicator', async () => {
    await TestBed.configureTestingModule({ imports: [Loading] }).compileComponents();

    const fixture = TestBed.createComponent(Loading);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.loader')).toBeTruthy();
    fixture.destroy();
  });
});