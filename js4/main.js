const nombre = (name, apellidos) => {
    console.log(name + apellidos);
}
nombre("Luis ", "Martínez Rodríguez");

function saludo(feliz) {
    console.log(feliz);
}
saludo(true)

function numeros(...valores) {
    valores.forEach(element => {
        console.log(element)
    });
}
numeros(1,2,3,4,5)