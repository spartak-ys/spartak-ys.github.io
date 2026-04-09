import CWS from "./CWS.1.0.1.js"

let heartArt = document.getElementById("heartArt")
let downlode = document.getElementById("downlode")
let mainDownlode = document.getElementById("mainDownlode")
let main = document.getElementById("main")
let mainMain = document.getElementById("mainMain")

heartArt.width = 50
heartArt.height = 50

let heart = CWS.createSprite([
    ["",2 , "", 2, ""],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    ["", 2, 2, 2, ""],
    ["", "", 2, "",""]
], 10)

CWS.drawSprite(heart, heartArt)

downlode.addEventListener("click", ()=>{
    mainDownlode.style.display = "flex"
    mainMain.style.display = "none"
})

main.addEventListener("click", ()=>{
    mainDownlode.style.display = "none"
    mainMain.style.display = "flex"
})
