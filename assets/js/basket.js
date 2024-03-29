"use strict"

let products = [];

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify(products))
} else {
    products = JSON.parse(localStorage.getItem("basket"));
}

const basketBtns = document.querySelectorAll(".card_basket a");

basketBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const mainParent = this.parentNode.parentNode.parentNode.parentNode;
        const id = mainParent.firstElementChild.getAttribute("data-id");
        const existProduct = products.find(m => m.id === id);

        if (existProduct === undefined) {
            products.push({
                id: id,
                category: mainParent.querySelector(".card_description").firstElementChild.firstElementChild.innerText,
                name: mainParent.querySelector(".card_description").firstElementChild.nextElementSibling.firstElementChild.innerText,
                price: mainParent.querySelector(".card_description .main_price").innerText,
                count: 1
            });

            this.firstElementChild.style.color = "white";
            this.parentNode.parentNode.style.backgroundColor = "black";
        } else {
            existProduct.count++
        }

        localStorage.setItem("basket", JSON.stringify(products));
    });
});

function setColorBasket() {
    const productElements = document.querySelectorAll(".product_cart");

    productElements.forEach(element => {
        const productId = element.getAttribute("data-id");

        products.forEach(item => {
            if (productId === item.id) {
                const basketDiv = element.firstElementChild.nextElementSibling;
                const basket = element.querySelector(".card_icons svg");

                basketDiv.style.backgroundColor = "black";
                basket.style.color = "white"
            }
        })
    })
}

setColorBasket();