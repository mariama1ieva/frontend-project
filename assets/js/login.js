"use strict"



let selectLanguage = document.querySelector(".select_language button ");
let languageMenu = document.querySelector(".select_language .language_menu ");

let isMenuVisible = true;
selectLanguage.addEventListener("click", function () {


    if (isMenuVisible) {
        languageMenu1.style.display = "none";
        languageMenu2.style.display = "none";
        languageMenu.style.display = "block";
        isMenuVisible = false;

    } else {
        languageMenu.style.display = "none";
        isMenuVisible = true;
    }
});

let selectLanguage1 = document.querySelector(".select_money button ");
let languageMenu1 = document.querySelector(".select_money .language_menu ");

let isMenuVisible1 = true;
selectLanguage1.addEventListener("click", function () {

    if (isMenuVisible1) {
        languageMenu2.style.display = "none";
        languageMenu.style.display = "none";
        languageMenu1.style.display = "block";
        isMenuVisible1 = false;

    } else {
        languageMenu1.style.display = "none";
        isMenuVisible1 = true;
    }
});

let selectLanguage2 = document.querySelector(".setting button ");
let languageMenu2 = document.querySelector(".setting .language_menu ");

let isMenuVisible2 = true;
selectLanguage2.addEventListener("click", function () {

    if (isMenuVisible2) {
        languageMenu1.style.display = "none";
        languageMenu.style.display = "none";
        languageMenu2.style.display = "block";
        isMenuVisible2 = false;

    } else {
        languageMenu2.style.display = "none";
        isMenuVisible2 = true;
    }
});
