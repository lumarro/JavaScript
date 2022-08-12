//Iteración con for;
for (let step = 0; step < 5; step++) {
    console.log(step)
}
//Iteración con while;
let numero = 0;
while (numero < 3) {
    console.log(numero);
    numero++;
}
//Iteración con do while;
let numer = 0;
do {
    numer += 1;
    console.log(numer);
} while (numer < 5);
//Iteración con forEach;
const array = ["a", 1, true];
array.forEach( item =>{
    console.log(item);
})