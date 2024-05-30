// Инициализация слайдера
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1251: {
      slidesPerView: "auto",
    },
  },
});

// Бургер
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".burger-menu__close");

burger.addEventListener("click", function () {
  burgerMenu.classList.add("burger-menu--active");
});

closeMenu.addEventListener("click", function () {
  burgerMenu.classList.remove("burger-menu--active");
});
