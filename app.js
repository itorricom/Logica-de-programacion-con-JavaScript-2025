/* 
let numeroSecreto = 7;
let numeroUsuario = 0;
let intento = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Ingrese un numero entre 1 y 10: ");
    console.log(numeroUsuario);

    if (numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario}, Lo hiciste en ${intento} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor')
        }
        alert("lo sieto, no acertaste el numero");
        intento = intento + 1;
        palabraVeces ='veces';
    }
} */

/* 
    Desafío Loops
Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:

Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */
console.log('\n============== 1 ==================');

let contatador = 1;
while (contatador < 11) {
    console.log(contatador);
    contatador++;    
}
console.log('\n============== 2 ==================');

let count = 10;
while (count > -1) {
    console.log(count);    
    count--;
}

console.log('\n============== 3 ==================');
let numero = prompt('Un numero para cuenta regresiva');
while (numero > -1) {
    console.log(numero);    
    numero--;
}

console.log('\n============== 4 ==================');

let numeroTope = prompt('Un numero para cuenta progresiva');
let num = 0
while (num <=  numeroTope) {
    console.log(num);
    num++;    
}