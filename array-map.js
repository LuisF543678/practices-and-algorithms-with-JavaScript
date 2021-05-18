
// funcion suma total
const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
        acumulado += ns[i]
    }

    return acumulado;
}

const numeros = [1, 2, 3, 4, 5];

// multiplicador
/* const multiplicados = numeros.map(x => x * 2)
console.log(multiplicados); */

// a pares

/* const parejas = numeros.map(x=> [x,x]);
console.log(parejas); */

const mascotas = [
    { nombre: 'pelusa', edad: 12, tipo: 'gato' },
    { nombre: 'puchini', edad: 12, tipo: 'perro' },
    { nombre: 'pulgla', edad: 10, tipo: 'perro' },
    { nombre: 'chanchito feliz', edad: 3, tipo: 'perro' }
];

// edad promedio

/* const resultado1 = sume(numeros);
console.log(resultado1) */

const edades = mascotas.map(x => x.edad);
//console.log(edades)

const resultado = suma(edades);

console.log(resultado / edades.length);