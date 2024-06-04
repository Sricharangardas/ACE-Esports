'use strict';

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open]");
const navCloseBtn = document.querySelector("[data-nav-open-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
