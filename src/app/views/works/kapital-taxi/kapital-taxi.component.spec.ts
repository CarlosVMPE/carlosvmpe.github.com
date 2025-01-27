import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapitalTaxiComponent } from './kapital-taxi.component';

describe('KapitalTaxiComponent', () => {
  let component: KapitalTaxiComponent;
  let fixture: ComponentFixture<KapitalTaxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KapitalTaxiComponent]
    });
    fixture = TestBed.createComponent(KapitalTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
