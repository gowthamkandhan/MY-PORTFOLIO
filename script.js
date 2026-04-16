"use strict";

/* =========================
   SIDEBAR TOGGLE
========================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll(".navbar-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault(); // only prevent if valid
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});


/* =========================
   SCROLL REVEAL (KEEP)
========================= */
const revealElements = document.querySelectorAll(
  ".project-item, .service-item, .skills-list li, .snapshot, .timeline",
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
   ACTIVE NAV ON SCROLL
========================= */

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollYPos = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  // 🔥 Force last section (contact) when bottom reached
  if (scrollYPos >= document.body.offsetHeight - 10) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// const sections = document.querySelectorAll(".section");
// const navLinks = document.querySelectorAll(".navbar-link");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const rect = section.getBoundingClientRect();

//     if (rect.top <= 150 && rect.bottom >= 150) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");

//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });



