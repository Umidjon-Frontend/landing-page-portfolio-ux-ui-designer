// VARIABLES
const btnMenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".header-inner .nav");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    nav.classList.toggle("toggle-active");
});
