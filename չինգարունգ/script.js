let hashiv = 0;
let rhashiv = 0
document.getElementById("robotscore").innerText = rhashiv
document.getElementById("myscore").innerText = hashiv
let mertuxt = document.getElementById("img5") 
let rqar = document.getElementById("img1") 
let rtuxt = document.getElementById("img2") 
let rmkrat = document.getElementById("img3") 
let merqar = document.getElementById("img4") 
let mermkrat = document.getElementById("img6") 
function qar() {
    document.getElementById("img4").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img3").style.display="none";
    let random = Math.floor(Math.random() * 3)+1;
    document.getElementById("img" + random).style.display="block"
    if ( random === 3) {
    hashiv++
    document.getElementById("myscore").innerText = hashiv
}
if ( random === 2 ) {
    rhashiv++
    document.getElementById("robotscore").innerText = rhashiv
}
}
function tuxt() {
    document.getElementById("img5").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img6").style.display="none";
    let random = Math.floor(Math.random() * 3)+1;
    document.getElementById("img" + random).style.display="block"

    if ( random === 3) {
    rhashiv++
    document.getElementById("robotscore").innerText = rhashiv
}
if ( random === 1 ) {
    hashiv++
    document.getElementById("myscore").innerText = hashiv
}
}
function mkrat() {
    document.getElementById("img6").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    let random = Math.floor(Math.random() * 3)+1;
    document.getElementById("img" + random).style.display="block"

    if ( random === 1) {
    rhashiv++
    document.getElementById("robotscore").innerText = rhashiv
}
if ( random === 2 ) {
    hashiv++
    document.getElementById("myscore").innerText = hashiv
}
}
