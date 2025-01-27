import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoVipComponent } from './amigo-vip.component';

describe('AmigoVipComponent', () => {
  let component: AmigoVipComponent;
  let fixture: ComponentFixture<AmigoVipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmigoVipComponent]
    });
    fixture = TestBed.createComponent(AmigoVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
