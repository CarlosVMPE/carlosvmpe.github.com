import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleLanguage } from '@shared/components/toggle-language/toggle-language';

@Component({
  imports: [RouterOutlet, ToggleLanguage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio-2026');
}
