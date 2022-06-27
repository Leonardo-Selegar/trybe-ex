let array = ["java", "javascript", "python", "html", "css"];
// let maiorPalavra = array[0];

// for (let index = 0; index < array.length; index++) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   }
// }

// console.log(maiorPalavra);

let menorPalavra = array[0];

for(let cont = 0; cont < array.length; cont++){
    if(array[cont].length < menorPalavra.length)
    menorPalavra = array[cont];
}
console.log(menorPalavra);