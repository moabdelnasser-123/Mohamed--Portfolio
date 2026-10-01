/* ============================================================
   MOHAMED ABD ELNASSER | PORTFOLIO SCRIPT
   ============================================================ */

/* ---------- DATA: PROFILE LINKS ---------- */
/* Fill in your GitHub URL below and it updates everywhere on the site. */
const siteLinks = {
  email: "mabdelnasser367@gmail.com",
  github: "https://github.com/moabdelnasser-123",
  linkedin: "https://www.linkedin.com/in/mohamed-abdelnasser-dev7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  whatsapp: "https://wa.me/201070121706",
  whatsappDisplay: "+20 107 012 1706",
  whatsappNumber: "01070121706"
};

/* ---------- DATA: SKILLS ---------- */
/* Each skill can define either a `badge` (colored brand-style mark) or an `icon` (monoline SVG). */
const skills = [
  {
    name: "C#",
    description: "Primary backend language: OOP, LINQ, and clean, maintainable code.",
    badge: { bg: "#68217A", text: "C#" }
  },
  {
    name: "OOP",
    description: "Encapsulation, inheritance, and polymorphism applied to real data models.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M12 8.4V13m0 0-4.6 3M12 13l4.6 3"/></svg>`
  },
  {
    name: "ASP.NET Core",
    description: "Building scalable, cross-platform backend services and applications.",
    badge: { bg: "#512BD4", text: ".NET" }
  },
  {
    name: "ASP.NET Core MVC",
    description: "Structuring web apps with clear separation of models, views, and controllers.",
    badge: { bg: "#512BD4", text: "MVC" }
  },
  {
    name: "Web API",
    description: "Designing predictable REST endpoints for client and service consumption.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"/></svg>`
  },
  {
    name: "Entity Framework Core",
    description: "Modeling relational data and configuring relationships via the Fluent API.",
    badge: { bg: "#0F9D9D", text: "EF" }
  },
  {
    name: "SQL Server",
    description: "Writing advanced queries, joins, and CRUD operations on relational data.",
    badge: { bg: "#CC2927", text: "SQL" }
  },
  {
    name: "HTML &amp; CSS",
    description: "Front-end foundations for building responsive, accessible interfaces.",
    badge: { bg: "linear-gradient(135deg, #E44D26 50%, #264DE4 50%)", text: "&lt;/&gt;" }
  },
  {
    name: "JavaScript",
    description: "Adding interactivity and dynamic behavior on the client side.",
    badge: { bg: "#F0DB4F", text: "JS", dark: true }
  },
  {
    name: "Git &amp; GitHub",
    description: "Version control and collaborative workflows for team-based development.",
    badge: { bg: "#24292F", text: "Git" }
  }
];

/* ---------- DATA: CERTIFICATES ---------- */
/* Add a new object here and the card appears automatically (or use the "Manage Content" button on the site).
   `link` can point to a local image (assets/certificates/...), a PDF, or an external URL. */
const certificates = [
  {
    title: "Foundational C# with Microsoft",
    organization: "freeCodeCamp & Microsoft",
    date: "Aug 2026",
    description: "Developer certification covering C# fundamentals, issued jointly by freeCodeCamp and Microsoft's Developer Division.",
    link: "assets/certificates/freecodecamp-foundational-csharp.jpg"
  },
  {
    title: "SQL (Intermediate)",
    organization: "HackerRank",
    date: "Sep 2026",
    description: "Certified for intermediate SQL proficiency, including joins, subqueries, and aggregate operations.",
    link: "assets/certificates/hackerrank-sql-intermediate.jpg"
  },
  {
    title: "SQL (Basic)",
    organization: "HackerRank",
    date: "Sep 2026",
    description: "Certified for foundational SQL skills: querying, filtering, and basic relational operations.",
    link: "assets/certificates/hackerrank-sql-basic.jpg"
  },
  {
    title: "Freelancing Basics",
    organization: "Information Technology Institute (ITI)",
    date: "Sep 2026",
    description: "Completed the ITI Mahara-Tech course on the fundamentals of working as a freelance developer.",
    link: "assets/certificates/iti-freelancing-basics.jpg"
  },
  {
    title: "Full-Stack .NET Development Track",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "In Progress | 2026",
    description: "144-hour intensive track covering C#, ASP.NET Core MVC, Entity Framework, SQL Server, and building custom AI agents with Generative AI.",
    link: "#"
  },
  {
    title: "Full-Stack .NET Development Track",
    organization: "Information Technology Institute (ITI)",
    date: "Completed",
    description: "Foundational and applied training in backend web development using the .NET stack, alongside front-end fundamentals.",
    link: "#"
  }
];

