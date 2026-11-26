import { Work, WorkTranslation } from "../models/work.model";

export const WORKS_MOCK = [
  {
    id: 'dsg',
    brandColor: '#006554',
    companyName: "Dick's Sporting Goods",
    project: 'Web Checkout - List & Services UI',
    description: "Dick's Sporting Goods, es una cadena estadounidense de tiendas de artículos deportivos, ropa atlética, calzado, accesorios para variedad de deportes y actividades al aire libre, como beísbol, fútbol, básquetbol, golf, etc.",
    date: 'Octubre 2026',
    type: 'Retail - Ecommerce',
    navigationLeft: 'triptico-publicitario',
    navigationRight: 'jm-family',
    link: 'https://www.dickssportinggoods.com/',
    tags: ['ecom', 'ventas', 'deportes', 'accesorios', 'ropa', 'pagos', 'zapatillas', 'articulos', 'beísbol', 'fútbol', 'básquetbol', 'golf', 'ordenes', 'retail', 'promos', 'descuentos'],
    images: [
      '/assets/projects/dsg/dsg.png',
      '/assets/projects/dsg/dsg2.png',
      '/assets/projects/dsg/dsg3.png',
      '/assets/projects/dsg/dsg4.png',
      '/assets/projects/dsg/dsg5.png',
    ],
    sections: [
      {
        title: 'Frontend',
        items: [
          'Desarrollé funcionalidades para Checkout, Account, Cart, List y Services.',
          'Utilicé Angular 22, Signals, Signal Forms y rxResource.'
        ]
      },
      {
        title: 'Backend y arquitectura',
        items: [
          'Desarrollé APIs REST con NestJS y Clean Architecture.',
          'Utilicé DTOs, class-validator, JWT, Passport, PostgreSQL y TypeORM.'
        ]
      },
      {
        title: 'Calidad y entrega',
        items: [
          'Implementé pruebas con Vitest y Playwright, y analicé la calidad del código con SonarQube.',
          'Utilicé Docker y GitHub Actions en el flujo de desarrollo y despliegue en AWS.',
          'Integré herramientas de IA como CODA, Stepwise y Glob.AI en mi flujo de desarrollo.'
        ]
      }
    ],
  },
  {
    id: 'jm-family',
    brandColor: '#00a3af',
    companyName: 'JM Family Enterprises',
    project: 'Gyde Project - Insight Project',
    description: 'Gyde (Guiding Your Dealership Experience) proyecto de ventas de Financiación y Seguros, para perfiles de consumidores o dealers, obteniendo datos historicos, crediticios con el fin de mostrar una mejor evaluación a los clientes y empresas en la adquisición y mejora de productos brindados por JM Family.',
    date: 'Febrero 2026',
    type: 'Automotriz',
    navigationLeft: 'dsg',
    navigationRight: 'supervielle',
    link: 'https://www.jmagroup.com/finance-and-insurance/gyde',
    tags: [
      'automotriz', 'ventas', 'financiamiento', 'seguros', 'productos', 'vehiculos', 'dealer', 'vendedor',
      'reportes', 'dashboard', 'cotización'],
    images: [
      '/assets/projects/jmf/jmf.png',
      '/assets/projects/jmf/jmf2.png',
      '/assets/projects/jmf/jmf3.png',
      '/assets/projects/jmf/jmf4.png',
    ],
    sections: [
      {
        title: 'Frontend y producto',
        items: [
          'Construí interfaces para Gyde Insight con C#, Blazor y MudBlazor a partir de diseños en Figma.',
          'Presenté demos de los desarrollos a equipos y stakeholders del negocio.'
        ]
      },
      {
        title: 'Backend y datos',
        items: [
          'Desarrollé APIs REST con .NET 8 y DTOs.',
          'Implementé lógica de negocio, consulté datos con Entity Framework Core y trabajé con SQL Server.'
        ]
      },
      {
        title: 'Calidad, IA y cloud',
        items: [
          'Usé GitHub Copilot como apoyo en el desarrollo con C# y .NET.',
          'Escribí pruebas unitarias y colaboré en despliegues a distintos entornos de AWS.'
        ]
      }
    ],
  },
  {
    id: 'supervielle',
    brandColor: '#b10f36',
    companyName: 'Banco Supervielle',
    project: 'Transferencias Inmediatas',
    description: 'Banco Supervielle Online Banking empresas, es un aplicativo web interno del banco, donde puedes realizar transferencias inmediatas individuales o judiciales (24/48h) para empresas.',
    date: 'Diciembre 2024',
    type: 'Banca / Movil',
    navigationLeft: 'jm-family',
    navigationRight: 'yape',
    link: 'https://www.supervielle.com.ar/negocios/pymes/servicios-digitales/online-banking-empresas',
    tags: [
      'banca', 'movil', 'capital humano', 'empresas', 'transferencias', 'inmediatas', 'masivas',
      'judiciales', '24/48 horas', 'contactos', 'online', 'banking'
    ],
    images: [
      '/assets/projects/spv/spv_empresas.jpg',
      '/assets/projects/spv/trf_home.png',
      '/assets/projects/spv/trf_contact.png',
      '/assets/projects/spv/trf_form.png',
      '/assets/projects/spv/trf_estado.png'
    ],
    sections: [
      {
        title: 'Microfrontends y producto',
        items: [
          'Desarrollé funcionalidades para Transferencias Inmediatas, Transferencias Masivas, Agenda y Back Office.',
          'Trabajé en una arquitectura de microfrontends con Webpack y Module Federation.'
        ]
      },
      {
        title: 'Frontend y calidad',
        items: [
          'Desarrollé interfaces con Angular y React, y participé en migraciones progresivas de Angular 12 a 13 y 16.',
          'Implementé pruebas unitarias con Jasmine y pruebas de integración con Cypress.'
        ]
      },
      {
        title: 'Entrega',
        items: [
          'Utilicé la librería interna Kite y participé en despliegues mediante pipelines y Rundeck.'
        ]
      }
    ],
  },
  {
    id: 'yape',
    brandColor: '#742384',
    companyName: 'Yape',
    project: 'Yape Web',
    description: 'Aplicativo movil para realizar pagos móviles utilizando un número telefónico para operar y así realizar transacciones hacia otros usuarios mediente número telefónico o código QR.',
    date: 'Septiembre 2022',
    type: 'Banca',
    navigationLeft: 'supervielle',
    navigationRight: 'movistar',
    link: 'https://www.yape.com.pe/',
    tags: ['banca', 'app', 'movil', 'capital humano', 'empresas', 'centro de ayuda', 'yape', 'preguntas'],
    images: [
      '/assets/projects/yape/yape1.png',
      '/assets/projects/yape/yape2.png',
      '/assets/projects/yape/yape3.png',
      '/assets/projects/yape/yape4.png',
      '/assets/projects/yape/yape5.png',
    ],
    sections: [
      {
        title: 'Frontend y experiencia',
        items: [
          'Desarrollé funcionalidades e interfaces web con Angular 9, TypeScript y SCSS.',
          'Mejoré el rendimiento de carga, la accesibilidad y el SEO.',
          'Implementé una estructura multidioma con soporte para traducción al quechua mediante Squoia.'
        ]
      },
      {
        title: 'Contenido e integración',
        items: [
          'Integré servicios y contenido administrado con DatoCMS.'
        ]
      },
      {
        title: 'Calidad y despliegue',
        items: [
          'Implementé pruebas unitarias y alcancé más de 90 % de cobertura.',
          'Automaticé despliegues a Azure Blob Storage mediante pipelines de Jenkins.',
          'Apliqué prácticas de calidad y análisis estático con SonarQube.'
        ]
      }
    ],
  },
  {
    id: 'valquiria',
    brandColor: '#c77b9b',
    companyName: 'Valquiria Joyería y Platería',
    project: 'Sitio web y e-commerce',
    description: 'Desarrollo de una experiencia web para Valquiria, una joyería y platería, con catálogo de productos y tienda en línea.',
    date: '2018',
    type: 'Retail / E-commerce',
    navigationLeft: 'movistar',
    navigationRight: 'taxi-lima',
    tags: ['joyería', 'platería', 'retail', 'e-commerce', 'catálogo', 'tienda online'],
    images: [
      '/assets/projects/valquiria/valquiria-store.png',
      '/assets/projects/valquiria/valquiria-logo.png',
    ],
    sections: [
      {
        title: 'Sitio web y comercio electrónico',
        items: [
          'Diseñé y desarrollé la presencia web de Valquiria Joyería y Platería.',
          'Implementé una experiencia de e-commerce para explorar y consultar productos de joyería, platería y artículos para el hogar.',
          'Organicé el catálogo por categorías para facilitar la navegación de los clientes.'
        ]
      }
    ],
  },
  {
    id: 'movistar',
    brandColor: '#019df4',
    companyName: 'Movistar',
    project: 'Movistar Total',
    description: 'Movistar Total te permite contratar y unir tus productos movistar en uno solo, Hogar + Móvil, con el fin de tenerlos bajo un paquete llamados Movistar Total y contar con mejores beneficios y descuentos.',
    date: 'Febrero 2021',
    type: 'Telecomunicaciones',
    navigationLeft: 'yape',
    navigationRight: 'valquiria',
    link: 'https://movistaronline.pe/hogar/movistar-total',
    tags: ['hogar', 'movil', 'internet', 'fijo', 'tv', 'duo', 'trio', 'postpago', 'ofertas', 'ventas',
      'promociones', 'descuentos', 'paquetes', 'clientes'],
    images: [
      '/assets/projects/movistar/movistar_total_1.jpg',
      '/assets/projects/movistar/movistar_total_2.jpg',
      '/assets/projects/movistar/movistar_total_3.jpg',
      '/assets/projects/movistar/movistar_total_4.jpg',
      '/assets/projects/movistar/movistar_total_5.jpg',
    ],
    sections: [
      {
        title: 'Frontend',
        items: [
          'Lideré el desarrollo frontend para los squads de Oferta Comercial y Front-End Transversal de la tribu Stark.',
          'Desarrollé componentes con Angular, TypeScript y Sass, y participé en la migración de Angular 6 a Angular 8.'
        ]
      },
      {
        title: 'Backend y APIs',
        items: [
          'Desarrollé APIs REST con Java y Spring Boot.',
          'Implementé DTOs, reglas de negocio y manejo centralizado de errores.'
        ]
      },
      {
        title: 'Liderazgo y entrega',
        items: [
          'Supervisé, capacité y acompañé a desarrolladores frontend.',
          'Implementé pruebas unitarias con Karma y Jasmine.',
          'Participé en despliegues a IBM Cloud Foundry mediante pipelines.'
        ]
      }
    ],
  },
  {
    id: 'taxi-lima',
    brandColor: '#f73439',
    companyName: 'Taxi Lima',
    project: '',
    description: 'Taxi Lima brinda servicios debidamente formalizados. Se dedican al alquiler de automóviles, transporte de personal, servicio de taxi, servicios VIP y actividades secundarias como mensajería liviana y mecánica automotriz.',
    date: 'Febrero 2019',
    type: 'Transporte',
    navigationLeft: 'valquiria',
    navigationRight: 'kapital-taxi',
    link: '',
    tags: ['app', 'transporte', 'taxi', 'reserva', 'viajes'],
    images: [
      '/assets/projects/taxi_lima/taxi_lima_1.png',
      '/assets/projects/taxi_lima/taxi_lima_2.png',
      '/assets/projects/taxi_lima/taxi_lima_3.png',
      '/assets/projects/taxi_lima/taxi_lima_4.png',
      '/assets/projects/taxi_lima/taxi_lima_5.png',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Taxi Lima para presentar sus servicios de alquiler de autos, transporte de personal, taxi, atención VIP, mensajería ligera y mecánica automotriz.',
          'Desarrollé la intranet complementaria para una empresa del sector transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'kapital-taxi',
    brandColor: '#007cea',
    companyName: 'Kapital Taxi',
    project: '',
    description: 'Kapital Taxi es una empresa especializada en el traslado y recojo de personas, en el ámbito ejecutivo y empresarial.',
    date: 'Enero 2019',
    type: 'Transporte',
    navigationLeft: 'taxi-lima',
    navigationRight: 'excel-travel',
    link: 'https://kapitalbusiness.pe/',
    tags: ['app', 'transporte', 'taxi', 'courier', 'remisse', 'ejecutivo', 'reserva', 'viajes', 'servicio programado'],
    images: [
      '/assets/projects/kapital_taxi/tkapital.jpg',
      '/assets/projects/kapital_taxi/tkapital2.jpg',
      '/assets/projects/kapital_taxi/tkapital3.jpg',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Kapital Taxi para presentar sus servicios de traslado ejecutivo y empresarial.',
          'Desarrollé la intranet complementaria para el proyecto de transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'excel-travel',
    brandColor: '#fdb71e',
    companyName: 'Excel Travel',
    project: '',
    description: 'Excel Travel es una empresa de taxi dedicada al traslado de personal corporativo.',
    date: 'Enero 2019',
    type: 'Transporte',
    navigationLeft: 'kapital-taxi',
    navigationRight: 'online-taxi',
    link: 'https://excelperu.com/',
    tags: ['app', 'transporte', 'taxi', 'tour', 'courier', 'ejecutivo', 'reserva', 'viajes', 'servicio programado'],
    images: [
      '/assets/projects/excel_travel/etravel1.png',
      '/assets/projects/excel_travel/etravel2.png',
      '/assets/projects/excel_travel/etravel3.png',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Excel Travel para presentar sus servicios de taxi y traslado de personal corporativo.',
          'Desarrollé la intranet complementaria para el proyecto de transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'online-taxi',
    brandColor: '#238ecd',
    companyName: 'Online Taxi',
    project: '',
    description: 'Ofrece servicios de taxi remisse, corporativo, courier, aeropuerto y eventos.',
    date: 'Agosto 2018',
    type: 'Transporte',
    navigationLeft: 'excel-travel',
    navigationRight: 'taxi-pacifico',
    link: 'https://taxionlineperu.com/',
    tags: ['app', 'transporte', 'taxi', 'remisee', 'courier', 'ejecutivo', 'aeropuerto', 'eventos', 'servicio programado'],
    images: [
      '/assets/projects/online_taxi/onlinetaxi1.png',
      '/assets/projects/online_taxi/onlinetaxi2.png',
      '/assets/projects/online_taxi/onlinetaxi3.png',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Online Taxi para presentar sus servicios de transporte corporativo, courier, aeropuerto y eventos.',
          'Desarrollé la intranet complementaria para el proyecto de transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'taxi-pacifico',
    brandColor: '#b10e0e',
    companyName: 'Taxi Pacífico',
    project: '',
    description: 'Es una empresa de transporte en la modalidad de taxi estación, constituida el 01 de Setiembre de 1999.',
    date: 'Julio 2018',
    type: 'Transporte',
    navigationLeft: 'online-taxi',
    navigationRight: 'amigo-vip',
    link: 'https://www.facebook.com/ATU.TAXIPACIFICO/',
    tags: ['app', 'transporte', 'taxi', 'remisee', 'courier', 'ejecutivo', 'aeropuerto', 'eventos', 'servicio programado'],
    images: [
      '/assets/projects/taxi_pacifico/tpacifico.jpg',
      '/assets/projects/taxi_pacifico/tpacifico2.jpg',
      '/assets/projects/taxi_pacifico/tpacifico3.jpg',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Taxi Pacífico para presentar sus servicios como empresa de transporte en modalidad de taxi estación.',
          'Desarrollé la intranet complementaria para el proyecto de transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'amigo-vip',
    brandColor: '#693cdd',
    companyName: 'Amigo Vip',
    project: '',
    description: 'Es una empresa de taxi que brinda servicios de taxi remisse, ejecutivo, courier, etc.',
    date: 'Julio 2018',
    type: 'Transporte',
    navigationLeft: 'taxi-pacifico',
    navigationRight: 'tis-company',
    link: 'https://grupoamigovip.com/',
    tags: ['app', 'transporte', 'taxi', 'remisee', 'courier', 'ejecutivo', 'aeropuerto', 'eventos', 'servicio programado'],
    images: [
      '/assets/projects/amigo_vip/amigovip.jpg',
      '/assets/projects/amigo_vip/amigovip2.jpg',
      '/assets/projects/amigo_vip/amigovip3.jpg',
    ],
    sections: [
      {
        title: 'Sitio web e intranet',
        items: [
          'Desarrollé el sitio web de Amigo VIP para presentar sus servicios de taxi remisse, traslado ejecutivo y courier.',
          'Desarrollé la intranet complementaria para el proyecto de transporte, usando ASP.NET e integración con Google Maps API.',
          'Construí la web con HTML5, CSS3, JavaScript y Bootstrap 4, en coordinación con diseño y marketing.'
        ]
      }
    ],
  },
  {
    id: 'tis-company',
    brandColor: '#6036e7',
    companyName: 'Tis Company',
    project: '',
    description: 'Es una empresa especialista en la organización integral de eventos corporativos e institucionales, marketing, BTL y capital humano a nivel nacional.',
    date: 'Septiembre 2018',
    type: 'Eventos',
    navigationLeft: 'taxi-pacifico',
    navigationRight: 'tarjeta-navidad',
    link: '',
    tags: ['eventos', 'corporativos', 'institucionales', 'marketing', 'sociales', 'generales'],
    images: [
      '/assets/projects/tis_company/tcompany.jpg',
      '/assets/projects/tis_company/tcompany2.jpg',
      '/assets/projects/tis_company/tcompany3.jpg',
    ],
    sections: [
      {
        title: 'Desarrollo web',
        items: [
          'Desarrollé páginas web con HTML5, CSS3, JavaScript y Bootstrap 4.',
          'Coordiné con diseño y marketing para preparar nuevos desarrollos.'
        ]
      },
      {
        title: 'Coordinación y soporte',
        items: [
          'Fui responsable del área de sistemas y supervisé el desarrollo de páginas web.'
        ]
      }
    ],
  },
  {
    id: 'tarjeta-navidad',
    brandColor: '#0ec174',
    companyName: 'Nelica',
    project: 'Tarjeta Navideña',
    description: 'Tarjeta navideña para celebrar la víspera de la Navidad.',
    date: 'Diciembre 2018',
    type: 'Transporte',
    navigationLeft: 'tis-company',
    navigationRight: 'triptico-publicitario',
    link: 'https://gruponelica.com/navidad2018/',
    tags: ['tarjeta', 'navidad', 'visperas', 'compartir', 'experiencias', 'recuerdos', 'animaciones', 'noche buena'],
    images: [
      '/assets/projects/tarjeta/tarjeta.jpg',
      '/assets/projects/tarjeta/tarjeta2.jpg',
      '/assets/projects/tarjeta/tarjeta3.jpg',
    ],
    sections: [
      {
        title: 'Pieza digital',
        items: [
          'Desarrollé una tarjeta navideña digital para compartir durante la víspera de Navidad.',
          'La ficha muestra distintas vistas de la pieza final.'
        ]
      },
      {
        title: 'Trabajo colaborativo',
        items: [
          'En los proyectos de Nelica, colaboré con las áreas de diseño y marketing en nuevos desarrollos.'
        ]
      }
    ],
  },
  {
    id: 'triptico-publicitario',
    brandColor: '#0087ff',
    companyName: 'Kapital Taxi',
    project: 'Tríptico publicitario',
    description: 'Tríptico publicitario para la empresa Kapital Taxi.',
    date: 'Enero 2019',
    type: 'Transporte',
    navigationLeft: 'tarjeta-navidad',
    navigationRight: 'dsg',
    link: 'https://kapitalbusiness.pe/',
    tags: ['triptico', 'banner', 'publicidad', 'servicios', 'productos', 'ventas'],
    images: [
      '/assets/projects/triptico/triptico.jpg',
      '/assets/projects/triptico/triptico2.jpg',
      '/assets/projects/triptico/triptico3.jpg',
    ],
    sections: [
      {
        title: 'Pieza promocional',
        items: [
          'Preparé un tríptico publicitario para presentar los servicios de Kapital Taxi.',
          'La ficha reúne distintas vistas de la pieza promocional.'
        ]
      },
      {
        title: 'Trabajo colaborativo',
        items: [
          'En los proyectos de Nelica, colaboré con las áreas de diseño y marketing en nuevos desarrollos.'
        ]
      }
    ],
  },
] satisfies Work[];

type WorkId = typeof WORKS_MOCK[number]['id'];

export const WORKS_EN_TRANSLATIONS: Record<WorkId, WorkTranslation> = {
  dsg: {
    project: 'Web Checkout - List & Services UI',
    description: "Dick's Sporting Goods, is an American sporting goods retailer offering athletic apparel, footwear, accessories, and equipment for a wide range of sports and outdoor activities, including baseball, soccer, basketball, and golf.",
    date: 'October 2026',
    type: 'Retail - Ecommerce',
    tags: ['ecommerce', 'sales', 'sports', 'accessories', 'apparel', 'payments', 'sneakers', 'products', 'baseball', 'soccer', 'basketball', 'golf', 'orders', 'retail', 'promotions', 'discounts'],
    sections: [
      {
        title: 'Frontend',
        items: [
          'I developed features for Checkout, Account, Cart, List, and Services.',
          'I used Angular 22, Signals, Signal Forms, and rxResource.'
        ]
      },
      {
        title: 'Backend and Architecture',
        items: [
          'I developed REST APIs with NestJS and Clean Architecture.',
          'I used DTOs, class-validator, JWT, Passport, PostgreSQL, and TypeORM.'
        ]
      },
      {
        title: 'Quality and Delivery',
        items: [
          'I implemented tests with Vitest and Playwright, and analyzed code quality with SonarQube.',
          'I used Docker and GitHub Actions in the development and AWS deployment workflow.',
          'I integrated AI tools such as CODA, Stepwise, and Glob.AI into my development workflow.'
        ]
      }
    ],
  },
  'jm-family': {
    project: 'Gyde Project - Insight Project',
    description: 'Gyde (Guiding Your Dealership Experience) is a sales, financing, and insurance project for consumers and dealerships. It uses historical and credit data to provide customers and businesses with better evaluations when acquiring and improving products offered by JM Family.',
    date: 'February 2026',
    type: 'Automotive',
    tags: ['automotive', 'sales', 'financing', 'insurance', 'products', 'vehicles', 'dealership', 'salesperson', 'reports', 'dashboard', 'quote'],
    sections: [
      {
        title: 'Frontend and Product',
        items: [
          'Built Gyde Insight interfaces with C#, Blazor, and MudBlazor from Figma designs.',
          'Presented development demos to teams and business stakeholders.'
        ]
      },
      {
        title: 'Backend and Data',
        items: [
          'Developed REST APIs with .NET 8 and DTOs.',
          'Implemented business logic, queried data with Entity Framework Core, and worked with SQL Server.'
        ]
      },
      {
        title: 'Quality, AI, and Cloud',
        items: [
          'Used GitHub Copilot to assist with C# and .NET development.',
          'Wrote unit tests and contributed to deployments across AWS environments.'
        ]
      }
    ],
  },
  supervielle: {
    project: 'Instant Transfers',
    description: 'Banco Supervielle Online Banking for Businesses is an internal bank web application that lets businesses make individual or court-ordered transfers, processed instantly or within 24 to 48 hours.',
    date: 'December 2024',
    type: 'Banking / Mobile',
    tags: ['banking', 'mobile', 'human resources', 'business', 'transfers', 'instant', 'bulk', 'court-ordered', '24/48 hours', 'contacts', 'online', 'banking'],
    sections: [
      {
        title: 'Microfrontends and Product',
        items: [
          'Developed features for Instant Transfers, Bulk Transfers, Agenda, and Back Office.',
          'Worked on a microfrontend architecture using Webpack and Module Federation.'
        ]
      },
      {
        title: 'Frontend and Quality',
        items: [
          'Built interfaces with Angular and React, and contributed to progressive migrations from Angular 12 to 13 and 16.',
          'Implemented unit tests with Jasmine and integration tests with Cypress.'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Used the internal Kite component library and contributed to deployments through pipelines and Rundeck.'
        ]
      }
    ],
  },
  yape: {
    project: 'Yape Web',
    description: 'A mobile payments application that uses a phone number to make transactions with other users by phone number or QR code.',
    date: 'September 2022',
    type: 'Banking',
    tags: ['banking', 'app', 'mobile', 'human resources', 'business', 'help center', 'Yape', 'FAQs'],
    sections: [
      {
        title: 'Frontend and User Experience',
        items: [
          'Developed web features and interfaces with Angular 9, TypeScript, and SCSS.',
          'Improved loading performance, accessibility, and SEO.',
          'Implemented a multilingual structure with Quechua translation support using Squoia.'
        ]
      },
      {
        title: 'Content and Integration',
        items: [
          'Integrated services and content managed through DatoCMS.'
        ]
      },
      {
        title: 'Quality and Deployment',
        items: [
          'Implemented unit tests and achieved over 90% code coverage.',
          'Automated deployments to Azure Blob Storage through Jenkins pipelines.',
          'Applied code quality practices and static analysis with SonarQube.'
        ]
      }
    ],
  },
  valquiria: {
    project: 'Website and E-commerce',
    description: 'Development of a web experience for Valquiria, a jewelry and silverware store, including a product catalog and online shop.',
    date: '2018',
    type: 'Retail / E-commerce',
    tags: ['jewelry', 'silverware', 'retail', 'e-commerce', 'catalog', 'online store'],
    sections: [
      {
        title: 'Website and E-commerce',
        items: [
          'Designed and developed the web presence for Valquiria Jewelry and Silverware.',
          'Implemented an e-commerce experience to browse jewelry, silverware, and home products.',
          'Organized the catalog into categories to make product discovery easier.'
        ]
      }
    ],
  },
  movistar: {
    project: 'Movistar Total',
    description: 'Movistar Total lets customers combine their Movistar products into one package, bringing home and mobile services together with added benefits and discounts.',
    date: 'February 2021',
    type: 'Telecommunications',
    tags: ['home', 'mobile', 'internet', 'landline', 'TV', 'duo', 'trio', 'postpaid', 'offers', 'sales', 'promotions', 'discounts', 'bundles', 'customers'],
    sections: [
      {
        title: 'Frontend',
        items: [
          'Led frontend development for the Commercial Offer and Cross-Functional Front-End squads in the Stark tribe.',
          'Built components with Angular, TypeScript, and Sass, and contributed to the migration from Angular 6 to Angular 8.'
        ]
      },
      {
        title: 'Backend and APIs',
        items: [
          'Developed REST APIs with Java and Spring Boot.',
          'Implemented DTOs, business rules, and centralized error handling.'
        ]
      },
      {
        title: 'Leadership and Delivery',
        items: [
          'Supervised, trained, and supported frontend developers.',
          'Implemented unit tests with Karma and Jasmine.',
          'Contributed to deployments on IBM Cloud Foundry through pipelines.'
        ]
      }
    ],
  },
  'taxi-lima': {
    description: 'Taxi Lima provides fully formalized services, including car rentals, employee transportation, taxi rides, VIP services, light courier delivery, and automotive mechanics.',
    date: 'February 2019',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'booking', 'trips'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Taxi Lima’s website to present its car rental, employee transportation, taxi, VIP, light courier, and automotive services.',
          'Developed the complementary intranet for a transportation-sector company with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'kapital-taxi': {
    description: 'Kapital Taxi specializes in passenger pick-up and transportation for corporate and executive clients.',
    date: 'January 2019',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'courier', 'private hire', 'executive', 'booking', 'trips', 'scheduled service'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Kapital Taxi’s website to present its executive and corporate transportation services.',
          'Developed the complementary intranet for the transportation project with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'excel-travel': {
    description: 'Excel Travel is a taxi company specializing in transportation for corporate personnel.',
    date: 'January 2019',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'tours', 'courier', 'executive', 'booking', 'trips', 'scheduled service'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Excel Travel’s website to present its taxi and corporate employee transportation services.',
          'Developed the complementary intranet for the transportation project with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'online-taxi': {
    description: 'Online Taxi offers private-hire, corporate, courier, airport, and event transportation services.',
    date: 'August 2018',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'private hire', 'courier', 'executive', 'airport', 'events', 'scheduled service'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Online Taxi’s website to present its corporate, courier, airport, and event transportation services.',
          'Developed the complementary intranet for the transportation project with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'taxi-pacifico': {
    description: 'Taxi Pacífico is a taxi-rank transportation company established on September 1, 1999.',
    date: 'July 2018',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'private hire', 'courier', 'executive', 'airport', 'events', 'scheduled service'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Taxi Pacífico’s website to present its taxi-rank transportation services.',
          'Developed the complementary intranet for the transportation project with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'amigo-vip': {
    description: 'Amigo VIP is a taxi company offering private-hire, executive, courier, and other transportation services.',
    date: 'July 2018',
    type: 'Transportation',
    tags: ['app', 'transportation', 'taxi', 'private hire', 'courier', 'executive', 'airport', 'events', 'scheduled service'],
    sections: [
      {
        title: 'Website and Intranet',
        items: [
          'Built Amigo VIP’s website to present its private-hire, executive transportation, and courier services.',
          'Developed the complementary intranet for the transportation project with ASP.NET and Google Maps API integration.',
          'Built the website with HTML5, CSS3, JavaScript, and Bootstrap 4, coordinating with design and marketing.'
        ]
      }
    ],
  },
  'tis-company': {
    description: 'A company specializing in end-to-end corporate and institutional event planning, marketing, BTL, and nationwide staffing services.',
    date: 'September 2018',
    type: 'Events',
    tags: ['events', 'corporate', 'institutional', 'marketing', 'social', 'general'],
    sections: [
      {
        title: 'Web Development',
        items: [
          'Built web pages with HTML5, CSS3, JavaScript, and Bootstrap 4.',
          'Coordinated with design and marketing on new developments.'
        ]
      },
      {
        title: 'Coordination and Support',
        items: [
          'Managed the systems area and supervised website development.'
        ]
      }
    ],
  },
  'tarjeta-navidad': {
    project: 'Christmas Card',
    description: 'A Christmas card created to celebrate Christmas Eve.',
    date: 'December 2018',
    type: 'Transportation',
    tags: ['card', 'Christmas', 'celebration', 'sharing', 'experiences', 'memories', 'animations', 'Christmas Eve'],
    sections: [
      {
        title: 'Digital Piece',
        items: [
          'Created a digital Christmas card to share on Christmas Eve.',
          'This case study shows several views of the final piece.'
        ]
      },
      {
        title: 'Collaboration',
        items: [
          'Across Nelica projects, collaborated with design and marketing on new developments.'
        ]
      }
    ],
  },
  'triptico-publicitario': {
    project: 'Promotional Brochure',
    description: 'A promotional brochure created for Kapital Taxi.',
    date: 'January 2019',
    type: 'Transportation',
    tags: ['brochure', 'banner', 'advertising', 'services', 'products', 'sales'],
    sections: [
      {
        title: 'Promotional Piece',
        items: [
          'Prepared a promotional brochure to present Kapital Taxi services.',
          'This case study brings together several views of the brochure.'
        ]
      },
      {
        title: 'Collaboration',
        items: [
          'Across Nelica projects, collaborated with design and marketing on new developments.'
        ]
      }
    ],
  },
};
