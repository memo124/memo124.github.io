/**
 * Metadatos opcionales por repositorio (clave = nombre exacto en GitHub).
 */
const PROJECT_OVERRIDES = {
  "conductor-ledger": {
    name: "ConductorLedger",
    description: {
      es: "Sistema financiero para conductores de plataformas: viajes, gastos y vehículos. Laravel 12 + PostgreSQL.",
      en: "Financial system for platform drivers: trips, expenses, and vehicles. Laravel 12 + PostgreSQL.",
    },
    featured: true,
    category: "web",
  },
  MinexSystem: {
    name: "MinexSystem",
    description: {
      es: "Sistema empresarial full stack en PHP con PostgreSQL para gestión interna de operaciones.",
      en: "Full stack business system in PHP with PostgreSQL for internal operations management.",
    },
    featured: true,
    category: "web",
  },
  "Tienda-simplex-cars": {
    name: "Tienda Simplex Cars",
    description: {
      es: "Tienda en línea con panel interno y vista pública para venta de accesorios automotrices.",
      en: "Online store with admin panel and public storefront for automotive accessories.",
    },
    featured: true,
    category: "web",
  },
  Proyecto_libreria: {
    name: { es: "Sistema Bibliotecario", en: "Library System" },
    description: {
      es: "App Angular 15 con Bootstrap: usuarios, libros, estanterías, empleados y reservas.",
      en: "Angular 15 app with Bootstrap: users, books, shelves, staff, and reservations.",
    },
    featured: true,
    category: "web",
  },
  "LawMatch.github.io": {
    name: "LawMatch",
    description: {
      es: "Plataforma web para conectar servicios legales con usuarios.",
      en: "Web platform connecting legal services with users.",
    },
    demo: "https://celebrated-beignet-6512eb.netlify.app/",
    featured: true,
    category: "web",
  },
  "AsistenciaGraduaci-n": {
    name: { es: "Asistencia Graduación", en: "Graduation Attendance" },
    description: {
      es: "Registro y control de asistencia en ceremonias de graduación.",
      en: "Registration and attendance tracking for graduation ceremonies.",
    },
    featured: true,
    category: "web",
  },
  "Impresi-n-de-cheques-bancos-salvadore-os": {
    name: { es: "Impresión de Cheques", en: "Check Printing" },
    description: {
      es: "Generación e impresión de cheques conforme a formatos de bancos salvadoreños.",
      en: "Check generation and printing compliant with Salvadoran bank formats.",
    },
    featured: true,
    category: "tools",
  },
  Crud_fastAPI: {
    name: "CRUD FastAPI",
    description: {
      es: "API REST con operaciones CRUD usando Python y FastAPI.",
      en: "REST API with CRUD operations using Python and FastAPI.",
    },
    category: "backend",
  },
};

const LANGUAGE_COLORS = {
  PHP: "#777BB4",
  Laravel: "#FF2D20",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#663399",
  Python: "#3776AB",
  "C#": "#239120",
  "Jupyter Notebook": "#DA5B0B",
  Java: "#ED8B00",
  PostgreSQL: "#4169E1",
  Other: "#8B949E",
};

const LANG_TO_TAG = {
  PHP: "PHP",
  Blade: "Laravel",
  Hack: "PHP",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  HTML: "HTML",
  CSS: "CSS",
  SCSS: "SASS",
  Python: "Python",
  "C#": "C#",
  "Jupyter Notebook": "Jupyter",
  Java: "Java",
  PLpgSQL: "PostgreSQL",
  TSQL: "SQL Server",
  "ASP.NET": "ASP.NET",
  PowerShell: "PowerShell",
  Nix: "Nix",
};

const ACADEMIC_PATTERN =
  /guia|laboratorio|practica|tareas|kodigo|proyectos_c|pueba|ma101321/i;

const COMPOSER_TECH = {
  "laravel/framework": "Laravel",
  "laravel/sanctum": "Laravel",
  "symfony/symfony": "Symfony",
  "slim/slim": "Slim",
};

const PACKAGE_TECH = {
  "@angular/core": "Angular",
  react: "React",
  vue: "Vue.js",
  bootstrap: "Bootstrap",
  tailwindcss: "Tailwind CSS",
  fastapi: "FastAPI",
  express: "Express",
  "ngx-bootstrap": "Bootstrap",
};

function getLocale() {
  return typeof I18N !== "undefined" ? I18N.getLang() : "es";
}

function pickLocalized(value, lang) {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof value === "object") return value[lang] || value.es || value.en;
  return null;
}

