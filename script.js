const menuIconEl = document.querySelector(".menu-bar");
const navEl = document.querySelector(".nav-lists");
const logoEl = document.querySelector(".logo");
const headerEl = document.querySelector("header");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

menuIconEl.addEventListener("click", () => {
  menuIconEl.classList.toggle("active");
  if (menuIconEl.classList.contains("active")) {
    navEl.classList.add("open-nav-list");
    logoEl.style.display = "none";
    headerEl.style.backgroundColor = "White";
  } else {
    navEl.classList.remove("open-nav-list");
    logoEl.style.display = "block";
    headerEl.style.backgroundColor = "transparent";
  }
});

function goToPage(page) {
  window.location.href = page;
}

