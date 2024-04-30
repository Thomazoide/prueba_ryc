// Se crea una especie de escaner para leer la entrada del usuario en la consola
const entrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Se crea la funcion que permite la creacion de un cuadrado con el caracter "O" de lado largo igual al parametro "numero", que retorna una lista donde cada elemento representa una linea del cuadrado a ser mostrada en consola
function crearCuadrado(numero){
    let cuadrado = []
    for(let indiceX = 0; indiceX < numero; indiceX++){
        let auxiliar = ''
        for(let indiceY = 0; indiceY < numero; indiceY++){
            auxiliar += indiceX === 0 || indiceY === 0 || indiceX === numero-1 || indiceY === numero-1 ? "O" : " "
        }
        cuadrado[indiceX] = auxiliar
    }
    return cuadrado
}

//Se llama al escaner para obtener la entrada del usuario y pasarle esta entrada como parametro a la funcion que crea la lista con las lineas del cuadrado, para luego ser impreso en consola mostrando el resultado final
entrada.question('Ingrese un numero: ', input => {
    let resultado = crearCuadrado(input)
    for(linea of resultado){
        console.log(linea)
    }
    entrada.close()
})