// AOS init
AOS.init();

// Toggle mobile menu
const toggler = document.querySelector(".mobile-toggler");
const mobileMenu = document.querySelector(".nav-list");
toggler.addEventListener("click", function() {
    toggler.classList.toggle("open");
    mobileMenu.classList.toggle("open");
});