
const jugadas = ['piedra', 'papel', 'tijera']
let puntajeJuego = [];
let puntaje = 0;
let resultado;

const numeroJuagadas = parseInt(prompt('Cuantas veces deseas jugar en este torneo?'))

for (let i = 0; i < numeroJuagadas; i++) {
    const jugadaUser = prompt('Ingrese la jugada que deseas jugar (piedra, papel, tijera): ').toLowerCase()
    if (!jugadas.includes(jugadaUser)) {
        alert('opcion no valida')
        continue;
    }

    const indiceMaquina = Math.floor(Math.random() * jugadas.length)
    const opcionMaquina = jugadas[indiceMaquina]

    if (jugadaUser === opcionMaquina) {
        puntajeJuego.push(`Empate - Jugador con ${jugadaUser} - Maquina con ${opcionMaquina}`);
    } else if (
        (jugadaUser === 'piedra' && opcionMaquina === 'tijera') ||
        (jugadaUser === 'papel' && opcionMaquina === 'piedra') ||
        (jugadaUser === 'tijera' && opcionMaquina === 'papel')
    ) {
        puntaje++;
        puntajeJuego.push(`Jugador gana con ${jugadaUser} - Maquina pierde con ${opcionMaquina}`);
    } else {
        puntaje--;
        puntajeJuego.push(`Maquina gana con ${opcionMaquina} - Jugador pierde con ${jugadaUser}`);
    }
}

if (puntaje === 0) {
    resultado = `Jugador y Maquina Empatan`;
} else if (puntaje > 0) {
    resultado = `Jugador Gana`;
} else {
    resultado = `Maquina Gana`;
}

alert(resultado + '\n\n' + puntajeJuego.join('\n'))

