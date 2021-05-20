
/**
 *  Funcion normal 
 */

function rSquare(x) {
    return x * x;
}

console.log(rSquare(2));


/** 
 * Funcion de tipo const sin flecha
*/

const square = function (x) {
    return x * x;
}

console.log(square(2));


/**
 * Funcion tipo flecha con implicito
 */

const square = (x) => x * x;

console.log(square(2));


/**
 * Funcion flecha con return 
 */

const square = (x) => { return x * x };

console.log(square(2));