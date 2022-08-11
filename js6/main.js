function numeros(x,y,z) {
    return x+y+z;
}
console.log(numeros(1,2,3));

function identificacion(nombre, apellido1, apellido2) {
    return nombre+apellido1+apellido2;
}
console.log(identificacion("Luis ", "Martínez ", "Rodríguez"))

function seleccion(i, j) {
    /* console.log(i,j) sirve para ver que numeros han salido */
    if (i>j) {
        return i;
    }
    if (j>i) {
        return j;
    }
}
console.log(seleccion(Math.random(),Math.random()))