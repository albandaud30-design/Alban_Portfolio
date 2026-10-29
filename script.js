
"use strict";

// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    // Open / close mobile menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

// =========================================
// NAVBAR ON SCROLL
// =========================================

const header = document.querySelector(".header");

function updateNavbar() {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 11, 19, 0.96)";
    } else {
        header.style.background = "rgba(11, 15, 25, 0.85)";
    }
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

// =========================================
// CURRENT YEAR
// =========================================

const yearElement = document.querySelector(".footer p");

if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Alban Daud. All rights reserved.`;
}
