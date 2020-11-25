let plus = document.querySelector (".plus");
let minus = document.querySelector (".minus");
let deleteC = document.querySelector (".delete");
let counter = document.querySelector (".counter");

let progress = document.querySelector (".progress");
let goal = document.querySelector (".goal");
let num = 0;
let leftMove = -4005;




plus.addEventListener("click", () => {
    num++;
    counter.innerHTML = num;
    leftMove += 10;
    goal.style.left = leftMove + "px";
});

setInterval("minusWidth()", 250);

function minusWidth () {
    if (leftMove > -4005) {
        leftMove -= 10;
        goal.style.left = leftMove + "px"; 
    }
}







