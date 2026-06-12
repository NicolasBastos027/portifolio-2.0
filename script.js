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

});
