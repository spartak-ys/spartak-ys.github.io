import CWS from "./download/CWS.1.0.3.js";

let heartArt = document.getElementById("heartArt");
let downlode = document.getElementById("downlode");
let mainDownlode = document.getElementById("mainDownlode");
let main = document.getElementById("main");
let mainMain = document.getElementById("mainMain");
let SSHA = document.getElementById("SSHA");
let canvas = document.getElementById("canvas");
let tryBtn = document.getElementById("try")
let mainTry = document.getElementById("mainTry")

window.runCode = function () {
    let code = document.getElementById("code").value
    eval(code)
}

if(document.getElementById("code").value.trim() !== ""){
    runCode()
}
heartArt.width = 50
heartArt.height = 50
SSHA.width = SSHA.parentElement.clientWidth;
SSHA.height = SSHA.parentElement.clientHeight;

let heart = CWS.createSprite([
    ["",2 , "", 2, ""],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    ["", 2, 2, 2, ""],
    ["", "", 2, "",""]
], 10)
    CWS.drawSprite(heart, heartArt)

let SSH = CWS.createSprite(CWS.spriteGalery.rocket, 5, (SSHA.width-65)/2, (SSHA.height-120))


function  gameLoop() {
    CWS.clear(SSHA)
    CWS.drawSprite(SSH, SSHA)
    CWS.moveSprite(SSH, 0, -1)
    requestAnimationFrame(gameLoop)
    if (SSH.y + 120 < 0) { 
        SSH.y = SSHA.height; 
    }
}
gameLoop()

downlode.addEventListener("click", ()=>{
    mainDownlode.style.display = "flex";
    mainMain.style.display = "none";
    mainTry.style.display = "none";
})

main.addEventListener("click", ()=>{
    mainDownlode.style.display = "none";
    mainMain.style.display = "flex";
    mainTry.style.display = "none";
})

tryBtn.addEventListener("click", ()=>{
    mainDownlode.style.display = "none";
    mainMain.style.display = "none";
    mainTry.style.display = "flex";
})
