const url ='https://api.chucknorris.io/jokes/random';
const chuck = document.getElementById("chuck");
const btn = document.getElementById("btn");

fetch(url)
    .then(response => response.json())
    .then(json => saveResult(json));

function saveResult(json){
    chuck.innerHTML= json.value;
}

function cambio(json) {
    chuck.innerHTML="<p>ssh</p>";
}