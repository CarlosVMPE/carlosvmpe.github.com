import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WorkNotFoundComponent } from './work-not-found';

describe('WorkNotFoundComponent', () => {
  it('renders the not-found message and return link', async () => {
    await TestBed.configureTestingModule({
      imports: [WorkNotFoundComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(WorkNotFoundComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('404');
    expect(fixture.nativeElement.querySelector('a[routerLink="/"]')).toBeTruthy();
    fixture.destroy();
  });
});