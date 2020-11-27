
let plus = document.querySelector (".plus");
let counter = document.querySelector (".counter");
let point = document.querySelectorAll ('.fas');
let progress = document.querySelector (".progress");
let goal = document.querySelector (".goal");
let notice = document.querySelector(".notice");
let num = 0;
let width = 30;
let windowWidth = +document.documentElement.clientWidth;



plus.addEventListener("click", () => {
    num++;
    counter.innerHTML = num;
    
    switch (true) {
        case (windowWidth > 1536): 
        width += 10;
        break;

        case (windowWidth < 1440 && windowWidth > 1366): 
        width += 8;
        break;

        case (windowWidth < 1366 && windowWidth > 1024): 
        width += 7;
        break;

        case (windowWidth < 1024 && windowWidth > 480): 
        width += 5;
        break;
    }
    goal.style.width = width + "px";

    buttonPress();

    function buttonPress() {
        plus.classList.add('plus_tap')
        setTimeout(() => plus.classList.remove("plus_tap"), 100);
    }
});



setInterval(minusWidth, 250);

function minusWidth() {

        switch (true) {
            case (width > 30 && windowWidth > 1536): 
            width -= 10;
            break;
        
            case (width > 30 && windowWidth < 1440 && windowWidth > 1366): 
            width -= 8;
            break;
        
            case (width > 30 && windowWidth < 1366 && windowWidth > 1024): 
            width -= 7;
            break;
        
            case (width > 30 && windowWidth < 1024 && windowWidth > 480): 
            width -= 5;
            break;
        }
        
        goal.style.width = width + "px"; 
    }

setInterval(pushNotice, 3000);

    function pushNotice () {
    
        function negativeNotice() {
            
            notice.style.right = "0"
            setTimeout(() => notice.style.right = "", 2500);
            notice.classList.add("notice_negative");
            setTimeout(() => notice.classList.remove("notice_negative"), 2000);
            
        }

        function positiveNotice() {
            
            notice.style.left = "0"
            setTimeout(() => notice.style.left = "", 2500);
            notice.classList.add("notice_positive");
            setTimeout(() => notice.classList.remove("notice_positive"), 2000);
            
        }

        function goalNegative () {
            goal.classList.add("goal_negative");
            setTimeout(() => goal.classList.remove("goal_negative"), 2000);
        }

        function goalPositive () {
            goal.classList.add("goal_positive");
            setTimeout(() => goal.classList.remove("goal_positive"), 2000);
        }

        
        let rNum2 = Math.floor(Math.random () * 101);
        

        switch (true) {
            
            case (rNum2 > 96 && rNum2 < 98 && width > 30):
            positiveNotice();
            goalPositive();
            notice.innerHTML = "<div>Победил<br>по жизни</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width += 3000;
            break;

            case (rNum2 > 20 && rNum2 < 30 && width > 30):
            positiveNotice();
            goalPositive();
            notice.innerHTML = "<div>Вдохновение</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width += 130;
            break;

            case (rNum2 > 30 && rNum2 < 45 && width > 30):
            positiveNotice();
            goalPositive();
            notice.innerHTML = "<div>Удача</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width += 70;
            break;

            case (rNum2 > 1 && rNum2 < 20 && width > 30):
            negativeNotice();
            goalNegative();
            notice.innerHTML = "<div>Поленился</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width -= 40;
            break;

            case (rNum2 > 45 && rNum2 < 50 && width > 30):
            negativeNotice();
            goalNegative();
            notice.innerHTML = "<div>Заболел</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width -= 100;
            break;

            case (rNum2 > 50 && rNum2 < 60 && width > 30):
            negativeNotice();
            goalNegative();
            notice.innerHTML = "<div>Неудача</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width -= 30;
            break;

            case (rNum2 > 98 && rNum2 < 100 && width > 30):
            negativeNotice();
            goalNegative();
            notice.innerHTML = "<div>Военкомат</div>";
            setTimeout(() => notice.innerHTML = "", 2400);
            width = 30;
            break;

            
        }
    }










// let bar_wraper = document.querySelectorAll('.bar_wraper')

// point.forEach(function(elem) {
//     elem.addEventListener("click", function () {
//         this.classList.add("active");
//     })
// })










