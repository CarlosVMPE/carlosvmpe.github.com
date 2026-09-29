import { ExperienceItem } from "@shared/models/experience";

export const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.openMenu': 'Abrir menú',
    'language.toggleLabel': 'Cambiar idioma a inglés',

    'home.welcome': 'Bienvenido a mi',
    'home.portfolio': 'Portafolio personal',
    'home.job': 'Ingeniero de Software',
    'home.projects': 'Proyectos',
    'home.cv': 'Descargar CV',

    'about.titleLead': 'Acerca de',
    'about.titleAccent': 'mi',
    'about.description': 'Soy Ingeniero de Software y trabajo como desarrollador Full Stack desde hace {years} años en distintos proyectos locales y extranjeros. He tenido la oportunidad de liderar equipos, capacitar y compartir mis conocimientos.',
    'about.profile': 'Me considero una persona responsable, creativa y orientada al logro de resultados, con una evolución personal y profesional constante. Soy muy curiosa; me gusta explorar e investigar nuevas alternativas de solución. Tengo capacidad de liderazgo y facilidad para trabajar en equipo.',
    'about.interests': 'Mis intereses y hobbies son:',
    'about.hobby.music': 'Escuchar y tocar música con mi guitarra',
    'about.hobby.gaming': 'Jugar videojuegos en PC o móvil',
    'about.hobby.learning': 'Aprender nuevas tecnologías',
    'about.hobby.football': 'Jugar fútbol',
    'about.hobby.gym': 'Ir al gimnasio',
    'about.hobby.pets': 'Pasar tiempo con mis mascotas',

    'projects.titleLead': 'Mis',
    'projects.titleHighlight': 'trabajos',
    'projects.titleSuffix': 'recientes',
    'projects.viewSite': 'Ver sitio web',
    'projects.viewDetails': 'Ver detalle del proyecto',

    'skills.titleLead': 'Habilidades',
    'skills.technical': 'Técnicas',
    'skills.soft': 'Blandas',
    'skills.positiveAttitude': 'Actitud positiva',
    'skills.communication': 'Comunicación',
    'skills.commitment': 'Compromiso',
    'skills.creativity': 'Creatividad',
    'skills.initiative': 'Iniciativa',
    'skills.multitasking': 'Multitarea',
    'skills.responsibility': 'Responsabilidad',
    'skills.teamwork': 'Trabajo en equipo',

    'experience.title': 'Experiencia',
    'education.title': 'Educación',
    'education.software': 'Ingeniería de Software',
    'education.english': 'Inglés - Intermedio',
    'education.present': 'Actualmente',
    'contact.titleLead': '¿Te gustaría',
    'contact.titleAction': 'contactarme?',
    'footer.navigation': 'Navegación del pie de página',
    'footer.designed': 'Diseñado y desarrollado por',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.openMenu': 'Open menu',
    'language.toggleLabel': 'Switch language to Spanish',

    'home.welcome': 'Welcome to my',
    'home.portfolio': 'Personal portfolio',
    'home.job': 'Software Engineer',
    'home.projects': 'Projects',
    'home.cv': 'Download CV',

    'about.titleLead': 'About',
    'about.titleAccent': 'me',
    'about.description': 'I am a Software Engineer and have worked as a Full Stack Developer for {years} years on local and international projects. I have had the opportunity to lead teams, mentor others, and share my knowledge.',
    'about.profile': 'I consider myself responsible, creative, and results-oriented, with a commitment to continuous personal and professional growth. I am curious and enjoy exploring and researching new solutions. I have leadership skills and work well in a team.',
    'about.interests': 'My interests and hobbies:',
    'about.hobby.music': 'Listening to and playing music on my guitar',
    'about.hobby.gaming': 'Playing video games on PC or mobile',
    'about.hobby.learning': 'Learning new technologies',
    'about.hobby.football': 'Playing soccer',
    'about.hobby.gym': 'Going to the gym',
    'about.hobby.pets': 'Spending time with my pets',

    'projects.titleLead': 'My',
    'projects.titleHighlight': 'recent work',
    'projects.titleSuffix': '',
    'projects.viewSite': 'View website',
    'projects.viewDetails': 'View project details',

    'skills.titleLead': 'Skills',
    'skills.technical': 'Technical',
    'skills.soft': 'Soft',
    'skills.positiveAttitude': 'Positive attitude',
    'skills.communication': 'Communication',
    'skills.commitment': 'Commitment',
    'skills.creativity': 'Creativity',
    'skills.initiative': 'Initiative',
    'skills.multitasking': 'Multitasking',
    'skills.responsibility': 'Responsibility',
    'skills.teamwork': 'Teamwork',

    'experience.title': 'Experience',
    'education.title': 'Education',
    'education.software': 'Software Engineering',
    'education.english': 'English - Intermediate',
    'education.present': 'Present',
    'contact.titleLead': 'Would you like to',
    'contact.titleAction': 'contact me?',
    'footer.navigation': 'Footer navigation',
    'footer.designed': 'Designed and developed by',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export const ENGLISH_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Globant', color: 'cyan', role: 'Web UI Developer SSr. Adv.', projects: [
      {
        role: "Dick's Sporting Goods (DSG) - USA", period: 'March 2026 - Present', points: [
          'Developing new features for projects built with Angular 22+.',
          'Using Signals and modern Angular patterns in NPX monorepos.',
          'Applying linters and source-code best practices with SonarQube.',
          'Using Copilot AI for software metrics when submitting pull requests to GitHub.',
          'Writing unit tests in Angular 22+.',
          'Building new UIs from Figma designs.',
          'Using Docker, GitHub, and GitHub Actions.',
          'Using Scrum and Jira to track daily tasks.'
        ]
      },
      {
        role: 'JM Family Enterprises (JMF) - Insight Project - USA', period: 'January 2025 - February 2026', points: [
          'Developed new features for the Gyde Insight project using C# and Blazor.',
          'Built from Figma designs using MudBlazor, HTML5, CSS3, JavaScript, and Copilot AI.',
          'Presented demos of new developments to other teams and business stakeholders.',
          'Wrote unit tests in C#.',
          'Deployed applications to multiple environments.',
          'Used Scrum and Jira to track daily tasks.'
        ]
      },
      {
        role: 'Supervielle Bank - Argentina', period: 'October 2022 - December 2024', points: [
          'Developed features for several micro-frontends, including instant and bulk transfers, the agenda, and back office.',
          'Improved project solutions using HTML5, SCSS, TypeScript, and Angular 12+ and 16+.',
          'Created new UIs from Figma designs.',
          'Wrote unit tests with Jasmine and integration tests with Cypress.',
          'Deployed applications using pipelines and Rundeck.',
          'Used an internal component library called Kite.'
        ]
      },
      {
        role: 'Yape Web - Credit Bank of Peru - BCP', period: 'February 2021 - September 2022', points: [
          'Developed new features and Figma-based interfaces, and improved the project using HTML5, SCSS, TypeScript, and Angular 9.',
          'Improved loading speed, performance, accessibility, best practices, and SEO.',
          'Followed SonarQube and Confluence recommendations and best practices.',
          'Deployed applications to Azure Blob Storage using Jenkins pipelines.',
          'Integrated services and content with DatoCMS (Content Manager Service).',
          'Implemented unit tests, reaching 97% code coverage.',
          'Developed a multilingual structure and Quechua translation support with Squoia (VM).',
          'Documented work in Confluence and took part in Scrum ceremonies.'
        ]
      }
    ]
  },
  {
    company: 'VASS LATAM', color: 'blue', role: 'Front-End Developer Analyst', projects: [
      {
        period: 'June 2019 - February 2021', points: [
          'Led front-end development for the Commercial Offer and Cross-Functional Front-End squads in Telefónica’s Stark Tribe.',
          'Supervised, trained, and supported the front-end squad.',
          'Developed components with Angular 6+ and 8+, TypeScript, Sass, and related technologies.',
          'Worked with Git repositories and branching strategies such as GitFlow.',
          'Developed and implemented unit tests with Karma and Jasmine.',
          'Deployed applications to Cloud Foundry using IBM Cloud DevOps pipelines.',
          'Worked with the Scrum agile methodology and Jira.'
        ]
      }
    ]
  },
  {
    company: 'Nelica S.A.C', color: 'cyan', role: 'Front-End Developer', projects: [
      {
        period: 'April 2018 - February 2019', points: [
          'Built websites using HTML5, CSS3, JavaScript, and Bootstrap 4.',
          'Built intranets for transportation companies using ASP.NET and the Google Maps API.',
          'Managed the systems area and supervised website development.',
          'Collaborated with design and marketing teams on new developments.'
        ]
      }
    ]
  },
  {
    company: 'BioBytes', color: 'blue', role: 'Pre-professional Software Development and Maintenance Intern', projects: [
      {
        period: 'November 2018 - February 2019', points: [
          'Programmed and supported new developments using Java 7+ and 8+.',
          'Developed RESTful web services in Java with the Spring framework.',
          'Wrote software unit tests.',
          'Researched and solved assigned problems.'
        ]
      }
    ]
  }
];
