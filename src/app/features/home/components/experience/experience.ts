import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { allExperiences, ExperienceItem } from '@shared/models/experience';

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences = signal<ExperienceItem[]>(allExperiences);
}
