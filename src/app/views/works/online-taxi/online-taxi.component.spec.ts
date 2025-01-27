import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTaxiComponent } from './online-taxi.component';

describe('OnlineTaxiComponent', () => {
  let component: OnlineTaxiComponent;
  let fixture: ComponentFixture<OnlineTaxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineTaxiComponent]
    });
    fixture = TestBed.createComponent(OnlineTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
