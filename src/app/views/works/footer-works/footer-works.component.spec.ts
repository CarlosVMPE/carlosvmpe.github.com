import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWorksComponent } from './footer-works.component';

describe('FooterWorksComponent', () => {
  let component: FooterWorksComponent;
  let fixture: ComponentFixture<FooterWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterWorksComponent]
    });
    fixture = TestBed.createComponent(FooterWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
