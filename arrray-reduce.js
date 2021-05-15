
// funcion reducer

//const reducer = (acumulador, valorActual) => nuevoAcumulador;

//const reducido = [1, 2].reduce((acc, el) => acc + el, 0);

//console.log(reducido);

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
//console.log(resultado);

const mascotas = [
    { nombre: 'pelusa', edad: 12, tipo: 'gato' },
    { nombre: 'puchini', edad: 12, tipo: 'perro' },
    { nombre: 'pulgla', edad: 10, tipo: 'perro' },
    { nombre: 'chanchito feliz', edad: 3, tipo: 'perro' }
];

const indexed = mascotas.reduce((acc,el) => ({
    ...acc,
    [el.nombre]:el,
}),{})

//console.log(indexed['pelusa']);

const anidado = [1,[2,3],4,[5]];
//[1,2,3,4,5]
const plano = anidado.reduce((acc,el) => acc.concat(el),[]);
console.log(plano)