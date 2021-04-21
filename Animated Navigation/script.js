const navToggle = document.getElementById("toggle");
const navMenu = document.getElementById("nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});