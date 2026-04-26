
let nav = document.querySelector("nav");
let navXax = document.getElementById("navXax")
let navInfo = document.getElementById("navInfo")
let navWellcome = document.getElementById("navWellcome")
let bars = document.querySelector(".fa");
let mainBarev = document.getElementById("mainBarev")
let mainKendaninery = document.getElementById("mainKendaniner")
let mainSnake = document.getElementById("mainSnake")
let mainScorpion = document.getElementById("mainScorpion")
let mainSpider = document.getElementById("mainSpider")
let mainSnakeMain = document.getElementById("mainSnakeMain")
let mainSpiderMain = document.getElementById("mainSpiderMain")
let mainScorpionMain = document.getElementById("mainScorpionMain")
let texter = document.getElementsByClassName("texter")
let kartchkeq = document.getElementsByClassName("kartchkeq")

bars.addEventListener("click", () => {
    let currentDisplay = window.getComputedStyle(nav).display;

    if (currentDisplay === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})

function hideAll() {
    mainBarev.style.display = "none";
    mainKendaninery.style.display = "none";
    mainSnakeMain.style.display = "none";
    mainSpiderMain.style.display = "none";
    mainScorpionMain.style.display = "none";
    nav.style.display = "none"
    for(let el of texter){
        el.style.display = "none"
    }
}

navInfo.addEventListener("click", ()=>{
    hideAll()
    mainKendaninery.style.display = "flex"
    nav.style.display = "none"
})

navWellcome.addEventListener("click", ()=>{
    hideAll()
    mainBarev.style.display = "flex";
    nav.style.display = "none"
})

mainSnake.addEventListener("click", ()=>{
    mainKendaninery.style.display = "none"
    mainSnakeMain.style.display = "flex"
})
mainSpider.addEventListener("click", ()=>{
    mainKendaninery.style.display = "none"
    mainSpiderMain.style.display = "flex"
})

mainScorpion.addEventListener("click", ()=>{
    mainKendaninery.style.display = "none"
    mainScorpionMain.style.display = "flex"
})

for(let el of kartchkeq){
    el.addEventListener("click", ()=>{
        hideAll();

        let targetId = el.dataset.target;
        let target = document.getElementById(targetId);

        if(target){
            target.style.display = "flex";
        }
    })
}
