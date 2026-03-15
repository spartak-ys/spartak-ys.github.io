let marginv = 0;
let margin = 0;
let marmin = document.getElementById("amboxjMarmin");
let z =0;

document.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight"){
    margin += 10;
    marmin.style.marginLeft = margin + "px";
  }
  if(e.key === "ArrowLeft"){
    margin -= 10;
    marmin.style.marginLeft = margin + "px";
  }
  if(e.key === "ArrowDown"){
    marginv += 10;
    marmin.style.marginTop = marginv + "px";
  }
  if(e.key === "ArrowUp"){
    marginv -= 10;
    marmin.style.marginTop = marginv + "px";
  }
})
