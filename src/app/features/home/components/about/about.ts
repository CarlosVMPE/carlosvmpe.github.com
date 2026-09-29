import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly language = inject(LanguageService);
  experienceYears = computed(() => new Date().getFullYear() - 2018)
}
