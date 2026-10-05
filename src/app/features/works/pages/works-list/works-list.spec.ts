import { TestBed } from '@angular/core/testing';
import { WorksList } from './works-list';

describe('WorksList', () => {
  it('renders the works list page', async () => {
    await TestBed.configureTestingModule({ imports: [WorksList] }).compileComponents();

    const fixture = TestBed.createComponent(WorksList);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('worksList works!');
    fixture.destroy();
  });
});