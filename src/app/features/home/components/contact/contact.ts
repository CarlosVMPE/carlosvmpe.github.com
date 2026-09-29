import { Component, inject } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly language = inject(LanguageService);
}
