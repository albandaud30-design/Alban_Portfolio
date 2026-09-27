// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


// Open / close mobile menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu when navigation link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// =========================================
// NAVBAR ON SCROLL
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(8, 11, 19, 0.96)";

    } else {

        header.style.background =
            "rgba(11, 15, 25, 0.85)";

    }

});


// =========================================
// CURRENT YEAR
// =========================================

const yearElement =
    document.querySelector(".footer p");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Alban Daud. All rights reserved.`;

}


// =========================================
// CLOSE MENU WITH ESCAPE KEY
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});