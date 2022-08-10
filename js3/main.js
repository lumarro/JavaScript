let str = "Letras";
let num = 123;
let boo = true;
let nul = null;
let und = undefined;
let sym = Symbol("Algo");
let tra = {nombre:"Luis", apellido:"Martínez"};
let arr = [1,"dos",3];
let saludar = function(){
    console.log("Hola");
}
console.log(str);
console.log(typeof str);
console.log(num);
console.log(typeof num);
console.log(boo);
console.log(typeof boo);
console.log(nul);
console.log(typeof nul);
console.log(und);
console.log(typeof und);
console.log(sym);
console.log(typeof sym);
console.table(tra);
console.log(typeof tra);
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(typeof arr[1]);
saludar();
console.log(typeof saludar);

let nombre = "David";
function nombres(){
    console.log(nombre);
}
console.log(nombre);
nombres();