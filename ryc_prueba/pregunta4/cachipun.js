//Se importa el JSON en la variable 'entrada'
const entrada = require('./entrada.json')

function validar(){
    const j1 = entrada.jugador1
    const j2 = entrada.jugador2
    //1 = victoria ; 0 = derrota ; 2 = empate
    let contadorVictorias = {
        j1: 0,
        j2: 0
    }
    for(let indice = 0; indice < j1.length; indice++){
        if(j1[indice] === 'P'){
            if(j2[indice] === 'R'){
                contadorVictorias.j1++
            }
            if(j2[indice] === 'S'){
                contadorVictorias.j2++
            }
        }
        if(j1[indice] === 'S'){
            if(j2[indice] === 'P'){
                contadorVictorias.j1++
            }
            if(j2[indice] === 'R'){
                contadorVictorias.j2++
            }
        }
        if(j1[indice] === 'R'){
            if(j2[indice] === 'P'){
                contadorVictorias.j2++
            }
            if(j2[indice] === 'S'){
                contadorVictorias.j1++
            }
        }
    }
    if(contadorVictorias.j1 > contadorVictorias.j2) return 'Jugador 1 gana'
    if(contadorVictorias.j2 > contadorVictorias.j1) return 'Jugador 2 gana'
    if(contadorVictorias.j1 === contadorVictorias.j2) return 'Empate'
}

console.log(validar())