//Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152


//Solução usando apenas reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (acc, number) => (
  (number % 2 === 0 ) ? acc + number : acc
);  

const soma = (array) => array.reduce(sumPair, 0);

console.log(soma(numbers));