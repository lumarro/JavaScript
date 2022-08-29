// Math.round es redondear a los números enteros y Math.random es un numero aleatorio del 0 al 1;
console.log(Math.round(Math.random()));

/* Hay un código extenso pero que no entiendo a este nivel en la página developer.mozilla.org. 
Por lo tanto he encontrado esta forma de solucionarlo ya que es más simple: el floor te redondea al entero 
por lo tanto multiplicas, redondeas y divides para redondear al fin y al cabo; */
const n = Math.floor(Math.PI*1000) / 1000;
console.log(n);