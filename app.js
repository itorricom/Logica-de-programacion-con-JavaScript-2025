

//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Hola, bienvenido a la consola");

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Isidoro Torrico';
console.log(`Hola, ${nombre}`);

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre2 = 'Isidoro Torrico M.';
alert(`¡Hola, ${nombre2}!`);

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let pregunta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(pregunta);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor3 = 15;
let valor4 = 5;
let resultado2 = valor3 - valor4;
console.log(`La diferencia entre ${valor3} y ${valor4} es igual a ${resultado2}`);

//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('¿Cuál es tu edad?');
if (edad > 17) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Ingrese un número');
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero < 0) {
    console.log('El número es negativo');
} else {
    console.log('El número es cero');
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero3 = 1;
while (numero3 <= 10) {
    console.log(numero3);
    numero3++;
}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8;
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);




















/* let numeroSecreto = Math.floor(Math.random() *10)+1;
console.log(numeroSecreto);

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Ingrese un numero entre 1 y 10: "));
    console.log(typeof(numeroUsuario));

    if (numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor')
        }
        //intentos = intentos + 1;
        //intentos += 1
        intentos++;
        //palabraVeces ='veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
} */
