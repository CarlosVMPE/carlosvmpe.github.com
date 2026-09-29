import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@shared/services/language.service';

interface EducationItem {
  title: 'education.software' | 'education.english';
  subItems: SubEducation[]; // Soporta uno o varios sub-estudios
  colorClass: 'color-cyan' | 'color-blue';
  alignClass: 'align-left' | 'align-right';
}

interface SubEducation {
  institution: string;
  period: string;
  ongoing?: boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent {
  readonly language = inject(LanguageService);
  educationList: EducationItem[] = [
    {
      title: 'education.software',
      subItems: [
        {
          institution: 'Universidad Tecnológica del Perú',
          period: '2013 - 2017'
        }
      ],
      colorClass: 'color-cyan',
      alignClass: 'align-left'
    },
    {
      title: 'education.english',
      subItems: [
        {
          institution: 'Portal Go Fluent (Globant) & Duolingo',
          period: '2024 -',
          ongoing: true
        },
        {
          institution: 'Instituto de Inglés de la UTP',
          period: '2014 - 2015'
        }
      ],
      colorClass: 'color-blue',
      alignClass: 'align-right'
    }
  ];
}
