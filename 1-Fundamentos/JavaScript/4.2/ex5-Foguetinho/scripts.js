let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeroMax = 0;

for (let cont = 0; cont < numbers.length; cont++) {
  numeroMax = Math.max(numeroMax, numbers[cont]);
}
console.log(numeroMax);