/* ---------- DATA: PROJECTS ---------- */
/* Add a new object here and the card appears automatically.
   Leave github / demo as "#" until the links are ready. `image` is optional. */
const projects = [
  {
    title: "Restaurant Management Dashboard",
    description: "A full-stack restaurant management dashboard with complete CRUD operations, relational data models, and dynamic statistics across menu items, customers, orders, reservations, and employees.",
    technologies: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    github: "#",
    demo: "#",
    image: "assets/restu.png"
  },
  {
    title: "Restaurant Database Management System",
    description: "A relational database designed to model restaurant operations end to end, with multi-table joins and SQL queries for reliable data retrieval and management.",
    technologies: ["SQL Server", "Relational Modeling", "T-SQL"],
    github: "#",
    demo: "#",
    image: ""
  }
];

/* ---------- DATA: TESTIMONIALS ---------- */
/* Replace these with real quotes from a mentor, instructor, or teammate. */
const testimonials = [
  {
    name: "Add a name",
    role: "Add their role (e.g. Instructor, Teammate)",
    quote: "Add a short quote about working with you here."
  },
  {
    name: "Add a name",
    role: "Add their role (e.g. Instructor, Teammate)",
    quote: "Add a short quote about working with you here."
  }
];

/* ---------- HELPERS ---------- */
const isPending = (url) => !url || url === "#";

function linkAttrs(url) {
  if (isPending(url)) return `href="#" aria-disabled="true" title="Link coming soon"`;
  return `href="${url}" target="_blank" rel="noopener noreferrer"`;
}

const pad = (n) => String(n + 1).padStart(2, "0");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover)").matches;

/* ---------- RENDER: SKILLS ---------- */
function skillMark(skill) {
  if (skill.badge) {
    const style = `background:${skill.badge.bg};${skill.badge.dark ? "color:#051018;text-shadow:none;" : ""}`;
    return `<span class="skill-badge" style="${style}">${skill.badge.text}</span>`;
  }
  return `<span class="icon-box">${skill.icon || ""}</span>`;
}

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = skills.map((skill, i) => `
    <article class="skill-card">
      <div class="skill-top">
        ${skillMark(skill)}
        <span class="skill-num">${pad(i)}</span>
      </div>
      <h3 class="skill-name">${skill.name}</h3>
      <p class="skill-desc">${skill.description}</p>
    </article>
  `).join("");
}

/* ---------- RENDER: CERTIFICATES ---------- */
const isImageLink = (url) => /\.(jpe?g|png|webp|gif)$/i.test(url || "");

function renderCertificates() {
  document.getElementById("certificatesGrid").innerHTML = certificates.map((cert, i) => `
    <article class="cert-card">
      <div class="cert-top">
        <span class="icon-box"><svg><use href="#i-award"/></svg></span>
        <span class="cert-badge${/progress/i.test(cert.date) ? " is-progress" : ""}">${cert.date}</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-org">${cert.organization}</p>
      <p class="cert-desc">${cert.description}</p>
      ${
        isImageLink(cert.link)
          ? `<button type="button" class="btn-small" data-cert-preview="${i}">View Certificate <svg><use href="#i-external"/></svg></button>`
          : `<a class="btn-small" ${linkAttrs(cert.link)}>View Certificate <svg><use href="#i-external"/></svg></a>`
      }
    </article>
  `).join("");

  document.querySelectorAll("[data-cert-preview]").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(certificates[Number(btn.dataset.certPreview)]));
  });
}

/* ---------- CERTIFICATE LIGHTBOX ---------- */
function openLightbox(cert) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = cert.link;
  img.alt = `${cert.title} certificate`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.hidden = true;
  document.getElementById("lightboxImg").src = "";
  document.body.style.overflow = "";
}
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
}

/* ---------- RENDER: PROJECTS ---------- */
function projectMedia(project) {
  if (project.image) {
    return `<div class="project-media"><img src="${project.image}" alt="${project.title} preview" loading="lazy"></div>`;
  }
  return `
    <div class="project-media" aria-hidden="true">
      <div class="mock">
        <div class="mock-dots"><i></i><i></i><i></i></div>
        <div class="mock-row"><b style="width:34%"></b><b style="width:18%"></b></div>
        <div class="mock-row"><b style="width:62%"></b></div>
        <div class="mock-row"><b style="width:48%"></b><b style="width:22%"></b></div>
        <div class="mock-row"><b style="width:28%"></b></div>
      </div>
    </div>`;
}

