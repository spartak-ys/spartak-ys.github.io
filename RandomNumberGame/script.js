var input = document.getElementById("input");
var button = document.getElementById("button");
var patasxan = document.getElementById("patasxan");

let rn = Math.floor(Math.random()*9)+1;
console.log(rn);

button.addEventListener("click", function(){
    let a;
    if (parseInt(input.value)==rn) {
    a="Դու ճիշտ ես";
} else{
    a="Դու սխալ ես";
}
patasxan.innerText = a;
});
