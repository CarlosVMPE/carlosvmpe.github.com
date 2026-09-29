import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly language = inject(LanguageService);
}
