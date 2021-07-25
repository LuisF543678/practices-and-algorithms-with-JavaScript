

/**
 * Solcitar el numero para la serie
 */
const num = parseInt(
  prompt('Enter the number: ')
);

/**
 * Variables para la serie
 */
let nm1 = 0, nm2 = 1, nextNum;


/**
 * Imprimir titulo
 */
console.log('Fibonacci Serie:');


/**
 * Recorrear y imprimir la serie
 */
for (let i = 1; i <= num; i++) {
  console.log(nm1);
  nextNum = nm1 + nm2;
  nm1 = nm2;
  nm2 = nextNum;
}