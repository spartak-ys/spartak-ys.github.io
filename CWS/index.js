import CWS from "./download/CWS.1.0.4.js";

let heartArt = document.getElementById("heartArt");
let downlode = document.getElementById("downlode");
let mainDownlode = document.getElementById("mainDownlode");
let main = document.getElementById("main");
let mainMain = document.getElementById("mainMain");
let SSHA = document.getElementById("SSHA");
let canvas = document.getElementById("canvas");
let tryBtn = document.getElementById("try")
let mainTry = document.getElementById("mainTry")
let api = document.getElementById("api")
let mainApi = document.getElementById("mainApi")
let apiDivs = document.getElementsByClassName("apiDivs")
let apiColors = document.getElementById("apiColors");
let apiCreatSprite = document.getElementById("apiCreatSprite");
let apiDrawSprite = document.getElementById("apiDrawSprite");
let apiDrawSprites = document.getElementById("apiDrawSprites");
let apiMoveSprite = document.getElementById("apiMoveSprite");
let apiClear = document.getElementById("apiClear");
let apiIsCollision = document.getElementById("apiIsCollision");
let apiIsInCanvas = document.getElementById("apiIsInCanvas");
let apiSetPosition = document.getElementById("apiSetPosition");
let apiCenterSprite = document.getElementById("apiCenterSprite");
let apiCenterSpriteByX = document.getElementById("apiCenterSpriteByX");
let apiCenterSpriteByY = document.getElementById("apiCenterSpriteByY");
let apiCloneSprite = document.getElementById("apiCloneSprite");
let apiFollowSprite = document.getElementById("apiFollowSprite");
let apiKeepInCanvas = document.getElementById("apiKeepInCanvas");
let apiArrowControl = document.getElementById("apiArrowControl");
let apiWASDControl = document.getElementById("apiWASDControl");
let apiSpriteGallery = document.getElementById("apiSpriteGallery");
let apiLearnDivs = document.getElementsByClassName("apiLearnDivs")
const colorsDiv = document.getElementById('apiLColors');
const createSpriteDiv = document.getElementById('apiLCreateSprite');
const drawSpriteDiv = document.getElementById('apiLDrawSprite');
const drawSpritesDiv = document.getElementById('apiLDrawSprites');
const moveSpriteDiv = document.getElementById('apiLMoveSprite');
const clearDiv = document.getElementById('apiLClear');
const collisionDiv = document.getElementById('apiLIsCollision');
const isInCanvasDiv = document.getElementById('apiLIsInCanvas');
const setPositionDiv = document.getElementById('apiLSetPosition');
const centerSpriteDiv = document.getElementById('apiLCenterSprite');
const centerXDiv = document.getElementById('apiLCenterSpriteByX');
const centerYDiv = document.getElementById('apiLCenterSpriteByY');
const cloneDiv = document.getElementById('apiLCloneSprite');
const followDiv = document.getElementById('apiLFollowSprite');
const keepInCanvasDiv = document.getElementById('apiLKeepInCanvas');
const arrowControlDiv = document.getElementById('apiLArrowControl');
const wasdControlDiv = document.getElementById('apiLWASDControl');
const galleryDiv = document.getElementById('apiLSpriteGallery');
const apiRocketArt = document.getElementById('apiRocketArt')



window.runCode = function () {
    let code = document.getElementById("code").value;
    try {
        eval(code);
    } catch (err) {
        console.error("Error in your code: ", err.message);
    }
}

runCode()

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

let SSH = CWS.createSprite(CWS.spriteGallery.rocket, 5, (SSHA.width-65)/2, (SSHA.height-120))


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
    mainApi.style.display = "none";
})

main.addEventListener("click", ()=>{
    mainDownlode.style.display = "none";
    mainMain.style.display = "flex";
    mainTry.style.display = "none";
    mainApi.style.display = "none";
})

tryBtn.addEventListener("click", ()=>{
    mainDownlode.style.display = "none";
    mainMain.style.display = "none";
    mainTry.style.display = "flex";
    mainApi.style.display = "none";
})

api.addEventListener("click", ()=>{
    mainDownlode.style.display = "none";
    mainMain.style.display = "none";
    mainTry.style.display = "none";
    mainApi.style.display = "flex";
})

apiColors.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    colorsDiv.style.display = "flex";
})

apiCreatSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    createSpriteDiv.style.display = "flex";
})

apiDrawSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    drawSpriteDiv.style.display = "flex";
})

apiDrawSprites.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    drawSpritesDiv.style.display = "flex";
})

apiMoveSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    moveSpriteDiv.style.display = "flex";
})

apiClear.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    clearDiv.style.display = "flex";
})

apiIsCollision.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    collisionDiv.style.display = "flex";
})

apiIsInCanvas.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    isInCanvasDiv.style.display = "flex";
})

apiSetPosition.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    setPositionDiv.style.display = "flex";
})

apiCenterSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    centerSpriteDiv.style.display = "flex";
})

apiCenterSpriteByX.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    centerXDiv.style.display = "flex";
})

apiCenterSpriteByY.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    centerYDiv.style.display = "flex";
})

apiCloneSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    cloneDiv.style.display = "flex";
})

apiFollowSprite.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    followDiv.style.display = "flex";
})

apiKeepInCanvas.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    keepInCanvasDiv.style.display = "flex";
})

apiArrowControl.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    arrowControlDiv.style.display = "flex";
})

apiWASDControl.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    wasdControlDiv.style.display = "flex";
})

apiSpriteGallery.addEventListener("click", ()=>{

    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    galleryDiv.style.display = "flex";


    for (let div of apiLearnDivs) {
        div.style.display = "none";
    }

    galleryDiv.style.display = "flex";

})
