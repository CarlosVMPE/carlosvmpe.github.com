import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervielleComponent } from './supervielle.component';

describe('SupervielleComponent', () => {
  let component: SupervielleComponent;
  let fixture: ComponentFixture<SupervielleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervielleComponent]
    });
    fixture = TestBed.createComponent(SupervielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
