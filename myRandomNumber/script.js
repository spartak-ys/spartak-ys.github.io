let random = Math.floor(Math.random()*100)+1;
document.getElementById("input").addEventListener("change", function(){
    let input = Number(document.getElementById("input").value);
    if (input<random) {
        document.getElementById("result").innerText = "մեծ է " + input+" ից";
    }
    if (input>random) {
        document.getElementById("result").innerText = "փոքր է "+ input+" ից";
    }
    if (input===random) {
        document.getElementById("result").innerText = "ճիշտ է"
        ;
    }

} ) ;

