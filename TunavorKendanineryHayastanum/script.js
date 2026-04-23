
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

bars.addEventListener("click", () => {
    let currentDisplay = window.getComputedStyle(nav).display;

    if (currentDisplay === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})

navInfo.addEventListener("click", ()=>{
    mainBarev.style.display = "none";
    mainKendaninery.style.display = "flex";
    nav.style.display = "none"
})

navWellcome.addEventListener("click", ()=>{
    mainBarev.style.display = "flex";
    mainKendaninery.style.display = "none";
    nav.style.display = "none"
})

mainSnake.addEventListener("click", ()=>{
    mainKendaninery.style.display = "none"
})
