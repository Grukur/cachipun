/* Solicitar info al user donde se ingresa la cantidad de juegos a jugar contra la maquina */
let jugadas = ['piedra', 'papel', 'tijera']
let puntajeUser;
let puntajeMaquina;

let numeroJuagadas = parseInt(prompt('Cuantas veces deseas jugar en este torneo?'))

for(let i = 0; i < numeroJuagadas; i++) {
    let jugadaUser = prompt('Ingrese la jugada que deseas jugar (piedra, papel, tijera): ').toLowerCase()
    if(!jugadas.includes(jugadaUser)) {
        alert('opcion no valida')
    }
    
    let indiceMaquina = Math.floor(Math.random() * jugadas.length)
    
    let opcionMaquina = jugadas[indiceMaquina]

    if(jugadaUser === opcionMaquina) {
        alert(`Empate - La maquina elige ${opcionMaquina} y tu elegiste ${jugadaUser}`)
    } else if (
        (jugadaUser === 'piedra' && opcionMaquina === 'tijera') ||
        (jugadaUser === 'papel' && opcionMaquina === 'piedra') ||
        (jugadaUser === 'tijera' && opcionMaquina === 'papel')
    ){
        puntajeUser +=1;
        alert(`Ganaste - La maquina elige ${opcionMaquina} y tu elegiste ${jugadaUser}`)
    } else {
        puntajeMaquina +=1;
        alert(`Perdiste - La maquina elige ${opcionMaquina} y tu elegiste ${jugadaUser}`)
    }
}

if(puntajeUser === puntajeMaquina) {
    alert('Empate')
}else if(puntajeUser > puntajeMaquina){
    alert('Ganaste el Torneo')
}else {
    alert('Perdiste el Torneo')
}
/* Solicitar al user su jugada, esta operacion se realizara en cada juego {piedra, papel, tijera}*/
/* Aplicar math.random para la seleccion de la jugada de la maquina */
/* Evaluar la seleccion del user vs la maquina  */
/* Indicar el resultado de la partida dependiendo del caso */
