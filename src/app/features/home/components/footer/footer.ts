import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly language = inject(LanguageService);
  year = computed(() => new Date().getFullYear())
}
