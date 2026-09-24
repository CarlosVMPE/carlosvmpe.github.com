import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WORKS_MOCK } from '../data/works.mock';
import { Work } from '../models/work.model';

@Injectable({
  providedIn: 'root',
})
export class WorksService {

  getWorkById(id: string): Observable<Work | undefined> {
    console.log('id ', id)
    const work = WORKS_MOCK.find(
      work => work.id === id
    );

    console.log('work ', work)

    return of(work);
  }
}
