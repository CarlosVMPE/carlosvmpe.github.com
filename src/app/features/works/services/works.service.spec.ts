import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { vi } from 'vitest';
import { WORKS_MOCK } from '../data/works.mock';
import { WorksService } from './works.service';

describe('WorksService', () => {
  let service: WorksService;

  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
    service = TestBed.inject(WorksService);
  });

  afterEach(() => vi.restoreAllMocks());

  it('returns the work matching the requested id', async () => {
    await expect(firstValueFrom(service.getWorkById('dsg'))).resolves.toBe(WORKS_MOCK[0]);
  });

  it('returns undefined when no work matches the requested id', async () => {
    await expect(firstValueFrom(service.getWorkById('missing-work'))).resolves.toBeUndefined();
  });
});
