import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MockupCardComponent } from '@shared/components/mockup-card/mockup-card';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-work-not-found',
  imports: [RouterLink, MockupCardComponent],
  templateUrl: './work-not-found.html',
  styleUrl: './work-not-found.css',
})
export class WorkNotFoundComponent {
  readonly language = inject(LanguageService);
}
