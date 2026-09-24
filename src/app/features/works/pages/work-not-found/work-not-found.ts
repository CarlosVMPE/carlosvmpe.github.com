import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkNotFound } from '@features/works/models/work.model';
import { MockupCardComponent } from '@shared/components/mockup-card/mockup-card';

@Component({
  selector: 'app-work-not-found',
  imports: [RouterLink, MockupCardComponent],
  templateUrl: './work-not-found.html',
  styleUrl: './work-not-found.css',
})
export class WorkNotFoundComponent {
  notFound = signal<WorkNotFound>({
    codeError: '404',
    title: 'Proyecto no encontrado',
    description: 'El proyecto que estás buscando no existe, ha sido movido de categoría o la URL es incorrecta. Te sugerimos regresar al inicio o explorar otros trabajos.'
  })
}
