
/**
 *  Funcion reducer-1
 */

const reducer = (acumulador, valorActual) => nuevoAcumulador;

const reducido = [1, 2].reduce((acc, el) => acc + el, 0);

console.log(reducido);


/**
 *   Funcion con reduce-2
 */
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);


 /**
  * Funcion reduce-3
  * Arreglo de mascotas
  */
const mascotas = [
    { nombre: 'pelusa', edad: 12, tipo: 'gato' },
    { nombre: 'puchini', edad: 12, tipo: 'perro' },
    { nombre: 'pulgla', edad: 10, tipo: 'perro' },
    { nombre: 'chanchito feliz', edad: 3, tipo: 'perro' }
];

/**
 *  Uso de reduce para encontrar un nombre en especifico
 */
const indexed = mascotas.reduce((acc,el) => ({
    ...acc,
    [el.nombre]:el,
}),{})

console.log(indexed['pelusa']);


/**
 *  Uso de la funcion reduce-4
 */ 
const anidado = [1,[2,3],4,[5]];
//[1,2,3,4,5]

const plano = anidado.reduce((acc,el) => acc.concat(el),[]);
console.log(plano)