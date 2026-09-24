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
    role: 'Web UI Developer SSr. Adv.',
    projects: [
      {
        role: "Dick's Sporting Goods (DSG) - USA",
        period: 'Marzo 2026 - Actualidad',
        points: [
          'Desarrollo de nuevas funcionalidades para distintos proyectos basados en Angular 22+.',
          'Uso de Signals y nuevo paradigma en Angular moderno y monorepos con NPX.',
          'Uso de linters y buenas prácticas de código fuente junto con SonnarQube.',
          'Métricas de software con Copilot durante la entrega de PRs a Github.',
          'Pruebas unitarias en Angular 22+.',
          'Construcción de nueva UI basadas en Figma.',
          'Uso de Docker, Github y Github Actions.',
          'SCRUM y Jira para el seguimiento de tareas diarias.'
        ]
      },
      {
        role: 'JM Family Enterprises (JMF) - Insight Project - USA',
        period: 'Enero 2025 - Febrero 2026',
        points: [
          'Desarrollo de nuevas funcionalidades dentro del proyecto Gyde Insight en C# con Blazor',
          'Desarrollo basado en Figma, MudBlazor, HTML5, CSS3 y Javascript junto con Copilot AI.',
          'Participación en demos para mostrar nuevos desarrollos a otros equipos y personas del negocio.',
          'Pruebas unitarias en C#.',
          'Despliegue de aplicaciones en los distintos entornos.',
          'SCRUM y Jira para el seguimiento de tareas diarias.'
        ]
      },
      {
        role: 'Banco Supervielle - Argentina',
        period: 'Octubre 2022 - Diciembre 2024',
        points: [
          'Desarrollo de nuevas funcionalidades a los distintos Microfrontends, Transferencias Inmediatas, Masivas, Agenda, BackOffice.',
          'Mejora de soluciones al proyecto usando HTML5, Scss, TypeScript y Angular 12+ y 16+.',
          'Nuevas interfaces UI basadas en Figma.',
          'Pruebas unitarias con Jasmine y de integración con Cypress.',
          'Despliegue de aplicaciones con pipelines y rundeck.',
          'Uso de biblioteca de componentes interna llamada Kite.'
        ]
      },
      {
        role: 'Yape Web - Banco de Credito del Perú - BCP',
        period: 'Febrero 2021 — Septiembre 2022',
        points: [
          'Desarrollo de nuevas funcionalidades, interfaces en Figma, mejora de soluciones al proyecto usando HTML5, Scss, TypeScript y Angular 9.',
          'Mejora de optimización de carga, performance, accesibilidad, buenas prácticas y SEO.',
          'Buenas prácticas siguiendo recomendaciones con SonarQube y Confluence.',
          'Deploy de aplicaciones con Blob Storage de Azure y Pipelines con Jenkins.',
          'Integración de servicios y contenido con DatoCMS (Content Manager Service).',
          'Implementación de pruebas unitarias hacia el 97% de coverage.',
          'Desarrollo de estructura multi-idioma y soporte para traducción a Quechua con Squoia (VM).',
          'Documentación en Confluente, participación en ceremonias SCRUM.'
        ]
      }
    ]
  },
  {
    company: 'VASS LATAM',
    role: 'Analista Programador Front End',
    color: 'blue',
    projects: [
      {
        period: 'Junio 2019 — Febrero 2021',
        points: [
          'Desarrollador líder Front-End en el squad Oferta Comercial y Front-End Transversal para la Tribu Stark de Telefónica.',
          'Supervisión, capacitación y acompañamiento para el squad Front-End.',
          'Desarrollo de componentes con Angular 6+ y 8+, en conjunto con TypeScript, Sass, etc.',
          'Experiencia trabajando con repositorios Git y estrategia de ramas (branches) como GitFlow.',
          'Desarrollo e implementación de Pruebas Unitarias (Unit Testing) con Karma y Jasmine.',
          'Despliegue de aplicaciones en Cloud Foundry utilizando Pipelines (DevOps) de IBM Cloud.',
          'Trabajo con metodología ágil SCRUM y Jira.'
        ]
      }
    ]
  },
  {
    company: 'Nelica S.A.C',
    role: 'Programador Front End',
    color: 'cyan',
    projects: [
      {
        period: 'Abril 2018 — Febrero 2019',
        points: [
          'Desarrollo de páginas web, usando HTML5, CSS3, Javascript y el framework Boostrap 4.',
          'Desarrollo de Intranets para empresas del sector transporte, usando ASP.NET junto al API de Google Maps.',
          'Responsable del área de sistemas, supervisión del desarrollo de las páginas web.',
          'Trabajo en equipo con el área de diseño y marketing para los nuevos desarrollos.'
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
