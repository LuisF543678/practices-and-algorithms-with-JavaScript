const numeros = [1,2,3,4,5,6,7,8,9];

const mascotas = [
    { nombre: 'puchini', edad: 12, raza:'perro'},
    { nombre: 'chachino feliz', edad: 3, raza:'perro'},
    { nombre: 'pulga', edad: 10, raza:'perro'},
    { nombre: 'pelusa', edad: 15, raza:'gato'}
];

//const numerosFiltrados = numeros.filter(x => x < 5);

//console.log(numerosFiltrados, numeros)

const perros = mascotas.filter(x => x.raza == 'perro' )

//console.log(perros)

const gato = mascotas.filter(x => x.raza == 'gato')

console.log(gato)