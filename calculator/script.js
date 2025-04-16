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

function armat () {
    const armat = +document.getElementById("input9").value
    const rezult5 = Math.sqrt(armat)
    document.getElementById("rezult5").innerText = rezult5
}

function astitan () {
    const astitan1 = +document.getElementById("input10").value
    const astitan2 = +document.getElementById("input11").value
    const rezult6 = astitan1**astitan2 
    document.getElementById("rezult6").innerText = rezult6
}
function tokos () {
    const tokos1 = +document.getElementById("input12").value
    const tokos2 = +document.getElementById("input13").value
    const rezult7 = tokos1*tokos2/100
    document.getElementById("rezult7").innerText = rezult7
}