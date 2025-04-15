let secretcolor ="Կապույտ"
let gueess= prompt("Գուշակիր գույնը")

if (gueess==secretcolor) {
    document.write('<br>Դու ճիշտ ես')
}
else{
    document.write("<br>Դու սխալ ես")
}

setTimeout(function(){

alert("Մաս 2")


let guees= prompt("Գուշակիր գույնը")
let secretcolo ="Նարնջագույն"

if (guees==secretcolo) {
    document.write("<br>Դու ճիշտ ես")
}
else{
    document.write("<br>Դու սխալ ես")
}
}, 2000);
