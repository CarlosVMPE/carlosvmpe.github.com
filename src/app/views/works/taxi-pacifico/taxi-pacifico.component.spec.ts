import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPacificoComponent } from './taxi-pacifico.component';

describe('TaxiPacificoComponent', () => {
  let component: TaxiPacificoComponent;
  let fixture: ComponentFixture<TaxiPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxiPacificoComponent]
    });
    fixture = TestBed.createComponent(TaxiPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
