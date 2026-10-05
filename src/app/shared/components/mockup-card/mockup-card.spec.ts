import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockupCardComponent } from './mockup-card';

@Component({
  standalone: true,
  imports: [MockupCardComponent],
  template: '<app-mockup-card><span class="projected-content">content</span></app-mockup-card>',
})
class MockupCardHost {}

describe('MockupCardComponent', () => {
  it('renders its frame and projected content', async () => {
    await TestBed.configureTestingModule({ imports: [MockupCardHost] }).compileComponents();

    const fixture = TestBed.createComponent(MockupCardHost);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.mockup-card')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.projected-content')?.textContent).toContain('content');
    fixture.destroy();
  });
});