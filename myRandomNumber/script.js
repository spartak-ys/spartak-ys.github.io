let random = Math.floor(Math.random()*100)+1;
document.getElementById("input").addEventListener("change", function(){
    let input = Number(document.getElementById("input").value);
    if (input<random) {
        document.getElementById("result").innerText = "իմ մտապահած թիվը մեծ է քո գրածինից";
    }
    if (input>random) {
        document.getElementById("result").innerText = "իմ մտապահած թիվը փոքր է քո գրածինից";
    }
    if (input===random) {
        document.getElementById("result").innerText = "ճիշտ է իմ մտապահած թիվն էր "+ random ;
    }

} ) ;
