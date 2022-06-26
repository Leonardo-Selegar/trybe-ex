const n1 = 23;
const n2 = 22323;
const n3 = 2323;

//forma de fazer complicada com muito if kkkkk

// if (n1 > n2 && n1 > n3){
//     console.log('O numero 1 é maior');
// }else if(n2 > n1 && n2 > n3){
//     console.log('O numero 2 é maior');
// }else if(n3 > n1 && n3 > n2){
//     console.log('O numero 3 é maior');
// }else if(n3 === n2 && n3 > n1){
//     console.log('Os numeros 3 e 2 são iguais e maiores que o numero 1')
// }else if(n3 === n1 && n3 > n2){
//     console.log('Os numeros 3 e 1 são iguais e maiores que o numero 2');
// }else if(n2 === n1 && n2 > n3){
//     console.log('Os numeros 2 e 1 são iguais e maiores que o numero 3');
// }else if(n2 === n1 && n2 === n3){
//     console.log('Os 3 numeros são iguais!');
// }

// forma iz

console.log(Math.max (n1, n2, n3));
