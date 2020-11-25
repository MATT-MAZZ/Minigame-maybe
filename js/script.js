let plus = document.querySelector (".plus");
let minus = document.querySelector (".minus");
let deleteC = document.querySelector (".delete");
let counter = document.querySelector (".counter");

let progress = document.querySelector (".progress");
let goal = document.querySelector (".goal");
let num = 0;
let width = 30;




plus.addEventListener("click", () => {
    num++;
    counter.innerHTML = num;
    width += 10;
    goal.style.width = width + "px";
    
});

setInterval("minusWidth()", 250);

function minusWidth () {
    if (width > 30) {
        width -= 10;
        goal.style.width = width + "px"; 
    }
}







