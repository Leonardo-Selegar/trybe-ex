
const palavraMaisLonga = (text) => {
  const newArray = text.split(' ')
  let maiorTamanho = 0;
  let resultado = '';

  for (const word of newArray) {
    if (word.length > maiorTamanho) {
      maiorTamanho = word.length
      resultado = word;
    }
  }
  return resultado;
}

console.log(palavraMaisLonga('olá meu nome e leonardo selegar'));