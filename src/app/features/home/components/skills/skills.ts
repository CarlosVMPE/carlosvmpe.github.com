import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CustomCarousel } from '@shared/components/custom-carousel/custom-carousel';
import { Skills, skills } from '@shared/models/skills';

@Component({
  selector: 'app-skills',
  imports: [CustomCarousel],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  lastSkills = signal<Skills[]>(skills);

  constructor(private router: Router) {
  }

  goToDetails(nameProyect: string) {
    this.router.navigate([`works/${nameProyect}`]);
  }

  onLinkClick(event: Event, link: string) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigateByUrl(link, { skipLocationChange: true }).then(() => {
      window.open(link, '_blank', 'noopener,noreferrer');
    });
  }
}
