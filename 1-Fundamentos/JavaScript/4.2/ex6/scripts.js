let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for(let cont = 0; cont < numbers.length; cont++) {
  if(numbers[cont] % 2 === 1){
    impares++;
  }
}
if(impares !== 0){
  console.log(impares)
}else{
  console.log('nenhum valor ímpar encontrado');
}