/**
 * Stack tecnológico del CV — categorías e items con descripción bilingüe.
 */
const TECH_STACK = [
  {
    id: "languages",
    items: [
      {
        name: "C#",
        desc: {
          es: "Desarrollo backend y creación de servicios en entorno .NET.",
          en: "Backend development and service creation in the .NET ecosystem.",
        },
      },
      {
        name: "PHP",
        desc: {
          es: "Experiencia con versiones 5.x, 7.x y 8.x.",
          en: "Experience with versions 5.x, 7.x, and 8.x.",
        },
      },
      {
        name: "JavaScript",
        desc: {
          es: "Desarrollo web interactivo para frontend y backend.",
          en: "Interactive web development for frontend and backend.",
        },
      },
      {
        name: "TypeScript",
        desc: {
          es: "Desarrollo web y móvil con frameworks modernos.",
          en: "Web and mobile development with modern frameworks.",
        },
      },
      {
        name: "HTML / HTML5",
        desc: {
          es: "Estructuración y maquetación web.",
          en: "Web structure and layout markup.",
        },
      },
      {
        name: "CSS / CSS3",
        desc: {
          es: "Estilizado y diseño visual de aplicaciones web.",
          en: "Styling and visual design of web applications.",
        },
      },
      {
        name: "SQL",
        desc: {
          es: "Creación, migración y optimización de consultas en bases de datos relacionales.",
          en: "Creation, migration, and optimization of relational database queries.",
        },
      },
    ],
  },
  {
    id: "frontend",
    items: [
      {
        name: "Angular",
        desc: {
          es: "Experiencia comprobada con versiones V9 a V16 (incluyendo Angular 13).",
          en: "Proven experience with versions V9 through V16 (including Angular 13).",
        },
      },
      {
        name: "React Native + Expo",
        desc: {
          es: "Desarrollo de aplicaciones híbridas para iOS y Android.",
          en: "Hybrid app development for iOS and Android.",
        },
      },
      {
        name: "jQuery",
        desc: {
          es: "Manipulación del DOM y dinamismo en páginas web.",
          en: "DOM manipulation and dynamic behavior in web pages.",
        },
      },
      {
        name: "RxJS",
        desc: {
          es: "Programación reactiva para la gestión de flujos de datos.",
          en: "Reactive programming for data stream management.",
        },
      },
      {
        name: "Bootstrap",
        desc: {
          es: "Diseños web adaptativos y responsive.",
          en: "Adaptive and responsive web layouts.",
        },
      },
      {
        name: "PrimeNG",
        desc: {
          es: "Librería de componentes de UI para Angular.",
          en: "UI component library for Angular.",
        },
      },
    ],
  },
  {
    id: "backend",
    items: [
      {
        name: "ASP.NET Core / ASP.NET Framework",
        desc: {
          es: "Construcción de arquitecturas backend y APIs robustas.",
          en: "Building robust backend architectures and APIs.",
        },
      },
      {
        name: "Laravel",
        desc: {
          es: "Framework de PHP (Laravel 7+) para desarrollo de aplicaciones web.",
          en: "PHP framework (Laravel 7+) for web application development.",
        },
      },
      {
        name: "Entity Framework & ADO.NET",
        desc: {
          es: "Mapeo objeto-relacional (ORM) y acceso a datos en .NET.",
          en: "Object-relational mapping (ORM) and data access in .NET.",
        },
      },
      {
        name: "Eloquent ORM",
        desc: {
          es: "Manejo e integración de modelos de datos en Laravel.",
          en: "Data model management and integration in Laravel.",
        },
      },
      {
        name: "JWT",
        desc: {
          es: "Implementación de esquemas de autenticación y autorización segura.",
          en: "Secure authentication and authorization scheme implementation.",
        },
      },
      {
        name: "WebHooks",
        desc: {
          es: "Integración y comunicación orientada a eventos.",
          en: "Event-driven integration and communication.",
        },
      },
      {
        name: "Servicios de Windows",
        desc: {
          es: "Desarrollo de servicios automáticos e impresión directa en segundo plano.",
          en: "Automatic background services and direct printing agents.",
        },
      },
    ],
  },
  {
    id: "databases",
    items: [
      {
        name: "SQL Server",
        desc: {
          es: "Diseño, optimización, migración de datos y modelado de esquemas.",
          en: "Design, optimization, data migration, and schema modeling.",
        },
      },
      {
        name: "MySQL",
        desc: {
          es: "Mantenimiento y consulta de bases de datos relacionales.",
          en: "Maintenance and querying of relational databases.",
        },
      },
      {
        name: "PostgreSQL",
        desc: {
          es: "Bases de datos relacionales avanzadas en proyectos Laravel y PHP.",
          en: "Advanced relational databases in Laravel and PHP projects.",
        },
      },
      {
        name: "Firestore",
        desc: {
          es: "Base de datos NoSQL para sincronización en tiempo real.",
          en: "NoSQL database for real-time synchronization.",
        },
      },
    ],
  },
  {
    id: "cloud",
    items: [
      {
        name: "Google AI / Gemini AI",
        desc: {
          es: "Integración para resúmenes automáticos y análisis inteligente de casos.",
          en: "Integration for automatic summaries and intelligent case analysis.",
        },
      },
      {
        name: "Firebase",
        desc: {
          es: "Manejo de Firestore Storage y Firebase Authentication.",
          en: "Firestore Storage and Firebase Authentication management.",
        },
      },
      {
        name: "Google Cloud Platform",
        desc: {
          es: "Despliegue con Cloud SQL, App Engine y Máquinas Virtuales.",
          en: "Deployment with Cloud SQL, App Engine, and Virtual Machines.",
        },
      },
      {
        name: "Netlify",
        desc: {
          es: "Despliegue y alojamiento de aplicaciones web.",
          en: "Web application deployment and hosting.",
        },
      },
      {
        name: "GoDaddy",
        desc: {
          es: "Configuración e implementación de proyectos web en producción.",
          en: "Configuration and deployment of web projects in production.",
        },
      },
    ],
  },
  {
    id: "devops",
    items: [
      {
        name: "Git & GitHub",
        desc: {
          es: "Control de versiones distribuido y flujo de trabajo colaborativo.",
          en: "Distributed version control and collaborative workflows.",
        },
      },
      {
        name: "NPM & Composer",
        desc: {
          es: "Gestores de paquetes para Node/JS y PHP.",
          en: "Package managers for Node/JS and PHP.",
        },
      },
      {
        name: "IIS",
        desc: {
          es: "Configuración y administración de servidores web Windows.",
          en: "Configuration and administration of Windows web servers.",
        },
      },
      {
        name: "Linux",
        desc: {
          es: "Configuración de entorno y servicios en servidores.",
          en: "Environment setup and services on Linux servers.",
        },
      },
    ],
  },
  {
    id: "architecture",
    items: [
      {
        name: "Onion Architecture",
        desc: {
          es: "Diseño de software modular, mantenible y desacoplado.",
          en: "Modular, maintainable, and decoupled software design.",
        },
      },
      {
        name: "MVC",
        desc: {
          es: "Patrón Model-View-Controller para separación de responsabilidades.",
          en: "Model-View-Controller pattern for separation of concerns.",
        },
      },
      {
        name: "Scrum",
        desc: {
          es: "Scrum Developer Professional Certificate — metodologías ágiles.",
          en: "Scrum Developer Professional Certificate — agile methodologies.",
        },
      },
    ],
  },
];

function getCvTechCount() {
  return TECH_STACK.reduce((total, category) => total + category.items.length, 0);
}

function getAllCvTechNames() {
  return TECH_STACK.flatMap((category) => category.items.map((item) => item.name));
}
