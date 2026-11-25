export type ProjectItem = {
  role?: string;
  projectName?: string; // Nombre del proyecto (ej. "Yape Web - BCP")
  period: string;
  points: string[];
}

export type ExperienceItem = {
  company: string;
  role: string
  color: 'cyan' | 'blue';
  projects: ProjectItem[];
}

export const allExperiences: ExperienceItem[] = [
  {
    company: 'Globant',
    color: 'cyan',
    role: 'Web UI / Full-Stack Developer Ssr. Adv.',
    projects: [
      {
        role: "Dick's Sporting Goods (DSG) - USA",
        period: 'Marzo 2026 - Octubre 2026',
        points: [
          'Desarrollé funcionalidades para Account, Cart, List y Services en Angular 22, usando Signals, Signal Forms y rxResource.',
          'Participé en la migración de Angular 21 a Angular 22, preservando los flujos críticos de Checkout.',
          'Diseñé y desarrollé APIs REST con NestJS y Clean Architecture, usando DTOs, class-validator, JWT, Passport, PostgreSQL y TypeORM.',
          'Integré herramientas de IA en el flujo de desarrollo y trabajé con SonarQube, Vitest, Playwright, Docker, AWS, GitHub Actions y Swagger.'
        ]
      },
      {
        role: 'JM Family Enterprises (JMF) - Insight Project - USA',
        period: 'Enero 2025 - Febrero 2026',
        points: [
          'Desarrollé interfaces con C#, .NET 8, Blazor y MudBlazor a partir de diseños en Figma.',
          'Desarrollé APIs REST con .NET 8, DTOs, reglas de negocio, autenticación y manejo centralizado de errores.',
          'Consulté datos con Entity Framework Core y SQL Server, y escribí pruebas unitarias.',
          'Usé GitHub Copilot como apoyo para el desarrollo; colaboré en despliegues a AWS y presenté demos a equipos y stakeholders.'
        ]
      },
      {
        role: 'Banco Supervielle - Argentina',
        period: 'Octubre 2022 - Diciembre 2024',
        points: [
          'Desarrollé funcionalidades para Transferencias Inmediatas, Transferencias Masivas, Agenda y Back Office.',
          'Trabajé con microfrontends Angular 16 y React 17 sobre Webpack y Module Federation; participé en migraciones de Angular 12 a 13 y 16.',
          'Implementé pruebas con Jasmine y Cypress, usé la librería Kite y participé en despliegues con pipelines y Rundeck.'
        ]
      },
      {
        role: 'Yape Web - Banco de Credito del Perú - BCP',
        period: 'Febrero 2021 — Septiembre 2022',
        points: [
          'Desarrollé funcionalidades web con Angular 9, TypeScript y SCSS e integré servicios y contenido mediante DatoCMS.',
          'Mejoré rendimiento de carga, accesibilidad y SEO; implementé soporte multidioma, incluida la traducción al quechua con Squoia.',
          'Alcancé más de 90 % de cobertura en pruebas unitarias y participé en despliegues a Azure Blob Storage con Jenkins, siguiendo prácticas de calidad con SonarQube.'
        ]
      }
    ]
  },
  {
    company: 'VASS LATAM',
    role: 'Analista Programador / Desarrollador Full-Stack',
    color: 'blue',
    projects: [
      {
        period: 'Junio 2019 — Febrero 2021',
        points: [
          'Lideré el desarrollo frontend de los squads Oferta Comercial y Front-End Transversal para la tribu Stark de Telefónica; supervisé y capacité al equipo.',
          'Desarrollé componentes con Angular y participé en la evolución de Angular 6 a Angular 8.',
          'Desarrollé APIs REST con Java y Spring Boot, usando DTOs, reglas de negocio y manejo centralizado de errores.',
          'Implementé pruebas con Karma y Jasmine y participé en despliegues a IBM Cloud Foundry mediante pipelines de DevOps.'
        ]
      }
    ]
  },
  {
    company: 'Nelica S.A.C',
    role: 'Programador Full-Stack / Responsable de Sistemas',
    color: 'cyan',
    projects: [
      {
        role: 'Valquiria Joyería y Platería',
        period: 'Enero 2019 — Febrero 2019',
        points: [
          'Desarrollé el sitio web y e-commerce de Valquiria durante mi etapa en Nelica.',
          'Organicé el catálogo en categorías de joyería, platería, decoración y merchandising.'
        ]
      },
      {
        period: 'Abril 2018 — Febrero 2019',
        points: [
          'Desarrollé páginas web con HTML5, CSS3, JavaScript, jQuery y Bootstrap 4.',
          'Desarrollé intranets para empresas de transporte con ASP.NET e integración de Google Maps.',
          'Estuve a cargo del área de sistemas, supervisé el desarrollo web y colaboré con diseño y marketing.'
        ]
      }
    ]
  },
  {
    company: 'BioBytes',
    role: 'Practicante Pre-Profesional en Desarrollo y Mantenimiento de Software',
    color: 'blue',
    projects: [
      {
        period: 'Noviembre 2018 — Febrero 2019',
        points: [
          'Programación y soporte para nuevos desarrollos en el lenguaje Java 7+ y 8+.',
          'Desarrollo de servicios web (RESTful) en Java usando el framework Spring.',
          'Pruebas unitarias de software.',
          'Investigación y solución de problemas encargados.'
        ]
      }
    ]
  },
]
