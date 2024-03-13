
const opciones = ['piedra', 'papel', 'tijera']
let jugada = [];
let puntaje = 0;
let resultado;

const numeroJuagadas = parseInt(prompt('Cuantas veces deseas jugar en este torneo?'))

for (let i = 0; i < numeroJuagadas; i++) {
    const jugadaUser = prompt('Ingrese la jugada que deseas jugar (piedra, papel, tijera): ').toLowerCase()
    if (!opciones.includes(jugadaUser)) {
        jugada.push(`Jugador igreso un valor incorrecto: ${jugadaUser} - Jugada Invalida`);
        alert('opcion no valida')
        continue;
    }

    const indiceMaquina = Math.floor(Math.random() * opciones.length)
    const opcionMaquina = opciones[indiceMaquina]

    if (jugadaUser === opcionMaquina) {
        jugada.push(`Empate - Jugador con ${jugadaUser} - Maquina con ${opcionMaquina}`);
    } else if (
        (jugadaUser === 'piedra' && opcionMaquina === 'tijera') ||
        (jugadaUser === 'papel' && opcionMaquina === 'piedra') ||
        (jugadaUser === 'tijera' && opcionMaquina === 'papel')
    ) {
        puntaje++;
        jugada.push(`Jugador gana con ${jugadaUser} - Maquina pierde con ${opcionMaquina}`);
    } else {
        puntaje--;
        jugada.push(`Maquina gana con ${opcionMaquina} - Jugador pierde con ${jugadaUser}`);
    }
}

if (puntaje === 0) {
    resultado = `Jugador y Maquina Empatan`;
} else if (puntaje > 0) {
    resultado = `Jugador Gana`;
} else {
    resultado = `Maquina Gana`;
}

alert(resultado + '\n\n' + jugada.join('\n'))

