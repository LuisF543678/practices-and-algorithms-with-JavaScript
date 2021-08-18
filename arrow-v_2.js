
/* 
*   Fat arrow function
*   Funciones anonimas 
*/

function suma(a, b) {
    return a + b;
}

const resultado = suma(1, 5)

console.log(resultado);


/**
 *  Tiene return implicito fat
*/

//const suma = (a,b) => a+b
const suma = (a, b) => {
    const c = a + b
    return c + 1
}


/**
 *  Sintaxis del codigo anterio
 */

const suma = (a, b) => a + b

const resultado = suma(1, 5);

console.log(resultado);
