$("#color").click(() => $("p").toggleClass("red"));
const azul = document.getElementById("azul");
const p = document.getElementById("p");
azul.onclick=function(){
    p.classList.toggle("blue");
};