// Se crea una especie de escaner para leer la entrada del usuario en la consola
const entrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Funcion que se recibe como parametro una expresion y cuenta los parentesis, llaves y corchetes para luego analizar si es valida o no retornando true o false dependiendo del caso.
function validarExpresion(expresion){
    let parentesis = [0,0]
    let corchetes = [0,0]
    let llaves = [0,0]
    for(let letra of expresion){
        if(letra === '('){
            parentesis[0]++
        }else if(letra === ')'){
            parentesis[1]++
        }else if(letra === '['){
            corchetes[0]++
        }else if(letra === ']'){
            corchetes[1]++
        }else if(letra === '{'){
            llaves[0]++
        }else if(letra === '}'){
            llaves[1]++
        }
    }
    if(parentesis[0] === parentesis[1] && corchetes[0] === corchetes[1] && llaves[0] === llaves[1]){
        return true
    }else return false
}

// Se llama al escaner para solicitar la entrada del usuario y poder entregar esta como parametro a la funcion 'validarExpresion' y dependiendo de lo que retorne esta(true o false) se indica en consola si es una expresion valida o no
entrada.question('Ingrese expresion: ', input => {
    console.log(`Expresion '${input}': ${ validarExpresion(input) ? 'Valida' : 'No valida' }`)
    entrada.close()
})