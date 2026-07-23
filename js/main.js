(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav__link");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectsGrid = document.getElementById("projectsGrid");
  const projectsLoading = document.getElementById("projectsLoading");
  const projectsStatus = document.getElementById("projectsStatus");
  const contactInfo = document.getElementById("contactInfo");
  const contactForm = document.getElementById("contactForm");
  const yearEl = document.getElementById("year");
  const statsProjects = document.getElementById("statsProjects");
  const statsTech = document.getElementById("statsTech");
  const statsExperience = document.getElementById("statsExperience");
  const skillsTags = document.getElementById("skillsTags");

  let allProjects = [];
  let currentFilter = "featured";
  let statsAnimated = false;

  const CACHE_KEY = `portfolio_github_v2_${CONFIG.githubUsername}`;

  /* ── Navigation ── */
  function closeMenu() {
    navMenu.classList.remove("nav__menu--open");
    navToggle.classList.remove("nav__toggle--active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("nav__menu--open");
    navToggle.classList.toggle("nav__toggle--active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  });

  const sections = document.querySelectorAll("section[id]");
  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "nav__link--active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((sec) => observerNav.observe(sec));

  const observerReveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observerReveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  function observeReveal(el) {
    if (el.classList.contains("reveal")) observerReveal.observe(el);
  }

  document.querySelectorAll(".reveal").forEach(observeReveal);

  /* ── Contact info ── */
  function renderContactInfo() {
    if (!contactInfo || !CONFIG.contact) return;

    const c = CONFIG.contact;
    const lang = I18N.getLang();
    const labels = I18N.translations[lang].contact.labels;
    const cfg = I18N.translations[lang].config;
    const items = [];

    if (c.fullName) {
      items.push({ icon: "user", label: labels.name, text: c.fullName, href: null });
    }
    if (cfg.title) {
      items.push({ icon: "briefcase", label: labels.role, text: cfg.title, href: null });
    }
    if (c.location) {
      items.push({ icon: "location", label: labels.location, text: c.location, href: null });
    }
    if (c.email) {
      items.push({ icon: "email", label: labels.email, text: c.email, href: `mailto:${c.email}` });
    }
    if (c.phone) {
      items.push({
        icon: "phone",
        label: labels.phone,
        text: c.phone,
        href: `tel:${c.phone.replace(/\s/g, "")}`,
      });
    }
    if (c.whatsapp) {
      items.push({
        icon: "whatsapp",
        label: labels.whatsapp,
        text: labels.whatsappAction,
        href: `https://wa.me/${c.whatsapp}`,
        external: true,
      });
    }
    if (c.linkedin) {
      items.push({
        icon: "linkedin",
        label: labels.linkedin,
        text: "linkedin.com/in/guillermo-minero",
        href: c.linkedin,
        external: true,
      });
    }
    if (c.github) {
      items.push({
        icon: "github",
        label: labels.github,
        text: "github.com/memo124",
        href: c.github,
        external: true,
      });
    }

    const icons = {
      user: '<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>',
      briefcase:
        '<path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm4 4V4h-4v2h4z"/>',
      location:
        '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>',
      email:
        '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
      phone:
        '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>',
      whatsapp:
        '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
      linkedin:
        '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
      github:
        '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
    };

    contactInfo.innerHTML = items
      .map((item) => {
        const svg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${icons[item.icon]}</svg>`;
        const inner = `<span class="contact__link-label">${item.label}</span><span class="contact__link-text">${item.text}</span>`;

        if (item.href) {
          const ext = item.external ? ' target="_blank" rel="noopener noreferrer"' : "";
          return `<a href="${item.href}" class="contact__link"${ext}>${svg}<span class="contact__link-content">${inner}</span></a>`;
        }
        return `<div class="contact__link contact__link--static">${svg}<span class="contact__link-content">${inner}</span></div>`;
      })
      .join("");

    if (cfg.availability) {
      contactInfo.insertAdjacentHTML(
        "beforeend",
        `<p class="contact__availability">${cfg.availability}</p>`
      );
    }
  }

  /* ── GitHub API con caché ── */
  function readCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { timestamp, projects } = JSON.parse(raw);
      if (Date.now() - timestamp > CONFIG.cacheTtlMs) return null;
      return projects;
    } catch {
      return null;
    }
  }

  function writeCache(projects) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), projects })
      );
    } catch {
      /* quota exceeded — ignore */
    }
  }

  async function fetchRepoLanguages(username, repoName) {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/languages`
    );
    return res.ok ? res.json() : {};
  }

  async function enrichRepo(repo) {
    const username = CONFIG.githubUsername;
    const [languages, manifestTags] = await Promise.all([
      fetchRepoLanguages(username, repo.name),
      fetchRepoManifestTech(username, repo.name),
    ]);
    return buildProjectFromRepo(repo, languages, [...manifestTags]);
  }

  async function fetchGitHubProjects() {
    const cached = readCache();
    if (cached) return cached;

    const url = `https://api.github.com/users/${CONFIG.githubUsername}/repos?per_page=100&sort=updated`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);

    const repos = await response.json();
    const filtered = repos
      .filter((repo) => !CONFIG.excludedRepos.includes(repo.name))
      .filter((repo) => !CONFIG.excludeForks || !repo.fork);

    const batchSize = 5;
    const projects = [];

    for (let i = 0; i < filtered.length; i += batchSize) {
      const batch = filtered.slice(i, i + batchSize);
      const enriched = await Promise.all(batch.map(enrichRepo));
      projects.push(...enriched);
    }

    projects.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    writeCache(projects);
    return projects;
  }

  function collectUniqueTechnologies(projects) {
    const techs = new Set();
    projects.forEach((p) => p.tags.forEach((t) => techs.add(t)));
    const locale = I18N.getLang() === "en" ? "en" : "es";
    return [...techs].sort((a, b) => a.localeCompare(b, locale));
  }

  function renderSkillsTags(technologies) {
    if (!skillsTags) return;
    skillsTags.innerHTML = technologies
      .map((tech) => `<span class="skill-tag">${tech}</span>`)
      .join("");
  }

  function createProjectCard(project) {
    const p = localizeProject(project, I18N.getLang());
    const color = LANGUAGE_COLORS[p.language] || LANGUAGE_COLORS.Other;
    const card = document.createElement("article");
    card.className = `project-card reveal${p.featured ? " project-card--featured" : ""}`;
    card.dataset.category = p.category;

    const tagsHtml = p.tags
      .map((tag) => `<span class="project-card__tag">${tag}</span>`)
      .join("");

    const demoBtn = p.demo
      ? `<a href="${p.demo}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">${I18N.t("projects.demo")}</a>`
      : "";

    card.innerHTML = `
      <div class="project-card__header" style="--lang-color: ${color}">
        <span class="project-card__lang">${p.language}</span>
        ${p.featured ? `<span class="project-card__badge">${I18N.t("projects.featured")}</span>` : ""}
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.name}</h3>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tags">${tagsHtml}</div>
      </div>
      <div class="project-card__footer">
        <a href="${p.github}" class="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          ${I18N.t("projects.github")}
        </a>
        ${demoBtn}
      </div>
    `;

    return card;
  }

  function renderProjects(filter) {
    currentFilter = filter;
    projectsGrid.innerHTML = "";

    const filtered =
      filter === "all"
        ? allProjects
        : filter === "featured"
        ? allProjects.filter((p) => p.featured)
        : allProjects.filter((p) => p.category === filter);

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `<p class="projects__empty">${I18N.t("projects.empty")}</p>`;
      return;
    }

    filtered.forEach((project, i) => {
      const card = createProjectCard(project);
      card.style.transitionDelay = `${(i % 6) * 0.07}s`;
      projectsGrid.appendChild(card);
      observeReveal(card);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");
      renderProjects(btn.dataset.filter);
    });
  });

  function updateStatsValues(projectCount, techCount) {
    const expYears = getExperienceYears();

    if (statsProjects) statsProjects.dataset.count = projectCount;
    if (statsTech) statsTech.dataset.count = techCount;
    if (statsExperience) statsExperience.dataset.count = expYears;

    if (statsAnimated) {
      if (statsProjects) statsProjects.textContent = projectCount;
      if (statsTech) statsTech.textContent = techCount;
      if (statsExperience) statsExperience.textContent = expYears;
    }
  }

  function updateProjectsStatus() {
    if (projectsStatus && allProjects.length) {
      projectsStatus.textContent = I18N.translations[I18N.getLang()].projects.syncStatus(
        allProjects.length
      );
    }
  }

  async function loadProjects() {
    try {
      allProjects = await fetchGitHubProjects();
      const technologies = collectUniqueTechnologies(allProjects);

      if (projectsLoading) projectsLoading.hidden = true;
      updateProjectsStatus();

      updateStatsValues(allProjects.length, technologies.length);
      renderSkillsTags(technologies);
      renderProjects(currentFilter);
      runStatsAnimationIfVisible();
    } catch (err) {
      console.error(err);
      if (projectsLoading) {
        projectsLoading.innerHTML = `<p class="projects__error">${I18N.t("projects.error")}</p>`;
      }
    }
  }

  /* ── Stats counter ── */
  function animateCounter(el, target) {
    if (!el || target <= 0) {
      if (el) el.textContent = target;
      return;
    }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 30);
  }

  function runStatsAnimation() {
    if (statsAnimated) return;
    statsAnimated = true;

    document.querySelectorAll("[data-count]").forEach((el) => {
      animateCounter(el, parseInt(el.dataset.count, 10) || 0);
    });
  }

  function runStatsAnimationIfVisible() {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (visible) runStatsAnimation();
  }

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && allProjects.length > 0) {
          runStatsAnimation();
          statsObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".stats");
  if (statsSection) statsObserver.observe(statsSection);

  /* ── Contact form ── */
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (CONFIG.contact.email) {
        const subject = encodeURIComponent(I18N.translations[I18N.getLang()].contact.subject(name));
        const body = encodeURIComponent(
          `Nombre: ${name}\nEmail: ${email}\n\n${message}`
        );
        window.location.href = `mailto:${CONFIG.contact.email}?subject=${subject}&body=${body}`;
      } else if (CONFIG.contact.whatsapp) {
        const waText = encodeURIComponent(
          I18N.translations[I18N.getLang()].contact.whatsappIntro(name, email, message)
        );
        window.open(
          `https://wa.me/${CONFIG.contact.whatsapp}?text=${waText}`,
          "_blank",
          "noopener,noreferrer"
        );
      } else {
        window.open(CONFIG.contact.linkedin, "_blank", "noopener,noreferrer");
      }

      contactForm.reset();
    });
  }

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (statsExperience) {
    statsExperience.dataset.count = getExperienceYears();
  }

  I18N.init();

  window.addEventListener("languagechange", () => {
    renderContactInfo();
    updateProjectsStatus();
    if (allProjects.length) renderProjects(currentFilter);
  });

  renderContactInfo();
  loadProjects();
})();
