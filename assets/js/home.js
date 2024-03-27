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
let selectBtn = document.querySelector(".select_btn");
let selectIcon = document.querySelector(".select_icon");

selectBtn.addEventListener("click", function () {
    selectBtn.style.backgroundColor = "white";
    selectIcon.style.transition = "all 0.3s ease";

    if (selectIcon.style.transform === "rotate(180deg)") {
        selectIcon.style.transform = "rotate(0deg)";
    } else {
        selectIcon.style.transform = "rotate(180deg)";
    }
})

let trendBtn = document.querySelector(".button_bn .control1");
let trendSpan = document.querySelector(".button_bn .line1");
let newProduct = document.querySelector(".new")
trendBtn.addEventListener("click", function () {
    newProduct.classList.remove("d-none")
    featuredProduct.classList.add("d-none")
    seller.classList.add("d-none")
    this.style.color = "black"
    trendBtn2.style.color = "grey"
    trendBtn3.style.color = "grey"
    trendSpan.style.opacity = "1"
    trendSpan2.style.opacity = "0";
    trendSpan3.style.opacity = "0";

})
let trendBtn2 = document.querySelector(".button_bn .control2");
let trendSpan2 = document.querySelector(".button_bn .line2");
let featuredProduct = document.querySelector(".featured")
trendBtn2.addEventListener("click", function () {
    featuredProduct.classList.remove("d-none")
    newProduct.classList.add("d-none")
    seller.classList.add("d-none")
    this.style.color = "black"
    trendBtn3.style.color = "grey"
    trendBtn.style.color = "grey"
    trendSpan2.style.opacity = "1";
    trendSpan.style.opacity = "0";
    trendSpan3.style.opacity = "0";
})
let trendBtn3 = document.querySelector(".button_bn .control3");
let trendSpan3 = document.querySelector(".button_bn .line3");
let seller = document.querySelector(".sellers")
trendBtn3.addEventListener("click", function () {
    seller.classList.remove("d-none")
    featuredProduct.classList.add("d-none")
    newProduct.classList.add("d-none")
    this.style.color = "black"
    trendBtn3.style.color = "grey"
    trendBtn2.style.color = "grey"
    trendSpan3.style.opacity = "1";
    trendSpan2.style.opacity = "0";
    trendSpan.style.opacity = "0";
})

let dealIcon1 = document.querySelector(" .deal_slide_icon .first");
let dealIcon2 = document.querySelector(" .deal_slide_icon .second");
let dealFirst = document.querySelector(" .first_slide");
let dealSecond = document.querySelector(".second_slide")


dealIcon2.addEventListener("click", function () {
    this.style.color = "#007bff"
    dealIcon1.style.color = "grey"
    console.log(dealSecond);
    dealSecond.classList.remove("d-none")
    dealFirst.classList.add("d-none")

})
dealIcon1.addEventListener("click", function () {
    this.style.color = "#007bff"
    dealIcon2.style.color = "grey"
    dealSecond.classList.add("d-none")
    dealFirst.classList.remove("d-none")
})




