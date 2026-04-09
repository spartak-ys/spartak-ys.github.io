import CWS from "./CWS.1.0.1.js"

let heartArt = document.getElementById("heartArt")
let downlode = document.getElementById("downlode")
let mainDownlode = document.getElementById("mainDownlode")
let main = document.getElementById("main")
let mainMain = document.getElementById("mainMain")
let SSHA = document.getElementById("SSHA")

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

let SSH = CWS.createSprite([
        ['', '', '', '', '', '', 1, '', '', '', '', '', '' ],
    ['', '', '', '', '', 1, 2, 1, '', '', '', '', ''],
    ['', '', '', '', 1, 2, 2, 2, 1, '', '', '', ''],
    ['', '', '', '', 1, 2, 2, 2, 1, '', '', '', ''],
    ['', '', '', 1, 2, 2, 2, 2, 2, 1, '', '', ''],
    ['', '', '', 1, 1, 1, 1, 1, 1, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', '', 1, 0, 0, 0, 0, 0, 1, '', '', ''],
    ['', '', 1, 1, 0, 0, 0, 0, 0, 1, 1, '', ''],
    ['', 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, ''],
    [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 1, "", "", 1, 5, 5, 5, 1, "", "", 1, 1],
    ["", "", "", 1, 9, 5, 5, 5, 9, 1, "", "", ""],
    ["", "", "", 1, 9, 9, 5, 9, 9, 1, "", "", ""],
    ["", "", "", "", 1, 9, 9, 9, 1, "", "", "", ""],
    ["", "", "", "", "", 1, 9, 1, "", "", "", "", ""],
    ["", "", "", "", "", "", 1, "", "", "", "", "", ""]
], 5, (SSHA.width-65)/2, (SSHA.height-120))


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
    mainDownlode.style.display = "flex"
    mainMain.style.display = "none"
})

main.addEventListener("click", ()=>{
    mainDownlode.style.display = "none"
    mainMain.style.display = "flex"
})