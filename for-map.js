const numeros = [1, 3, 5, 7, 9]


// foreach() 
// basic
/* numeros.forEach( x => {
    console.log(x * 5);
});
 */
// en una nueva variable
const res01 = numeros.forEach( x => x*5)
    console.log(res01);


// map()

/* numeros.map(x => {
    console.log(x);
}) */

// en una variable

const res02 = numeros.map(x => x*5)
    console.log(res02);


const numeros = Array(20000).fill(5);

//foreach()

console.time('foreach()');
const res011 = numeros.forEach(x => x * 5);
console.timeEnd('foreach()');

// map()

console.time('map()');
const res022 = numeros.map(x => x * 5);
console.timeEnd('map()');