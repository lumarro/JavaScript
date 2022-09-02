var btn = document.getElementById("btn");
var div1 = document.getElementById("div-1");
var div2 = document.getElementById("div-2");
var btn2 = document.getElementById("btn2");
var form = document.getElementById("form");
var bulb = document.querySelector("#bulb");
$("#form").hide();
function switchon(){
    var zoom = document.getElementById("rangozoom").value;
    div1.innerHTML='<img id="btn2" onclick="switchoff()" style="height:10vmin; width: 10vmin;" src="./bon.jpg" alt="Boton">'
    div2.innerHTML='<img id="bulb2" style="height:78.5vmin; width: 60vmin;" src="./on.jpg" alt="bombilla">'
    if (zoom == 10) {
        div2.innerHTML='<img id="bulb" style="height:78.5vmin;width:60vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 9) {
        div2.innerHTML='<img id="bulb" style="height:70.65vmin;width:54vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 8) {
        div2.innerHTML='<img id="bulb" style="height:62.8vmin;width:48vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 7) {
        div2.innerHTML='<img id="bulb" style="height:54.95vmin;width:42vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 6) {
        div2.innerHTML='<img id="bulb" style="height:47.1vmin;width:36vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 5) {
        div2.innerHTML='<img id="bulb" style="height:39.25vmin;width:30vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 4) {
        div2.innerHTML='<img id="bulb" style="height:31.4vmin;width:24vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 3) {
        div2.innerHTML='<img id="bulb" style="height:23.55vmin;width:18vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 2) {
        div2.innerHTML='<img id="bulb" style="height:15.7vmin;width:12vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 1) {
        div2.innerHTML='<img id="bulb" style="height:7.85vmin;width:6vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    $("#form").show();

};
function switchoff(){
    var zoom = document.getElementById("rangozoom").value;
    div1.innerHTML='<img id="btn" onclick="switchon()" style="height:10vmin; width: 10vmin;" src="./boff.jpg" alt="Boton">'
    div2.innerHTML='<img id="bulb" style="height:78.5vmin; width: 60vmin;" src="./off.jpg" alt="bombilla">'
    if (zoom == 10) {
        div2.innerHTML='<img id="bulb" style="height:78.5vmin;width:60vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 9) {
        div2.innerHTML='<img id="bulb" style="height:70.65vmin;width:54vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 8) {
        div2.innerHTML='<img id="bulb" style="height:62.8vmin;width:48vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 7) {
        div2.innerHTML='<img id="bulb" style="height:54.95vmin;width:42vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 6) {
        div2.innerHTML='<img id="bulb" style="height:47.1vmin;width:36vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 5) {
        div2.innerHTML='<img id="bulb" style="height:39.25vmin;width:30vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 4) {
        div2.innerHTML='<img id="bulb" style="height:31.4vmin;width:24vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 3) {
        div2.innerHTML='<img id="bulb" style="height:23.55vmin;width:18vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 2) {
        div2.innerHTML='<img id="bulb" style="height:15.7vmin;width:12vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    if (zoom == 1) {
        div2.innerHTML='<img id="bulb" style="height:7.85vmin;width:6vmin" class="bulb" src="./off.jpg" alt="bombilla">';
    }
    $("#form").hide();
}
function mover1(){
    var zoom = document.getElementById("rangozoom").value;
    document.getElementById("lightzoom").innerHTML="Light Bulb Zoom "+zoom;
    if (zoom == 10) {
        div2.innerHTML='<img id="bulb" style="height:78.5vmin;width:60vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 9) {
        div2.innerHTML='<img id="bulb" style="height:70.65vmin;width:54vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 8) {
        div2.innerHTML='<img id="bulb" style="height:62.8vmin;width:48vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 7) {
        div2.innerHTML='<img id="bulb" style="height:54.95vmin;width:42vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 6) {
        div2.innerHTML='<img id="bulb" style="height:47.1vmin;width:36vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 5) {
        div2.innerHTML='<img id="bulb" style="height:39.25vmin;width:30vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 4) {
        div2.innerHTML='<img id="bulb" style="height:31.4vmin;width:24vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 3) {
        div2.innerHTML='<img id="bulb" style="height:23.55vmin;width:18vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 2) {
        div2.innerHTML='<img id="bulb" style="height:15.7vmin;width:12vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
    if (zoom == 1) {
        div2.innerHTML='<img id="bulb" style="height:7.85vmin;width:6vmin" class="bulb" src="./on.jpg" alt="bombilla">';
    }
}
function mover2(){
    var luz = document.getElementById("rangoluz").value;
    document.getElementById("lightlvl").innerHTML="Light Level "+luz;
    $("#div-2").fadeTo(50,luz/10);
}
/*hacer el faceTo() de jQuery (Diapo 195) para la luminosidad*/