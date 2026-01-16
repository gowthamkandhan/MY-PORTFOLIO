"use strict";

/* =========================
   PAGE NAVIGATION
========================= */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageName = link.innerText.toLowerCase();

    pages.forEach((page) => {
      page.classList.remove("active");
      if (page.dataset.page === pageName) {
        page.classList.add("active");
      }
    });

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* =========================
   SIDEBAR TOGGLE
========================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(
  ".project-item, .service-item, .skills-list li, .snapshot, .timeline"
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   ACTIVE SECTION HIGHLIGHT
========================= */
window.addEventListener("scroll", () => {
  let current = "";

  pages.forEach((page) => {
    const sectionTop = page.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = page.dataset.page;
    }
  });

  navLinks.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase() === current) {
      btn.classList.add("active");
    }
  });
});
