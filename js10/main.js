// Para hacer un remplazo global de una char o conjunto de char de un string se escribe /char/g
function palabra(word) {
    return word.replace(/a/g, "o");
}
console.log(palabra("vaya aquí no hay playa"));

function empezar(comienzo) {
    return comienzo.startsWith("aca");
}
console.log(empezar("academia"));
console.log(empezar("colegio"));

function saludar(saludo) {
    if (saludo === "Hola") {
        return saludo.replace("Hola", "Saludos! ".repeat(3));
    } else {
        return "Primero debes saludar";
    }
}
console.log(saludar("Hola"));