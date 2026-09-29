import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomCarousel } from '@shared/components/custom-carousel/custom-carousel';
import { Project, lastProjects } from '@shared/models/project';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-projects',
  imports: [CustomCarousel, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly language = inject(LanguageService);
  projects = signal<Project[]>(lastProjects);

  constructor(private router: Router) {
  }

  goToDetails(nameProyect: string) {
    this.router.navigate([`works/${nameProyect}`]);
  }
}
