function moneda(x) {
    var x = Math.round(Math.random())
    /* console.log(x) si quisiera imprimir el resultado para comprobarlo*/
    if (x == 1) {
        return "cara";
    }
    if (x == 0) {
        return "cruz";
    }
}
console.log(moneda());

