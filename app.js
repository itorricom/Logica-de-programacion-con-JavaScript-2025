
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Ingrese un numero entre 1 y 10: ");
    console.log(numeroUsuario);

    if (numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario}, Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor')
        }
        intentos = intentos + 1;
        palabraVeces ='veces';
        if(intentos > 3 ){
            alert("Has superado el numero de intentos permitidos. El numero secreto era: " + numeroSecreto);
            break;
        }
    }
}