function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projects.map((project, i) => `
    <article class="project-card">
      ${projectMedia(project)}
      <div class="project-body">
        <span class="project-index">Project ${pad(i)}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a class="btn-small" ${linkAttrs(project.github)}><svg><use href="#i-github"/></svg> GitHub</a>
          <a class="btn-small is-solid" ${linkAttrs(project.demo)}>Live Demo <svg><use href="#i-external"/></svg></a>
        </div>
      </div>
    </article>
  `).join("");

  const stat = document.getElementById("statProjects");
  if (stat) {
    stat.dataset.count = projects.length;
    stat.textContent = projects.length;
  }
}

/* ---------- RENDER: TECH TICKER (built from the skills array) ---------- */
function renderTicker() {
  const track = document.getElementById("tickerTrack");
  const group = skills.map(s => `<span class="ticker-item">${s.name}</span><span class="ticker-sep">|</span>`).join("");
  track.innerHTML = group + group;   /* duplicated for a seamless loop */
}

/* ---------- RENDER: TESTIMONIALS ---------- */
function initialsOf(name) {
  return name.split(/\s+/).map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <article class="testimonial-card">
      <div class="testimonial-quote-icon"><svg><use href="#i-quote"/></svg></div>
      <p class="testimonial-text">${t.quote}</p>
      <div class="testimonial-person">
        <span class="testimonial-avatar">${initialsOf(t.name)}</span>
        <span>
          <span class="testimonial-name" style="display:block">${t.name}</span>
          <span class="testimonial-role">${t.role}</span>
        </span>
      </div>
    </article>
  `).join("");
}

/* ---------- PROFILE LINKS (contact + footer) ---------- */
function applySiteLinks() {
  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.dataset.link;
    const value = siteLinks[key];

    if (!value) {
      el.setAttribute("href", "#");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("title", "Link coming soon");
      return;
    }

    if (key === "email") {
      el.setAttribute("href", `mailto:${value}`);
    } else {
      el.setAttribute("href", value);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
    el.removeAttribute("aria-disabled");
    el.removeAttribute("title");
  });

  document.querySelectorAll("[data-link-text]").forEach(el => {
    const key = el.dataset.linkText;
    if (key === "whatsapp") { el.textContent = siteLinks.whatsappDisplay; return; }
    const value = siteLinks[key];
    if (!value) return;
    el.textContent = value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  });
}

/* Disabled links never navigate */
document.addEventListener("click", (e) => {
  const disabled = e.target.closest('[aria-disabled="true"]');
  if (disabled) e.preventDefault();
});

/* ---------- NAVBAR ---------- */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");
const progressBar = document.getElementById("scrollProgress");
const toTop = document.getElementById("toTop");

function closeMenu() {
  navLinksEl.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const open = navLinksEl.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinksEl.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) closeMenu();
});

/* Scroll state: navbar border, progress bar, back-to-top */
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  navbar.classList.toggle("scrolled", y > 12);
  progressBar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  toTop.classList.toggle("visible", y > 700);
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* Active link highlight */
function initActiveLinks() {
  const navLinkMap = new Map(
    Array.from(document.querySelectorAll(".nav-link")).map(l => [l.getAttribute("href").slice(1), l])
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const link = navLinkMap.get(entry.target.id);
      if (!link) return;
      navLinkMap.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  if (reducedMotion) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  const targets = [];
  document.querySelectorAll(".will-target").forEach(el => targets.push(el));
  ["skillsGrid", "certificatesGrid", "projectsGrid"].forEach(id => {
    const grid = document.getElementById(id);
    Array.from(grid.children).forEach((child, i) => {
      child.style.setProperty("--d", `${Math.min(i, 5) * 70}ms`);
      targets.push(child);
    });
  });

  targets.forEach(el => {
    el.classList.add("will-reveal");
    observer.observe(el);
  });
}

/* ---------- MOTION: typing effect on the hero role ---------- */
function initTyping() {
  const el = document.getElementById("typedRole");
  if (!el || reducedMotion) return;
  const full = el.textContent.trim();
  el.textContent = "";
  let i = 0;
  setTimeout(function tick() {
    el.textContent = full.slice(0, ++i);
    if (i < full.length) setTimeout(tick, 55 + Math.random() * 45);
  }, 900);
}

/* ---------- MOTION: count-up for hero stats ---------- */
function initCountUp() {
  if (reducedMotion) return;
  document.querySelectorAll("[data-count]").forEach(el => {
    const to = Number(el.dataset.count);
    const from = Number(el.dataset.from || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    el.textContent = from + suffix;
    setTimeout(() => {
      const start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(from + (to - from) * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(start);
    }, 800);
  });
}

/* ---------- MOTION: subtle 3D tilt on the hero photo ---------- */
function initTilt() {
  const wrap = document.getElementById("photoWrap");
  const hero = document.getElementById("home");
  if (!wrap || reducedMotion || !canHover) return;
  const orbA = hero.querySelector(".orb-parallax-a");
  const orbB = hero.querySelector(".orb-parallax-b");
  let raf = null;
  hero.addEventListener("mousemove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      wrap.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;

      const hr = hero.getBoundingClientRect();
      const px = (e.clientX - hr.left) / hr.width - 0.5;
      const py = (e.clientY - hr.top) / hr.height - 0.5;
      if (orbA) { orbA.style.setProperty("--px", (px * -30).toFixed(1)); orbA.style.setProperty("--py", (py * -20).toFixed(1)); }
      if (orbB) { orbB.style.setProperty("--px", (px * 24).toFixed(1)); orbB.style.setProperty("--py", (py * 18).toFixed(1)); }
      raf = null;
    });
  }, { passive: true });
  hero.addEventListener("mouseleave", () => {
    wrap.style.transform = "";
    if (orbA) { orbA.style.setProperty("--px", 0); orbA.style.setProperty("--py", 0); }
    if (orbB) { orbB.style.setProperty("--px", 0); orbB.style.setProperty("--py", 0); }
  });
}

/* ---------- MOTION: cursor-following glow on cards ---------- */
function initSpotlight() {
  if (!canHover) return;
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".skill-card, .cert-card, .project-card, .contact-tile");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });
}

/* ---------- PRELOADER: professional entrance ---------- */
function initPreloader() {
  const minDelay = reducedMotion ? 150 : 1250;
  const reveal = () => document.body.classList.add("is-ready");
  window.addEventListener("load", () => setTimeout(reveal, minDelay));
  /* Safety net in case the load event is delayed by a slow connection */
  setTimeout(reveal, minDelay + 2500);
}

/* ---------- THEME: light/dark toggle ---------- */
function initTheme() {
  const KEY = "portfolio_theme";
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem(KEY);
  if (saved === "light") document.documentElement.setAttribute("data-theme", "light");

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(KEY, "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(KEY, "light");
    }
  });
}

/* ---------- SEND A MESSAGE FORM ---------- */
function initMessageForm() {
  const form = document.getElementById("messageForm");
  if (!form) return;

  function buildMessage() {
    const name = form.name.value.trim();
    const project = form.project.value.trim();
    const details = form.details.value.trim();
    return {
      subject: `New project inquiry: ${project}`,
      body: `Name: ${name}\nProject: ${project}\n\n${details}`
    };
  }

  function flashSuccess(btn) {
    const original = btn.innerHTML;
    btn.classList.add("is-success");
    btn.innerHTML = `<svg class="icon"><use href="#i-check"/></svg>Opened`;
    setTimeout(() => { btn.classList.remove("is-success"); btn.innerHTML = original; }, 1800);
  }

  function send(via, btn) {
    if (!form.reportValidity()) return;
    const { subject, body } = buildMessage();
    if (via === "email") {
      window.location.href = `mailto:${siteLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showToast("Opening your email app...");
    } else {
      window.open(`https://wa.me/${siteLinks.whatsappNumber.replace(/^0/, "20")}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
      showToast("Opening WhatsApp...");
    }
    flashSuccess(btn);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    send("email", form.querySelector('[data-send="email"]'));
  });
  form.querySelector('[data-send="whatsapp"]').addEventListener("click", () => {
    send("whatsapp", form.querySelector('[data-send="whatsapp"]'));
  });
}
function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  if (!btn) return;
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(siteLinks.email);
      showToast("Email copied to clipboard");
    } catch (err) {
      window.prompt("Copy this email address:", siteLinks.email);
    }
  });
}

/* ---------- COPY PHONE / WHATSAPP NUMBER ---------- */
function initCopyPhone() {
  const btn = document.getElementById("copyPhoneBtn");
  if (!btn) return;
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(siteLinks.whatsappNumber);
      showToast("Phone number copied");
    } catch (err) {
      window.prompt("Copy this phone number:", siteLinks.whatsappNumber);
    }
  });
}

/* ---------- SIDE SCROLL-SPY DOTS ---------- */
function initSideDots() {
  const dots = document.getElementById("sideDots");
  if (!dots) return;
  const dotMap = new Map(
    Array.from(dots.querySelectorAll(".side-dot")).map(d => [d.dataset.dot, d])
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const dot = dotMap.get(entry.target.id);
      if (!dot) return;
      dotMap.forEach(d => d.classList.remove("active-dot"));
      dot.classList.add("active-dot");
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));
}

/* ============================================================
   CONTENT MANAGER (add skills, certificates, projects from the UI)
   ============================================================ */
const STORAGE_KEYS = { skills: "portfolio_skills", certificates: "portfolio_certificates", projects: "portfolio_projects" };
const CONTENT_HASH_KEY = "portfolio_content_hash";

const defaultData = {
  skills: JSON.parse(JSON.stringify(skills)),
  certificates: JSON.parse(JSON.stringify(certificates)),
  projects: JSON.parse(JSON.stringify(projects))
};

/* Fingerprint of the default content above (skills/certificates/projects as
   hardcoded in this file). It changes automatically the moment you edit any
   of those arrays — there is no version number to remember to bump.
   loadStoredData() compares this to the fingerprint it saved on a visitor's
   last visit: if they differ (including "never visited before"), any
   Manage-Content edits saved in that browser's localStorage are cleared so
   the current source-code content always wins right after you publish an
   update. This is what keeps GitHub Pages visitors in sync with each other
   even though each browser has its own separate localStorage. */
function hashContent(value) {
  const str = JSON.stringify(value);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash.toString(36);
}
const DEFAULT_CONTENT_HASH = hashContent(defaultData);

const store = { skills, certificates, projects };

function loadStoredData() {
  try {
    const storedHash = localStorage.getItem(CONTENT_HASH_KEY);
    if (storedHash !== DEFAULT_CONTENT_HASH) {
      /* The defaults in script.js are different from what this browser last
         saw (or this browser has never saved anything) — drop any locally
         saved edits so the fresh defaults from source are what's displayed. */
      Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
      localStorage.setItem(CONTENT_HASH_KEY, DEFAULT_CONTENT_HASH);
      return;
    }
  } catch (err) {
    return; /* localStorage unavailable (e.g. private browsing) — use defaults as-is */
  }

  Object.keys(STORAGE_KEYS).forEach(key => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS[key]);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        store[key].length = 0;
        store[key].push(...parsed);
      }
    } catch (err) { /* ignore corrupted storage */ }
  });
}

function persist(key) {
  try {
    localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(store[key]));
    localStorage.setItem(CONTENT_HASH_KEY, DEFAULT_CONTENT_HASH);
  } catch (err) { /* storage unavailable */ }
}

function rerender(key) {
  if (key === "skills") { renderSkills(); renderTicker(); }
  if (key === "certificates") renderCertificates();
  if (key === "projects") renderProjects();
  initScrollReveal();
  renderManageList(key);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

function initialsBadge(name) {
  const clean = name.replace(/&amp;/g, "&");
  const letters = clean.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase() || "?";
  const palette = ["#00AAFF", "#512BD4", "#0F9D9D", "#CC2927", "#68217A", "#24292F"];
  const bg = palette[Math.abs([...clean].reduce((a, c) => a + c.charCodeAt(0), 0)) % palette.length];
  return { bg, text: letters };
}

function renderManageList(key) {
  const ids = { skills: "manageSkillsList", certificates: "manageCertsList", projects: "manageProjectsList" };
  const labels = {
    skills: (item) => item.name.replace(/&amp;/g, "&"),
    certificates: (item) => `${item.title} — ${item.organization}`,
    projects: (item) => item.title
  };
  const list = document.getElementById(ids[key]);
  list.innerHTML = store[key].map((item, i) => `
    <li><span>${labels[key](item)}</span><button type="button" data-remove="${key}:${i}" aria-label="Remove"><svg><use href="#i-trash"/></svg></button></li>
  `).join("");
}

function buildExportCode(key) {
  const varName = key;
  return `const ${varName} = ${JSON.stringify(store[key], null, 2)};`;
}

function buildExportAllCode() {
  return Object.keys(STORAGE_KEYS).map(buildExportCode).join("\n\n");
}

function resetAllToDefaults() {
  if (!window.confirm("Reset ALL content (skills, certificates, projects) to the defaults in script.js? This clears anything added in this browser and can't be undone.")) return;
  Object.keys(STORAGE_KEYS).forEach(key => {
    store[key].length = 0;
    store[key].push(...JSON.parse(JSON.stringify(defaultData[key])));
    localStorage.removeItem(STORAGE_KEYS[key]);
  });
  try { localStorage.setItem(CONTENT_HASH_KEY, DEFAULT_CONTENT_HASH); } catch (err) { /* ignore */ }
  Object.keys(STORAGE_KEYS).forEach(rerender);
  showToast("Reset to the latest defaults from script.js");
}

function initManagePanel() {
  const toggle = document.getElementById("manageToggle");
  const panel = document.getElementById("managePanel");
  const backdrop = document.getElementById("manageBackdrop");
  const closeBtn = document.getElementById("manageClose");

  function open() {
    panel.hidden = false; backdrop.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    Object.keys(STORAGE_KEYS).forEach(renderManageList);
  }
  function close() {
    panel.hidden = true; backdrop.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", () => (panel.hidden ? open() : close()));
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(); });

  /* Global controls: copy every array at once, or wipe this browser's local edits */
  document.getElementById("copyAllBtn").addEventListener("click", async () => {
    const code = buildExportAllCode();
    try {
      await navigator.clipboard.writeText(code);
      showToast("All code copied — paste it into script.js");
    } catch (err) {
      window.prompt("Copy this code into script.js:", code);
    }
  });
  document.getElementById("resetAllBtn").addEventListener("click", resetAllToDefaults);

  /* Tabs */
  panel.querySelectorAll(".manage-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      panel.querySelectorAll(".manage-tab").forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("active"); tab.setAttribute("aria-selected", "true");
      panel.querySelectorAll(".manage-pane").forEach(p => p.hidden = p.dataset.pane !== tab.dataset.tab);
    });
  });

  /* Remove buttons (event delegation) */
  panel.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove]");
    if (!btn) return;
    const [key, idx] = btn.dataset.remove.split(":");
    store[key].splice(Number(idx), 1);
    persist(key);
    rerender(key);
  });

  /* Add forms */
  document.getElementById("skillForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const name = f.get("name").trim();
    if (!name) return;
    store.skills.push({ name, description: f.get("description").trim(), badge: initialsBadge(name) });
    persist("skills"); rerender("skills"); e.target.reset();
    showToast("Skill added");
  });

  document.getElementById("certForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    store.certificates.push({
      title: f.get("title").trim(),
      organization: f.get("organization").trim(),
      date: f.get("date").trim(),
      description: f.get("description").trim(),
      link: f.get("link").trim() || "#"
    });
    persist("certificates"); rerender("certificates"); e.target.reset();
    showToast("Certificate added");
  });

  document.getElementById("projectForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    store.projects.push({
      title: f.get("title").trim(),
      description: f.get("description").trim(),
      technologies: f.get("technologies").split(",").map(t => t.trim()).filter(Boolean),
      github: f.get("github").trim() || "#",
      demo: f.get("demo").trim() || "#",
      image: f.get("image").trim() || ""
    });
    persist("projects"); rerender("projects"); e.target.reset();
    showToast("Project added");
  });

  /* Copy code / reset */
  panel.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const key = btn.dataset.copy;
      const code = buildExportCode(key);
      try {
        await navigator.clipboard.writeText(code);
        showToast("Code copied — paste it into script.js");
      } catch (err) {
        window.prompt("Copy this code into script.js:", code);
      }
    });
  });

  panel.querySelectorAll("[data-reset]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.reset;
      if (!window.confirm(`Reset ${key} to the default list? This clears items you added in this browser.`)) return;
      store[key].length = 0;
      store[key].push(...JSON.parse(JSON.stringify(defaultData[key])));
      localStorage.removeItem(STORAGE_KEYS[key]);
      rerender(key);
      showToast("Reset to defaults");
    });
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  renderSkills();
  renderCertificates();
  renderProjects();
  renderTestimonials();
  renderTicker();
  applySiteLinks();
  initActiveLinks();
  initSideDots();
  initScrollReveal();
  initTyping();
  initCountUp();
  initTilt();
  initSpotlight();
  initLightbox();
  initManagePanel();
  initPreloader();
  initTheme();
  initCopyEmail();
  initCopyPhone();
  initMessageForm();
  onScroll();
});
