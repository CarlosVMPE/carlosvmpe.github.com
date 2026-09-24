import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  title: string;
  subItems: SubEducation[]; // Soporta uno o varios sub-estudios
  colorClass: 'color-cyan' | 'color-blue';
  alignClass: 'align-left' | 'align-right';
}

interface SubEducation {
  institution: string;
  period: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent {
  educationList: EducationItem[] = [
    {
      title: 'Ingeniería de Software',
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
      title: 'Inglés - Intermedio',
      subItems: [
        {
          institution: 'Portal Go Fluent (Globant) & Duolingo',
          period: '2024 - Actualmente'
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
