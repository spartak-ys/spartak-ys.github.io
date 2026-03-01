function qar() {
    document.getElementById("img4").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img3").style.display="none";
    let random = Math.floor(Math.random() * 3)+1;
    document.getElementById("img" + random).style.display="block"
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
}