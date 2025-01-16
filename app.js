// Declarion de variables
let numeroSecreto = 7;
let numeroUsuario = prompt("Ingrese un numero entre 1 y 10: ");
console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
*/
if(numeroSecreto == numeroUsuario) {
    //Acertamos, fue verdadea la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    //La condicion no se cumplio
    alert("lo sieto, no acertaste el numero");
}