function formatRepoName(name) {
  return name
    .replace(/\.github\.io$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function detectCategory(repo) {
  const name = repo.name;
  const lang = repo.language || "";

  if (ACADEMIC_PATTERN.test(name)) return "academic";
  if (lang === "C#" || /wpf|windowsform|windows_form/i.test(name)) return "desktop";
  if (lang === "Python" || /fastapi|crud/i.test(name)) return "backend";
  if (/cheques|ledger|impresi/i.test(name)) return "tools";
  return "web";
}

function getPrimaryLanguage(languages, fallback) {
  const entries = Object.entries(languages || {});
  if (entries.length === 0) return fallback || "Other";
  entries.sort((a, b) => b[1] - a[1]);
  const top = entries[0][0];
  if (top === "Blade") return "Laravel";
  if (top === "PLpgSQL") return "PostgreSQL";
  return top;
}

function extractComposerTech(composer) {
  const tags = new Set();
  if (!composer) return tags;

  (composer.keywords || []).forEach((kw) => {
    const k = kw.toLowerCase();
    if (k.includes("laravel")) tags.add("Laravel");
    if (k.includes("postgresql") || k.includes("postgres")) tags.add("PostgreSQL");
    if (k.includes("mysql")) tags.add("MySQL");
    if (k.includes("fastapi")) tags.add("FastAPI");
  });

  Object.keys(composer.require || {}).forEach((pkg) => {
    if (COMPOSER_TECH[pkg]) tags.add(COMPOSER_TECH[pkg]);
  });

  return tags;
}

function extractPackageTech(pkg) {
  const tags = new Set();
  if (!pkg) return tags;

  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  Object.keys(deps).forEach((name) => {
    if (PACKAGE_TECH[name]) tags.add(PACKAGE_TECH[name]);
    if (name.startsWith("@angular/")) tags.add("Angular");
  });

  return tags;
}

function extractRequirementsTech(text) {
  const tags = new Set();
  if (!text) return tags;
  const lower = text.toLowerCase();
  if (lower.includes("fastapi")) tags.add("FastAPI");
  if (lower.includes("django")) tags.add("Django");
  if (lower.includes("flask")) tags.add("Flask");
  if (lower.includes("psycopg")) tags.add("PostgreSQL");
  if (lower.includes("mysql")) tags.add("MySQL");
  if (lower.includes("sqlalchemy")) tags.add("SQLAlchemy");
  return tags;
}

async function fetchRawJson(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch (_) {
      /* try next branch */
    }
  }
  return null;
}

async function fetchRepoManifestTech(username, repoName) {
  const base = `https://raw.githubusercontent.com/${username}/${repoName}`;
  const extra = new Set();

  const composer = await fetchRawJson([
    `${base}/main/composer.json`,
    `${base}/master/composer.json`,
  ]);
  extractComposerTech(composer).forEach((t) => extra.add(t));

  const pkg = await fetchRawJson([
    `${base}/main/package.json`,
    `${base}/master/package.json`,
  ]);
  extractPackageTech(pkg).forEach((t) => extra.add(t));

  for (const file of ["requirements.txt", "pyproject.toml"]) {
    for (const branch of ["main", "master"]) {
      try {
        const res = await fetch(`${base}/${branch}/${file}`);
        if (res.ok) {
          extractRequirementsTech(await res.text()).forEach((t) => extra.add(t));
          break;
        }
      } catch (_) {
        /* continue */
      }
    }
  }

  return extra;
}

function languagesToTags(languages, manifestTags) {
  const sorted = Object.entries(languages || {}).sort((a, b) => b[1] - a[1]);
  const tags = [];

  sorted.forEach(([lang]) => {
    const tag = LANG_TO_TAG[lang] || lang;
    if (!tags.includes(tag)) tags.push(tag);
  });

  (manifestTags || []).forEach((tag) => {
    if (!tags.includes(tag)) tags.push(tag);
  });

  return tags.slice(0, 8);
}

function formatProjectDate(isoDate, lang) {
  const locale = lang === "en" ? "en-US" : "es-SV";
  return new Date(isoDate).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
}

function buildFallbackDescription(repo, language, lang) {
  const date = formatProjectDate(repo.updated_at, lang);
  if (typeof I18N !== "undefined") {
    return I18N.translations[lang].projects.fallbackDesc(language, date);
  }
  return lang === "en"
    ? `${language} project — updated ${date}.`
    : `Proyecto en ${language} — actualizado ${date}.`;
}

function buildProjectFromRepo(repo, languages, manifestTags) {
  const override = PROJECT_OVERRIDES[repo.name] || {};
  const lang = getLocale();
  const language = getPrimaryLanguage(languages, repo.language);
  const tags = override.tags || languagesToTags(languages, manifestTags);

  const descriptions = {
    es:
      pickLocalized(override.description, "es") ||
      (lang === "es" ? repo.description : null) ||
      buildFallbackDescription(repo, language, "es"),
    en:
      pickLocalized(override.description, "en") ||
      (lang === "en" ? repo.description : null) ||
      buildFallbackDescription(repo, language, "en"),
  };

  const demo =
    override.demo ||
    repo.homepage ||
    (repo.name.endsWith(".github.io")
      ? `https://memo124.github.io/${repo.name}/`
      : null);

  return {
    id: repo.name,
    name: pickLocalized(override.name, lang) || formatRepoName(repo.name),
    names: {
      es: pickLocalized(override.name, "es") || formatRepoName(repo.name),
      en: pickLocalized(override.name, "en") || formatRepoName(repo.name),
    },
    descriptions,
    description: descriptions[lang],
    language,
    tags,
    github: repo.html_url,
    demo,
    featured: Boolean(override.featured),
    category: override.category || detectCategory(repo),
    updatedAt: repo.updated_at,
  };
}

function localizeProject(project, lang) {
  return {
    ...project,
    name: project.names?.[lang] || project.name,
    description: project.descriptions?.[lang] || project.description,
  };
}

function getExperienceYears() {
  return Math.max(1, new Date().getFullYear() - CONFIG.careerStartYear);
}
