import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTravelComponent } from './excel-travel.component';

describe('ExcelTravelComponent', () => {
  let component: ExcelTravelComponent;
  let fixture: ComponentFixture<ExcelTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelTravelComponent]
    });
    fixture = TestBed.createComponent(ExcelTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
