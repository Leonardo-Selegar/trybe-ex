// Ao chamar a função doingThings:
const acordando = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();
console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));

// const doingThings = (callback) => {
//   const result = callback();
//   console.log(result);
// };

// doingThings(wakeUp);
// doingThings(breakfast);
// doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!