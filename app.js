let numeroSecreto = 7;
let numeroUsuario = prompt("Ingrese un numero: ");
console.log(numeroUsuario);
if(numeroSecreto == numeroUsuario) {
    alert("Felicidades, acertaste!");
} 

/* Hora de practicar
Practicar la lógica de programación, incluyendo conceptos como variables, condicionales (if), alertas (alert), solicitudes (prompt), es esencial para tu carrera y desarrollo. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear bucles controlados e interactuar eficazmente con las personas.

Desafíos

Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
Declara una variable llamada nombre y asígnale el valor "Lua".
Crea una variable llamada edad y asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección */

alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponibles = 1000;
alert("¡Error! Completa todos los campos");
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
nombre = prompt("Cual su nombre escriba: ");
edad = prompt("Cual es su edad escriba: ");
if(edad>18){
    alert("¡Puedes obtener tu licencia de conducir!");
}

