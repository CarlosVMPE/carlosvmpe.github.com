import { Component, inject } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-toggle-language',
  imports: [],
  templateUrl: './toggle-language.html',
  styleUrl: './toggle-language.css',
})
export class ToggleLanguage {
  language = inject(LanguageService);
}
