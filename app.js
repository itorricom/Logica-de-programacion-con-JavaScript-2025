
let numeroSecreto = 7;
let numeroUsuario = 0;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Ingrese un numero entre 1 y 10: ");
    console.log(numeroUsuario);

    if (numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor')
        }
        alert("lo sieto, no acertaste el numero");
    }
}

