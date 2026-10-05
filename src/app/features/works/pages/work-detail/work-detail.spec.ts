import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { WORKS_EN_TRANSLATIONS, WORKS_MOCK } from '../../data/works.mock';
import { Work } from '../../models/work.model';
import { LanguageService } from '@shared/services/language.service';
import { WorksService } from '../../services/works.service';
import { WorkDetail } from './work-detail';

describe('WorkDetail', () => {
  let workResult: Work | undefined;

  beforeEach(async () => {
    workResult = undefined;
    await TestBed.configureTestingModule({
      imports: [WorkDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 'dsg' })) },
        },
        {
          provide: WorksService,
          useValue: { getWorkById: vi.fn(() => of(workResult)) },
        },
      ],
    }).compileComponents();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('renders the not-found state and formats unknown navigation ids', async () => {
    const fixture = TestBed.createComponent(WorkDetail);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('404');
    expect(fixture.componentInstance.navigationWorkName('unknown-project')).toBe('unknown project');
    fixture.destroy();
  });

  it('uses the translated project name when English is active', () => {
    const fixture = TestBed.createComponent(WorkDetail);
    const language = TestBed.inject(LanguageService);
    language.setLanguage('en');

    expect(fixture.componentInstance.navigationWorkName('dsg')).not.toBe('dsg');
    expect(fixture.componentInstance.navigationWorkName('taxi-lima')).toBe(
      WORKS_MOCK.find(work => work.id === 'taxi-lima')?.companyName,
    );

    language.setLanguage('es');
    expect(fixture.componentInstance.navigationWorkName('dsg')).toBe(WORKS_MOCK[0].project);
    expect(fixture.componentInstance.navigationWorkName('taxi-lima')).toBe(
      WORKS_MOCK.find(work => work.id === 'taxi-lima')?.companyName,
    );
    fixture.destroy();
  });

  it('localizes a loaded work when English is active', async () => {
    workResult = WORKS_MOCK.find(work => work.id === 'dsg');
    vi.stubGlobal('ResizeObserver', class {
      observe() {}
      disconnect() {}
    });

    const fixture = TestBed.createComponent(WorkDetail);
    TestBed.inject(LanguageService).setLanguage('en');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance.localizedWork()).toMatchObject({
      ...WORKS_EN_TRANSLATIONS['dsg'],
      id: 'dsg',
      companyName: WORKS_MOCK[0].companyName,
    });
    fixture.destroy();
  });

  it('keeps the original work fields when Spanish is active', async () => {
    workResult = WORKS_MOCK[0];
    vi.stubGlobal('ResizeObserver', class {
      observe() {}
      disconnect() {}
    });
    const fixture = TestBed.createComponent(WorkDetail);
    TestBed.inject(LanguageService).setLanguage('es');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.localizedWork()).toBe(workResult);
    fixture.destroy();
  });
});
