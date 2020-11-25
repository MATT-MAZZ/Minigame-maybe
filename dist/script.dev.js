"use strict";

var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var deleteC = document.querySelector(".delete");
var counter = document.querySelector(".counter");
var progress = document.querySelector(".progress");
var goal = document.querySelector(".goal");
var num = 0;
var width = 30;
plus.addEventListener("click", function () {
  num++;
  counter.innerHTML = num;
  width += 10;
  goal.style.width = width + "px";
});
setInterval("minusWidth()", 250);

function minusWidth() {
  if (width > 30) {
    width -= 10;
    goal.style.width = width + "px";
  }
}