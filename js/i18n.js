const I18N = {
  STORAGE_KEY: "portfolio_lang",

  translations: {
    es: {
      meta: {
        title: "Guillermo Minero | Desarrollador Full Stack",
        description:
          "Portafolio de Guillermo Andrés Minero Alfaro — Desarrollador Full Stack de El Salvador. Proyectos en PHP, Angular, Laravel, Python y más.",
      },
      nav: {
        openMenu: "Abrir menú",
        home: "Inicio",
        about: "Acerca",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        scrollDown: "Desplazarse hacia abajo",
      },
      hero: {
        greeting: "Hola, soy",
        subtitle:
          'Desarrollador <strong>Full Stack</strong> egresado en Ciencias de la Computación. Con experiencia desde <strong>2022</strong>, construyo soluciones web y de escritorio desde El Salvador.',
        viewProjects: "Ver proyectos",
        getInTouch: "Contactar",
      },
      stats: {
        projects: "Proyectos en GitHub",
        technologies: "Tecnologías",
        experience: "Años de experiencia",
      },
      about: {
        tag: "Acerca de mí",
        title: "Quién soy",
        p1: 'Soy <strong>egresado de Ingeniería en Ciencias de la Computación</strong> y <strong>Programador Analista</strong> con sede en <strong>El Salvador</strong>. Llevo desarrollando software de forma constante desde <strong>2022</strong>, combinando experiencia profesional con proyectos personales en GitHub.',
        p2: "He trabajado con stacks variados: Laravel y PostgreSQL, PHP con MySQL, Angular, FastAPI, ASP.NET y aplicaciones de escritorio en C#/.NET — siempre eligiendo la tecnología adecuada para cada proyecto.",
        cta: "Trabajemos juntos",
        role: "Full Stack Developer · Egresado 2026",
        photoAlt: "Foto de perfil de Guillermo Minero",
      },
      skills: {
        tag: "Stack tecnológico",
        title: "Mis habilidades",
        frontend: "Frontend",
        frontendDesc: "HTML, CSS, JavaScript, TypeScript, Angular, SASS",
        backend: "Backend",
        backendDesc: "PHP, Laravel, Python, FastAPI, PostgreSQL, MySQL, REST APIs",
        desktop: "Desktop & .NET",
        desktopDesc: "C#, .NET, WPF, Windows Forms, ASP.NET, SQL Server",
        tools: "Herramientas",
        toolsDesc: "Git, GitHub, Bootstrap, SASS, REST APIs, Netlify",
        loading: "Detectando tecnologías desde GitHub…",
      },
      projects: {
        tag: "Portafolio",
        title: "Mis proyectos",
        descPrefix: "Se sincronizan automáticamente desde",
        descSuffix: "cada vez que visitas el sitio.",
        syncStatus: (n) => `${n} repos · tecnologías detectadas desde GitHub`,
        loading: "Sincronizando proyectos desde GitHub…",
        error: "No se pudieron cargar los proyectos. Intenta recargar la página.",
        empty: "No hay proyectos en esta categoría.",
        featured: "Destacado",
        demo: "Demo",
        github: "GitHub",
        filters: {
          featured: "Destacados",
          all: "Todos",
          web: "Web",
          backend: "Backend",
          desktop: "Desktop",
          academic: "Académico",
        },
        fallbackDesc: (lang, date) =>
          lang !== "Other"
            ? `Proyecto en ${lang} — actualizado ${date}.`
            : `Proyecto de desarrollo — actualizado ${date}.`,
      },
      contact: {
        tag: "Contacto",
        title: "¿Tienes un proyecto?",
        desc: "Escríbeme y conversemos sobre cómo puedo ayudarte.",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        submit: "Enviar mensaje",
        labels: {
          name: "Nombre",
          role: "Rol",
          location: "Ubicación",
          email: "Email",
          phone: "Teléfono",
          whatsapp: "WhatsApp",
          whatsappAction: "Enviar mensaje",
          linkedin: "LinkedIn",
          github: "GitHub",
        },
        subject: (name) => `Contacto portafolio - ${name}`,
        whatsappIntro: (name, email, msg) =>
          `Hola Guillermo, soy ${name} (${email}). ${msg}`,
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
      config: {
        title: "Desarrollador Full Stack",
        availability:
          "Egresado en Ciencias de la Computación. Disponible para proyectos freelance, colaboraciones y oportunidades laborales.",
      },
    },
    en: {
      meta: {
        title: "Guillermo Minero | Full Stack Developer",
        description:
          "Portfolio of Guillermo Andrés Minero Alfaro — Full Stack Developer from El Salvador. Projects in PHP, Angular, Laravel, Python, and more.",
      },
      nav: {
        openMenu: "Open menu",
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        scrollDown: "Scroll down",
      },
      hero: {
        greeting: "Hi, I'm",
        subtitle:
          '<strong>Full Stack Developer</strong> with a degree in Computer Science. Building web and desktop solutions from El Salvador since <strong>2022</strong>.',
        viewProjects: "View projects",
        getInTouch: "Get in touch",
      },
      stats: {
        projects: "GitHub Projects",
        technologies: "Technologies",
        experience: "Years of experience",
      },
      about: {
        tag: "About me",
        title: "Who I am",
        p1: "I'm a <strong>Computer Science graduate</strong> and <strong>Programmer Analyst</strong> based in <strong>El Salvador</strong>. I've been building software consistently since <strong>2022</strong>, combining professional experience with personal projects on GitHub.",
        p2: "I've worked with diverse stacks: Laravel and PostgreSQL, PHP with MySQL, Angular, FastAPI, ASP.NET, and desktop apps with C#/.NET — always choosing the right technology for each project.",
        cta: "Let's work together",
        role: "Full Stack Developer · Class of 2026",
        photoAlt: "Guillermo Minero profile photo",
      },
      skills: {
        tag: "Tech stack",
        title: "My skills",
        frontend: "Frontend",
        frontendDesc: "HTML, CSS, JavaScript, TypeScript, Angular, SASS",
        backend: "Backend",
        backendDesc: "PHP, Laravel, Python, FastAPI, PostgreSQL, MySQL, REST APIs",
        desktop: "Desktop & .NET",
        desktopDesc: "C#, .NET, WPF, Windows Forms, ASP.NET, SQL Server",
        tools: "Tools",
        toolsDesc: "Git, GitHub, Bootstrap, SASS, REST APIs, Netlify",
        loading: "Detecting technologies from GitHub…",
      },
      projects: {
        tag: "Portfolio",
        title: "My projects",
        descPrefix: "Automatically synced from",
        descSuffix: "every time you visit.",
        syncStatus: (n) => `${n} repos · technologies detected from GitHub`,
        loading: "Syncing projects from GitHub…",
        error: "Could not load projects. Please try refreshing the page.",
        empty: "No projects in this category.",
        featured: "Featured",
        demo: "Demo",
        github: "GitHub",
        filters: {
          featured: "Featured",
          all: "All",
          web: "Web",
          backend: "Backend",
          desktop: "Desktop",
          academic: "Academic",
        },
        fallbackDesc: (lang, date) =>
          lang !== "Other"
            ? `${lang} project — updated ${date}.`
            : `Development project — updated ${date}.`,
      },
      contact: {
        tag: "Contact",
        title: "Have a project in mind?",
        desc: "Reach out and let's talk about how I can help.",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send message",
        labels: {
          name: "Name",
          role: "Role",
          location: "Location",
          email: "Email",
          phone: "Phone",
          whatsapp: "WhatsApp",
          whatsappAction: "Send message",
          linkedin: "LinkedIn",
          github: "GitHub",
        },
        subject: (name) => `Portfolio contact - ${name}`,
        whatsappIntro: (name, email, msg) =>
          `Hi Guillermo, I'm ${name} (${email}). ${msg}`,
      },
      footer: {
        rights: "All rights reserved.",
      },
      config: {
        title: "Full Stack Developer",
        availability:
          "Computer Science graduate. Available for freelance projects, collaborations, and job opportunities.",
      },
    },
  },

  getLang() {
    return document.documentElement.lang === "en" ? "en" : "es";
  },

  detectLang() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    return "en";
  },

  t(key) {
    const lang = this.getLang();
    const keys = key.split(".");
    let value = this.translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    if (value === undefined) {
      value = this.translations.es;
      for (const k of keys) value = value?.[k];
    }
    return value ?? key;
  },

  setLang(lang) {
    if (lang !== "es" && lang !== "en") return;
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    this.apply();
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  },

  apply() {
    const lang = this.getLang();
    const t = this.translations[lang];

    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t.meta.description;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = key.split(".").reduce((o, k) => o?.[k], t);
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = key.split(".").reduce((o, k) => o?.[k], t);
      if (typeof val === "string") el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = key.split(".").reduce((o, k) => o?.[k], t);
      if (typeof val === "string") el.placeholder = val;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      const val = key.split(".").reduce((o, k) => o?.[k], t);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.classList.toggle("lang-switch__btn--active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });
  },

  init() {
    const lang = this.detectLang();
    document.documentElement.lang = lang;
    this.apply();

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => this.setLang(btn.dataset.lang));
    });
  },
};
