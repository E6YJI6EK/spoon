// Инициализация анимаций
AOS.init()
// Мобильное меню
const openBtn = document.querySelector(".header__menu__bars"),
    closeBtn = document.querySelector(".mobile-menu__close-btn"),
    mobileMenu = document.querySelector(".mobile-menu");

openBtn.addEventListener("click", () => {
    mobileMenu.style.left = "0";
});
closeBtn.addEventListener("click", () => {
    mobileMenu.style.left = "100%";
});