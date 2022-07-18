
const calculaFatorial = (numero) => {
  let resultado = 1;
  for (let index = 2; index <= numero; index++) {
    resultado *= index;
  }
  return resultado;
}

console.log(calculaFatorial(5));
