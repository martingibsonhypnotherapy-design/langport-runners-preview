"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 901px)").matches) setMenuOpen(false);
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
