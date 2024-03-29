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


let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

image2.addEventListener("click", function () {
    img2.classList.remove("d-none")
    img1.classList.add("d-none")
    img3.classList.add("d-none")
})
image1.addEventListener("click", function () {
    img2.classList.add("d-none")
    img1.classList.remove("d-none")
    img3.classList.add("d-none")
})
image3.addEventListener("click", function () {
    img2.classList.add("d-none")
    img1.classList.add("d-none")
    img3.classList.remove("d-none")
})


let decription = document.querySelector(".description");
let info = document.querySelector(".info");
let review = document.querySelector(".review")

let destriptionText = document.querySelector(".destription_text")
let infoText = document.querySelector(".info-text")
let reviewText = document.querySelector(".reviews")

info.addEventListener("click", function () {
    this.style.color = "black"
    decription.style.color = "grey"
    review.style.color = "grey"
    infoText.classList.remove("d-none")
    destriptionText.classList.add("d-none")
    reviewText.classList.add("d-none")
})

decription.addEventListener("click", function () {
    this.style.color = "black"
    info.style.color = "grey"
    review.style.color = "grey"
    infoText.classList.add("d-none")
    destriptionText.classList.remove("d-none")
    reviewText.classList.add("d-none")
})
review.addEventListener("click", function () {
    this.style.color = "black"
    info.style.color = "grey"
    decription.style.color = "grey"
    infoText.classList.add("d-none")
    destriptionText.classList.add("d-none")
    reviewText.classList.remove("d-none")
})