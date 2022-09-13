const url ='https://api.chucknorris.io/jokes/random';

fetch(url)
    .then(response => response.json())
    .then(json => saveResult(json));

function saveResult(json){
    document.write(json.value);
}