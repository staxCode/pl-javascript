// Inmutabilidad en JavaScript
console.log("--- Inmutabilidad en JavaScript ---");

// Valores primitivos
// Los valores primitivos (números, cadenas, booleanos, null, undefined, símbolos) 
// son inmutables. (Lo que significa que no pueden ser cambiados una vez creados).
function duplicar(x) {
    x = x * 2;
    console.log(x); // 10
}
let numero = 5;
duplicar(numero);
console.log(numero); // 5


// Objetos y arrays
// Los objetos y arrays son mutables por defecto, pero podemos trabajar con ellos
// de manera inmutable utilizando técnicas como la copia superficial o profunda.
