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


/*
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let diaSemana = prompt('Que dia de la Semana es: ');
if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

let numeroIngresado = prompt('Ingrese un numero: ');

if(numeroIngresado > 0){
    alert('El numero ingresado es positivo');
}else{
    alert('El numero ingresado es negativo')
}

let puntuacion = prompt('Ingrese una puntuacion: ');
if(puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar.");
}

let saldoCuenta = 100;
alert(`Su saldo actual es: ${saldoCuenta}`);

let nombre = prompt('Ingrese su nombre: ');
alert(`Bienvenida ${nombre} al curso de logica de programacion`);
