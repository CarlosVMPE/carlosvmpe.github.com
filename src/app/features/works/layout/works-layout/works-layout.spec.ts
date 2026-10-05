import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WorksLayout } from './works-layout';

describe('WorksLayout', () => {
  it('renders the router outlet', async () => {
    await TestBed.configureTestingModule({
      imports: [WorksLayout],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(WorksLayout);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
    fixture.destroy();
  });
});