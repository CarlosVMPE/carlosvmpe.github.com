import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripticoComponent } from './triptico.component';

describe('TripticoComponent', () => {
  let component: TripticoComponent;
  let fixture: ComponentFixture<TripticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripticoComponent]
    });
    fixture = TestBed.createComponent(TripticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
