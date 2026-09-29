import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MockupCardComponent } from '@shared/components/mockup-card/mockup-card';
import { LanguageService } from '@shared/services/language.service';
import { RevealOnScrollDirective } from '@shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work-not-found',
  imports: [RouterLink, MockupCardComponent, RevealOnScrollDirective],
  templateUrl: './work-not-found.html',
  styleUrl: './work-not-found.css',
})
export class WorkNotFoundComponent {
  readonly language = inject(LanguageService);
}
