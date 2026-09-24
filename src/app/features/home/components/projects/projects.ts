import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomCarousel } from '@shared/components/custom-carousel/custom-carousel';
import { Project, lastProjects } from '@shared/models/project';

@Component({
  selector: 'app-projects',
  imports: [CustomCarousel, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal<Project[]>(lastProjects);

  constructor(private router: Router) {
  }

  goToDetails(nameProyect: string) {
    this.router.navigate([`works/${nameProyect}`]);
  }
}
