let maiorPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let primo = true;
  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = numeroAtual;
  }
}
console.log(maiorPrimo);
