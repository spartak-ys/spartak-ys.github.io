let hashiv =0;
let rHashiv = 0;
document.getElementById("imHashiv").innerText = hashiv;
document.getElementById("robotiHashiv").innerText = rHashiv;
function qar() {
document.getElementById("img8").style.display="inline";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img2").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img7").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img6").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img5").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img4").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img1").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}


};
function tuxt() {
document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="inline";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img4").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img5").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img6").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}    
if (document.getElementById("img7").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img1").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img2").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};
function krak() {
    document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="inline";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img4").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img1").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img7").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img6").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img2").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img5").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img3").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};
function moxir() {
        document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="inline";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img6").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img4").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img2").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img5").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img1").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img7").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};
function buys() {
        document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="inline";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img5").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img2").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img7").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img1").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img4").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img6").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};
function mard() {
        document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="none";
document.getElementById("img12").style.display="inline";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img1").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img7").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img6").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img2").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img4").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img5").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};
function bj() {
        document.getElementById("img8").style.display="none";
document.getElementById("img9").style.display="none";
document.getElementById("img10").style.display="none";
document.getElementById("img11").style.display="inline";
document.getElementById("img12").style.display="none";
document.getElementById("img13").style.display="none";
document.getElementById("img14").style.display="none";
document.getElementById("img1").style.display="none";
document.getElementById("img2").style.display="none";
document.getElementById("img3").style.display="none";
document.getElementById("img4").style.display="none";
document.getElementById("img5").style.display="none";
document.getElementById("img6").style.display="none";
document.getElementById("img7").style.display="none";
document.getElementById("right").style.display="none";
document.getElementById("wrong").style.display="none";
document.getElementById("draw").style.display="none";
let random = Math.floor(Math.random() * 7) + 1;
document.getElementById("img" + random).style.display="inline";
if (document.getElementById("img1").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img5").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img6").style.display==="inline") {
    rHashiv++;
    document.getElementById("robotiHashiv").innerText = rHashiv;
    document.getElementById("wrong").style.display="inline-block";
}
if (document.getElementById("img7").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img2").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img3").style.display==="inline") {
    hashiv++;
    document.getElementById("imHashiv").innerText = hashiv;
    document.getElementById("right").style.display="inline-block";
}
if (document.getElementById("img4").style.display === "inline") {
    document.getElementById("draw").style.display = "inline-block"
}
};