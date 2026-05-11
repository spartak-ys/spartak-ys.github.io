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
let harcer =  document.getElementsByClassName("harcer")
let pat = document.getElementsByClassName("xaxiPat")
let xaxiDiv = document.getElementById("xaxiDiv")
let scoreSpan = document.getElementById("score")

let truePat;

let score = 0
let harc = 0

let chishtPat = [
    "Գյուրզա",
    4,
    "Սեվ այր",
    "Սև հաստապոչ կարիճ",
    "Այո",
    "Լեռներում",
    "Գայլասարդ",
    "Թունավոր օձերի մոտ ուղահայաց է",
    "Տափաստանևժյան իժ",
    "1 տարի",
    "Էկո համակկարքը կվատանա"
]


let sxalPat = [
    ["Կոբրա", "Հայկական իժ", "Ոչմեկ"],
    [2, 1, 3],
    ["Տառանտուլա", "Գայլասարդ", "Մեծ խաչասարդ"],
    ["Դեղին կարիճը", "Իտալական կարիճը", "Կարմիր կարիճը"],
    ["Ոչ", "Չգիտեմ", "Դա ոչմեկ չգիտի"],
    ["Փողոցներում", "Ոչ լեռնային անտառներում", "Տներում"],
    ["Սեվ այր", "Մեծ խաչասարդ", "Կեղծ սև այր"],
    ["Ոչմի", "Թունավոր օձերինը կլոր է", "Չիգիտեմ"],
    ["Գյուրզա", "Հայկական Իժ", "Այդպիսի օձ չկա"],
    ["1 օր", "1 ամիս", "1 շաբաթ"],
    ["Ամեն ինչ ավելի լավ կլինի", "Ոչինչ չի լինի", "Էկո համակարգը կլավանա"]
]



let harcTesak = "eazy"

function setNewTarget() {

    for(let el of pat){
        el.innerText = "";
    }

    truePat = pat[Math.floor(Math.random() * pat.length)];
    truePat.innerText = chishtPat[harc]

    let wrongs = sxalPat[harc];
    let i = 0;

    for (let el of pat) {
        if (el !== truePat) {
            el.innerText = wrongs[i];
            i++;
        }
    }
}


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
    xaxiDiv.style.display = "none"
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

navXax.addEventListener("click", ()=>{
    hideAll()
    xaxiDiv.style.display = "flex"
    score = 0
    harc = 0

    for (let h of harcer) {
        h.style.display = "none";
    }

    harcer[0].style.display = "flex";

    setNewTarget()
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



for (let el of pat) {
    el.addEventListener("click", () => {
        if (el === truePat) {
            el.classList.add("true");

            setTimeout(() => {
                el.classList.remove("true");
            }, 2000);

            if (harc <= 4) {
                harcTesak = "eazy";
            } else if (harc <= 7) {
                harcTesak = "med";
            } else {
                harcTesak = "hard";
            }


            if(harcTesak === "eazy"){
                score++;
                scoreSpan.innerText = `${score} միավոր`;
            };
            if(harcTesak === "med"){
                score += 2;
                scoreSpan.innerText = `${score} միավոր`;
            };

            if(harcTesak === "hard"){
                score += 3;
                scoreSpan.innerText = `${score} միավոր`;
            };

        } else {
            el.classList.add("false");

            setTimeout(() => {
                el.classList.remove("false");
            }, 2000);
        }
        setTimeout(()=>{
            harcer[harc].style.display = "none";
            harc++;
            setNewTarget()
        }, 2000)

        if (harc < harcer.length) {
            setTimeout(()=>harcer[harc].style.display = "flex", 2000)
        } 
        if(harc >= 10) {
            setTimeout(()=>alert(`Շնորհավորում ենք դուք հավագել եք ${score} միավոր`), 2000)
            setTimeout(()=>{
                xaxiDiv.style.display = "none";
                mainBarev.style.display = "flex"
            }, 2001)
            return;
        }
        
    });
}

