
let numeroSecreto = Math.floor(Math.random() *10)+1;
console.log(numeroSecreto);

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Ingrese un numero entre 1 y 10: ");
    console.log(numeroUsuario);

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
}

