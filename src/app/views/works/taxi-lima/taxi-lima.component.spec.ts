import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiLimaComponent } from './taxi-lima.component';

describe('TaxiLimaComponent', () => {
  let component: TaxiLimaComponent;
  let fixture: ComponentFixture<TaxiLimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxiLimaComponent]
    });
    fixture = TestBed.createComponent(TaxiLimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
