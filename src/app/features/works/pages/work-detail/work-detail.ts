import { Component, computed, inject, signal } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { WorksService } from '../../services/works.service';
import { Work } from '@features/works/models/work.model';
import { map } from 'rxjs/operators';
import { CustomCarousel } from '@shared/components/custom-carousel/custom-carousel';
import { WorkNotFoundComponent } from '../work-not-found/work-not-found';
import { MockupCardComponent } from '@shared/components/mockup-card/mockup-card';
import { LanguageService } from '@shared/services/language.service';
import { WORKS_EN_TRANSLATIONS, WORKS_MOCK } from '../../data/works.mock';
import { RevealOnScrollDirective } from '@shared/directives/reveal-on-scroll.directive';


@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [
    NgStyle, RouterLink, NgClass,
    CustomCarousel, WorkNotFoundComponent,
    MockupCardComponent, RevealOnScrollDirective
  ],
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.css'
})
export class WorkDetail {

  private readonly route = inject(ActivatedRoute);
  private readonly worksService = inject(WorksService);
  readonly language = inject(LanguageService);

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

  readonly localizedWork = computed(() => {
    const work = this.workResource.value();
    if (!work || this.language.current() !== 'en') {
      return work;
    }

    const translation = WORKS_EN_TRANSLATIONS[work.id as keyof typeof WORKS_EN_TRANSLATIONS];
    return { ...work, ...translation };
  });

  navigationWorkName(id: string): string {
    const work = WORKS_MOCK.find(item => item.id === id);
    if (!work) {
      return id.replaceAll('-', ' ');
    }

    const project = this.language.current() === 'en'
      ? WORKS_EN_TRANSLATIONS[work.id as keyof typeof WORKS_EN_TRANSLATIONS]?.project
      : work.project;

    return project || work.companyName;
  }
}
