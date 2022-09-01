const img1 =document.getElementById("img-1");
const img2 =document.getElementById("img-2");
function front1() {
    img1.innerHTML='<img onmouseout="back1()" class="img-fluid img-thumbnail" style="height:58.3vmin; width: 40vmin;" src="./card-front.png" alt="Carta">'
}

function back1() {
    img1.innerHTML='<img id="img1" onmouseover="front1()" class="img-fluid img-thumbnail" style="height:58.3vmin; width: 40vmin;" src="./card-back.png" alt="Carta">'
}
function front2() {
    img2.innerHTML='<img onmouseout="back2()" class="img-fluid img-thumbnail" style="height:58.3vmin; width: 40vmin;" src="./card-front.png" alt="Carta">'
}

function back2() {
    img2.innerHTML='<img id="img1" onmouseover="front2()" class="img-fluid img-thumbnail" style="height:58.3vmin; width: 40vmin;" src="./card-back.png" alt="Carta">'
}