const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensSort = (array) => {
  const newOddsAndEvens = array.sort((a, b) => a - b);
  return newOddsAndEvens;
}
const sortedArrayBonus = oddsAndEvensSort(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);