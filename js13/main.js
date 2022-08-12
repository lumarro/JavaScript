let numero = 1; 
let i = 0; /* numero vale 1 y i vale 0 inicialmente */;
do {
    if(i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else{
        numero++;
        console.log(numero);
    }
} while (numero < 5);
/* Mientras i sea 0 (por lo tanto al inicio) se le suma un 1 a i y se le resta un 1 a numero e imprime el valor de numero hasta que numero sea 5,
por lo tanto al principio i=0 y numero=1, y por eso avanza hacia i=1 y numero=0 e imprime numero=0,
ahora como i no es 0 hará función del else que es sumar un 1 a numero e imprimir numero,
por esto (como i ahora vale 1) avanza a numero=1 y lo imprime,
de aquí en adelante como i seguirá valiendo 1 seguirá haciendo el else (sumar 1 a numero) hasta que numero valga 5.
Es por esto que imprime el numero cuando se le resta 1 al principio (valiendo 0) y luego imprime del 1 al 5*/;
