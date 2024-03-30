const dpButtons = document.querySelectorAll('[data-dropdown="button"]');
const dpMenus = document.querySelectorAll('[data-dropdown="menu"]');

for (let i = 0; i < dpButtons.length; i++) {
  dpButtons[i].addEventListener("click", function () {
    const button = dpButtons[i];

    const isMenuOpen = dpMenus[i].classList.contains("opened");

    for (let menu of dpMenus) {
      menu.classList.remove("opened");
    }

    for (let button of dpButtons) {
      button.classList.remove("active");
    }

    if (!isMenuOpen) {
      dpMenus[i].classList.add("opened");
      dpButtons[i].classList.add("active");
    }
  });
}

const departmensBtn = document.querySelector(".all-departments-btn");
const departmensMenu = document.querySelector(".departmens-list");

departmensBtn.addEventListener("click", function () {
  departmensMenu.classList.toggle("opened");
});

const searchCategoryBtn = document.querySelector(".search-category");
const searchCategoryMenu = document.querySelector(".search-category-list");

searchCategoryBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  searchCategoryMenu.classList.toggle("opened");
});


const toggleBtn = document.querySelectorAll(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const bodyOverlay = document.querySelector(".body-overlay");

for (let btn of toggleBtn) {
  btn.addEventListener("click", function () {
    bodyOverlay.classList.add("opened");
  });
}

closeBtn.addEventListener("click", function () {
  bodyOverlay.classList.remove("opened");
});

bodyOverlay.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();

    e.target.classList.remove("opened");
  },
  false
);

const allCategoriesBtn = document.querySelector(".categories-btn");
const categoryList = document.querySelector(".toggle-categories-list");

allCategoriesBtn.addEventListener("click", function () {
  categoryList.classList.toggle("opened");
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-scroll").addClass("active");
    }
    if ($(window).scrollTop() > 150) {
      $(".bookmark").addClass("show");
    } else {
      $(".header-scroll").removeClass("active");
      $(".bookmark").removeClass("show");
    }
  });
});
