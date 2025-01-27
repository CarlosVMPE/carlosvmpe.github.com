import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisCompanyComponent } from './tis-company.component';

describe('TisCompanyComponent', () => {
  let component: TisCompanyComponent;
  let fixture: ComponentFixture<TisCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TisCompanyComponent]
    });
    fixture = TestBed.createComponent(TisCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
