"use strict";
const navigation = document.getElementById("nav");
const menuToggle = document.getElementById("menu");
const navigationLinks = document.querySelectorAll("#nav-links a");
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
if (navigation && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navigationLinks.forEach((link) => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
