const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const array = simpsons.map(({id, name}) => `${id} - ${name}`)
  array.forEach((string) => console.log(string));
}

const main = async () => {
  await readAll();
}

main();