/* ============================================
   Nicolas Bastos — Portfólio · Interações
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---- Stagger timeline + cards a touch ---- */
  document.querySelectorAll(".tl-item, .proj-card, .skill-card").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });

  /* ---- Navbar shrink + active link + sliding glass lens ---- */
  const nav = document.getElementById("nav");
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const indicator = document.getElementById("navIndicator");

  let activeLink = null;     // link matching the current scroll section
  let hovering = false;      // mouse currently over a nav link

  // Move the glass lens to sit exactly over a given link.
  const moveLensTo = (link) => {
    if (!link || !indicator) return;
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    indicator.style.opacity = "1";
  };

  // Reposition lens to the active link (used on scroll / resize).
  const settleLens = () => {
    if (hovering) return;            // don't fight the hover
    if (activeLink) moveLensTo(activeLink);
    else if (indicator) indicator.style.opacity = "0"; // no active section (hero)
  };

  // Lens follows hover, snaps back to active on leave.
  navAnchors.forEach((a) => {
    a.addEventListener("mouseenter", () => {
      hovering = true;
      moveLensTo(a);
    });
  });
  document.getElementById("navLinks").addEventListener("mouseleave", () => {
    hovering = false;
    settleLens();
  });

  const onScroll = () => {
    const scrollTop = window.scrollY;

    nav.classList.toggle("scrolled", scrollTop > 40);

    // active section highlight
    let current = "";
    sections.forEach((sec) => {
      if (scrollTop >= sec.offsetTop - 140) current = sec.id;
    });
    activeLink = null;
    navAnchors.forEach((a) => {
      const isActive = a.getAttribute("href") === `#${current}`;
      a.classList.toggle("active", isActive);
      if (isActive) activeLink = a;
    });
    settleLens();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", settleLens);
  window.addEventListener("load", settleLens);
  onScroll();

  /* ---- Animated stat counters ---- */
  const counters = document.querySelectorAll(".stat-num");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 28));
        const tick = () => {
          cur += step;
          if (cur >= target) {
            el.textContent = target;
          } else {
            el.textContent = cur;
            requestAnimationFrame(tick);
          }
        };
        tick();
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );

  /* ---- Language switch (PT / EN) ---- */
  // English dictionary. Values may contain inline HTML (<strong>, <code>...).
  // Portuguese is the default already in the markup, captured on load.
  const I18N_EN = {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.journey": "Journey",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "Available for new projects",
    "hero.role": "Full-Stack · Mobile · Game Developer",
    "hero.desc": "I build efficient solutions with <strong>React Native</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong> and <strong>C#</strong>. From interface to backend, including games in Unity — focused on solid architecture practices and high-impact products.",
    "hero.viewProjects": "View projects",
    "hero.cv": "Download résumé",
    "hero.contact": "Get in touch",
    "hero.loc": "Ribeirão Preto, Brazil",
    "hero.edu": "Systems Analysis · FATEC",

    "about.title": "About me",
    "about.p1": "Software developer with a strong foundation in <strong>full-stack</strong>, <strong>mobile</strong> and <strong>game development</strong>. Studying Systems Analysis &amp; Development, with experience in agile environments.",
    "about.p2": "I have an unusual background: I started in <strong>Interior Design</strong> and moved into technology, which gave me a sharp eye for <strong>usability</strong> and interfaces. Today, combining design and code, I deliver products that work well and are pleasant to use.",
    "about.p3": "Committed to continuous learning and solid architecture practices.",
    "about.stat1": "Years coding",
    "about.stat2": "Companies / Studios",
    "about.stat3": "Technologies",
    "about.stat4": "Courses",

    "skills.title": "Technical skills",
    "skills.card1": "Languages &amp; Frameworks",
    "skills.card2": "Tools &amp; Technologies",
    "skills.card3": "Methodologies &amp; Skills",
    "skills.chipWebDev": "Web Dev",
    "skills.chipMobileDev": "Mobile Dev",
    "skills.chipUsability": "Usability",
    "skills.chipNetworking": "Networking",

    "timeline.title": "Journey",
    "timeline.sub": "Professional experience and education over time",

    "tag.work": "Work",
    "tag.edu": "Education",
    "tag.tech": "Technical",

    "tl.dateAnalitica": "Oct 2025 — Present",
    "tl.dateSoul": "Aug 2024 — Dec 2024",
    "tl.dateSero": "Oct 2023 — Nov 2023",
    "tl.dateEduc": "Jun 2023 — Dec 2023",
    "tl.dateReges": "Feb 2023 — Jun 2023",
    "tl.dateEtec": "Jan 2020 — Dec 2022",

    "tl.jobDev": "Developer",
    "tl.jobGameDev": "Game Development (Tech Course)",
    "tl.jobFullStack": "Full Stack Developer",
    "tl.jobFsProg": "Full-Stack Programming",
    "tl.jobAds": "Systems Analysis &amp; Development",
    "tl.jobInterior": "Integrated Technical Diploma in Interior Design",

    "tl.pAnalitica": "Development and maintenance of mobile apps and web systems with responsive interfaces and backend integration. Good programming practices, system architecture and version control.",
    "tl.pAra": "Development of a 2D game in Unity (C#), implementing mechanics, controls and world interactions. Performance optimization and continuous testing in collaboration with designers and artists.",
    "tl.pSoul": "Training focused on game development, mechanics and production.",
    "tl.pSero": "Development of dynamic web applications on the front-end and back-end (TypeScript and React). Agile Scrum methodology for structured and collaborative deliveries.",
    "tl.pEduc": "Solid foundation in full-stack web development.",
    "tl.pFatec": "Technologist degree in Systems Analysis &amp; Development — currently in progress.",
    "tl.pReges": "The start of my journey in a technology degree.",
    "tl.pEtec": "A foundation in design and visual composition that today shapes my eye for usability and interfaces.",
    "tl.chipInProgress": "In progress",

    "projects.title": "Projects",
    "projects.sub": "A selection of work and studies on GitHub",
    "projects.all": "View all repositories ↗",

    "fh.badge": "Featured project",
    "fh.tag": "🎮 Original game · Unity",
    "fh.desc": "A local multiplayer <strong>party game</strong> for <strong>4 players</strong> in a sci-fi universe: five competitive minigames where players rack up points and collect energy-drink cans to become the champion and win the TNT prize. Built in <strong>Unity</strong> (with modeling in <strong>Blender</strong>) as the final project of <strong>SoulCode</strong>'s Game Dev bootcamp, sponsored by <strong>TNT Energy Drink</strong> — in a team of 8 people.",
    "fh.play": "Play on itch.io ↗",
    "fh.team": "Team — 8 developers",

    "ft.label": "Web Project · Full-Stack",
    "ft.desc": "A <strong>full-stack</strong> application for a barbershop — a scheduling and management system with a <strong>TypeScript</strong> frontend and a <strong>Python</strong> backend. Architecture split into <code>frontend</code> and <code>backend</code>, with a responsive interface and integration between the layers.",
    "ft.view": "View on GitHub ↗",
    "ft.fallback": "Add <code>assets/james.png</code> to see the real preview",

    "pc.search": "Company search system based on data from a CSV file.",
    "pc.flutter": "Mobile app built for the mobile programming course.",
    "pc.dataTTitle": "Data Transformation",
    "pc.dataT": "Data extraction from PDF tables using the Tabula library.",
    "pc.scrap": "Web data collection for filtering and automated file downloading.",
    "pc.unity3dTitle": "Unity 3D Project",
    "pc.unity3d": "3D game experiments and tests built in Unity.",
    "pc.pong": "The classic Pong game recreated in pure JavaScript.",

    "contact.title": "Contact",
    "contact.sub": "Open to opportunities, freelance work and collaborations. Reach me through any channel.",

    "footer.text": "© 2026 Nicolas Bastos Santos Cardoso · Made with coffee and code."
  };

  const META = {
    pt: { title: "Nicolas Bastos — Desenvolvedor de Software", lang: "pt-BR" },
    en: { title: "Nicolas Bastos — Software Developer", lang: "en" }
  };

  const i18nEls = document.querySelectorAll("[data-i18n]");
  // Snapshot the original Portuguese markup so we can restore it.
  const ptStore = new Map();
  i18nEls.forEach((el) => ptStore.set(el, el.innerHTML));

  const cvBtn = document.getElementById("cvBtn");
  const langButtons = document.querySelectorAll(".lang-btn");

  const applyLang = (lang) => {
    if (lang !== "en") lang = "pt"; // guard

    i18nEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en") {
        if (I18N_EN[key] != null) el.innerHTML = I18N_EN[key];
      } else {
        const original = ptStore.get(el);
        if (original != null) el.innerHTML = original;
      }
    });

    // Swap the résumé download (file + suggested filename) per language.
    if (cvBtn) {
      const href = cvBtn.getAttribute("data-href-" + lang);
      const dl = cvBtn.getAttribute("data-download-" + lang);
      if (href) cvBtn.setAttribute("href", href);
      if (dl) cvBtn.setAttribute("download", dl);
    }

    // Document-level metadata.
    document.documentElement.lang = META[lang].lang;
    document.title = META[lang].title;

    // Active flag state.
    langButtons.forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }

    // The lens may need to settle if link widths changed.
    if (typeof settleLens === "function") settleLens();
  };

  langButtons.forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  let savedLang = "pt";
  try { savedLang = localStorage.getItem("lang") || "pt"; } catch (e) { /* ignore */ }
  applyLang(savedLang);

});
