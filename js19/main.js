var btn = document.getElementById("btn");
var div1 = document.getElementById("div-1");
var div2 = document.getElementById("div-2");
var btn2 = document.getElementById("btn2");
function switchon(){
    div1.innerHTML='<img id="btn2" onclick="switchoff()" style="height:10vmin; width: 10vmin;" src="./bon.jpg" alt="Boton">'
    div2.innerHTML='<img id="bulb2" style="height:78.5vmin; width: 60vmin;" src="./on.jpg" alt="bombilla">'
};
function switchoff(){
    div1.innerHTML='<img id="btn" onclick="switchon()" style="height:10vmin; width: 10vmin;" src="./boff.jpg" alt="Boton">'
    div2.innerHTML='<img id="bulb" style="height:78.5vmin; width: 60vmin;" src="./off.jpg" alt="bombilla">'
}

/*hacer el faceTo() de jQuery (Diapo 195) para la luminosidad*/