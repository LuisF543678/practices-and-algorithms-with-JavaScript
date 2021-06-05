
/**
 * Agragar funcion trampoline para ajustar a la nueva funcion
 * sirve para envolver la funcion recursiva
 * 
 */

const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}


/**
 * Funcion suma
 * Poner a prueba el trampoline
 */

const suma = (number, sum = 0) => (
    number === 0
        ? sum
        : () => suma(number - 1, sum + number)
)

const tsuma = trampoline(suma)


/**
 * Probar el bucle
 */

const r = tsuma(1000000);
console.log(r);