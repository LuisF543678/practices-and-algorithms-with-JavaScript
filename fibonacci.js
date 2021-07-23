
const num = parseInt(
  prompt('Enter the number: ')
);

let nm1 = 0, nm2 = 1, nextNum;

console.log('Fibonacci Serie:');

for (let i = 1; i <= num; i++) {
  console.log(nm1);
  nextNum = nm1 + nm2;
  nm1 = nm2;
  nm2 = nextNum;
}