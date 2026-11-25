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
  experienceYears = computed(() => {
    const startDate = new Date(2018, 3, 1);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    const anniversaryHasNotPassed =
      today.getMonth() < startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() &&
        today.getDate() < startDate.getDate());

    if (anniversaryHasNotPassed) {
      years--;
    }

    return years;
  });
}
