import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovistarComponent } from './movistar.component';

describe('MovistarComponent', () => {
  let component: MovistarComponent;
  let fixture: ComponentFixture<MovistarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovistarComponent]
    });
    fixture = TestBed.createComponent(MovistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
