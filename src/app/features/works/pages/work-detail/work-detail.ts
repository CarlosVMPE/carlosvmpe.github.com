import { Component, inject, signal } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { WorksService } from '../../services/works.service';
import { Work } from '@features/works/models/work.model';
import { map } from 'rxjs/operators';
import { CustomCarousel } from '@shared/components/custom-carousel/custom-carousel';
import { WorkNotFoundComponent } from '../work-not-found/work-not-found';
import { MockupCardComponent } from '@shared/components/mockup-card/mockup-card';


@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [
    NgStyle, RouterLink, NgClass,
    CustomCarousel, WorkNotFoundComponent,
    MockupCardComponent
  ],
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.css'
})
export class WorkDetail {

  private readonly route = inject(ActivatedRoute);
  private readonly worksService = inject(WorksService);

  readonly work = signal<Work | undefined>(undefined);

  readonly workId = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ),

  );

  readonly workResource = rxResource({
    params: () => ({
      id: this.workId(),
    }),

    stream: ({ params }) =>
      this.worksService.getWorkById(`${params.id}`),
  });
}
