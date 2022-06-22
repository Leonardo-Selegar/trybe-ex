let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorValor = numbers[0];

for (let cont = 0; cont < numbers.length; cont++) {
  menorValor = Math.min(menorValor, numbers[cont]);
}
console.log(menorValor);
