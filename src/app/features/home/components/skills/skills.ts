import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { skillGroups } from '@shared/models/skills';
import { LanguageService } from '@shared/services/language.service';


@Component({
  selector: 'app-skills',
  imports: [NgClass],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  readonly language = inject(LanguageService);
  readonly skillGroups = skillGroups;
}
