"use strict";

const menuBtn = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
});
