async function fetchMoviesJSON() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonResponse = await response.json();
    return jsonResponse;
}
fetchMoviesJSON().then(json => {
    document.getElementById("chuck").innerHTML = json.value;
});

function cambio() {
    fetchMoviesJSON().then(json => 
        {document.getElementById("chuck").innerHTML = json.value;
    });
}