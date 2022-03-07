"use strict";

// Elements
const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".btn");
const paragraphs = document.querySelectorAll(".answer");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    questions[i].classList.toggle("question-toggle");
    btns[i].classList.toggle("rotate");
    paragraphs[i].classList.toggle("show");
  });
}

if (window.innerWidth >= 1024) {
  console.log(true);
  const img = document.querySelector(".hero-image");
  img.src = "./images/illustration-woman-online-desktop.svg";
}
