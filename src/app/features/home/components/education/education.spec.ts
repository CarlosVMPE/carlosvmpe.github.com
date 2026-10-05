import { TestBed } from '@angular/core/testing';
import { EducationComponent } from './education';

describe('EducationComponent', () => {
  it('renders both education entries and ongoing study status', async () => {
    await TestBed.configureTestingModule({ imports: [EducationComponent] }).compileComponents();

    const fixture = TestBed.createComponent(EducationComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.educationList).toHaveLength(2);
    expect(fixture.componentInstance.educationList[1].subItems[0].ongoing).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('Universidad Tecnológica del Perú');
    fixture.destroy();
  });
});