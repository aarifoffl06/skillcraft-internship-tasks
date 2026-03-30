// Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});