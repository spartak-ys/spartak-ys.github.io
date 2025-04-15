function gumar () {
    const gumar1 = +document.getElementById("input1").value
    const gumar2 = +document.getElementById("input2").value
    const rezult = gumar1+gumar2
    document.getElementById("rezult").innerText = rezult
    
}
function hanum () {
    const hanum1 = +document.getElementById("input3").value
    const hanum2 = +document.getElementById("input4").value
    const rezult2 = hanum1-hanum2
    document.getElementById("rezult2").innerText = rezult2
}

function bazmapatkum () {
    const bazmapatkum1 = +document.getElementById("input5").value
    const bazmapatkum2 = +document.getElementById("input6").value
    const rezult3 = bazmapatkum1*bazmapatkum2
    document.getElementById("rezult3").innerText = rezult3
}

function bajanum () {
    const bajanum1 = +document.getElementById("input7").value
    const bajanum2 = +document.getElementById("input8").value
    const rezult4 = bajanum1/bajanum2
    document.getElementById("rezult4").innerText = rezult4
}