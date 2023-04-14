"use strict";

const panels = document.querySelectorAll(".panel");
const loading = document.querySelector(".page-loading");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

setTimeout(() => {
  loading.classList.add("page-active");
}, 2000);
