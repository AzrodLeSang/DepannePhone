var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Menu nav animations */

const menuHamburger = document.querySelector(".btnMenu");
const navLinks = document.querySelector(".menu_alt");
const close = document.querySelector(".close_menu");
const fond = document.querySelector(".fond");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("menu_ouvert");
  menuHamburger.classList.toggle("nonVisible");
  menuHamburger.classList.remove("fa-solid");
  fond.classList.toggle("fondu");
  fond.classList.remove("fond");
});

close.addEventListener("click", () => {
  navLinks.classList.remove("menu_ouvert");
  menuHamburger.classList.remove("nonVisible");
  menuHamburger.classList.add("fa-solid");
  fond.classList.remove("fondu");
  fond.classList.toggle("fond");
});

/* Header animations */

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("fixed", window.scrollY > 100);
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

/// accordion
$(function () {
  // (Optional) Active an item if it has the class "is-active"
  $(".accordion > .accordion-item.is-active")
    .children(".accordion-panel")
    .slideDown();

  $(".accordion > .accordion-item").click(function () {
    // Cancel the siblings
    $(this)
      .siblings(".accordion-item")
      .removeClass("is-active")
      .children(".accordion-panel")
      .slideUp();
    // Toggle the item
    $(this)
      .toggleClass("is-active")
      .children(".accordion-panel")
      .slideToggle("ease-out");
  });
});
