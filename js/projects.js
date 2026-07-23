/**
 * Metadatos opcionales por repositorio (clave = nombre exacto en GitHub).
 * Los repos nuevos aparecen solos vía API; aquí solo personalizas los que quieras.
 */
const PROJECT_OVERRIDES = {
  "conductor-ledger": {
    name: "ConductorLedger",
    description:
      "Sistema de gestión contable y ledger con Laravel 12 y PHP 8.2+. Control de registros financieros.",
    tags: ["Laravel", "PHP", "MySQL"],
    featured: true,
    category: "web",
  },
  MinexSystem: {
    name: "MinexSystem",
    description:
      "Sistema empresarial full stack en PHP para gestión interna de procesos y operaciones.",
    tags: ["PHP", "MySQL", "Full Stack"],
    featured: true,
    category: "web",
  },
  "Tienda-simplex-cars": {
    name: "Tienda Simplex Cars",
    description:
      "Tienda en línea con panel interno y vista pública para venta de accesorios automotrices.",
    tags: ["PHP", "E-commerce", "MySQL"],
    featured: true,
    category: "web",
  },
  Proyecto_libreria: {
    name: "Sistema Bibliotecario",
    description:
      "App Angular: usuarios, libros, estanterías, empleados y reservas.",
    tags: ["Angular", "TypeScript", "REST API"],
    featured: true,
    category: "web",
  },
  "LawMatch.github.io": {
    name: "LawMatch",
    description: "Plataforma web para conectar servicios legales con usuarios.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://memo124.github.io/LawMatch.github.io/",
    featured: true,
    category: "web",
  },
  "AsistenciaGraduaci-n": {
    name: "Asistencia Graduación",
    description: "Registro y control de asistencia en ceremonias de graduación.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    category: "web",
  },
  "Impresi-n-de-cheques-bancos-salvadore-os": {
    name: "Impresión de Cheques",
    description:
      "Generación e impresión de cheques conforme a formatos de bancos salvadoreños.",
    tags: ["Finanzas", "Impresión"],
    featured: true,
    category: "tools",
  },
  Crud_fastAPI: {
    name: "CRUD FastAPI",
    description: "API REST con operaciones CRUD usando Python y FastAPI.",
    tags: ["Python", "FastAPI", "REST API"],
    category: "backend",
  },
};

const LANGUAGE_COLORS = {
  PHP: "#777BB4",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  Python: "#3776AB",
  "C#": "#239120",
  "Jupyter Notebook": "#DA5B0B",
  Java: "#ED8B00",
  Other: "#8B949E",
};

const ACADEMIC_PATTERN =
  /guia|laboratorio|practica|tareas|kodigo|proyectos_c|pueba|ma101321/i;

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

function buildProjectFromRepo(repo) {
  const override = PROJECT_OVERRIDES[repo.name] || {};
  const language = repo.language || "Other";
  const demo =
    override.demo ||
    repo.homepage ||
    (repo.name.endsWith(".github.io")
      ? `https://memo124.github.io/${repo.name}/`
      : null);

  return {
    id: repo.name,
    name: override.name || formatRepoName(repo.name),
    description:
      override.description ||
      repo.description ||
      `Proyecto ${language !== "Other" ? `en ${language}` : "de desarrollo"} — actualizado ${new Date(repo.updated_at).toLocaleDateString("es-SV", { month: "short", year: "numeric" })}.`,
    language,
    tags: override.tags || (language !== "Other" ? [language] : ["GitHub"]),
    github: repo.html_url,
    demo,
    featured: Boolean(override.featured),
    category: override.category || detectCategory(repo),
    updatedAt: repo.updated_at,
  };
}
