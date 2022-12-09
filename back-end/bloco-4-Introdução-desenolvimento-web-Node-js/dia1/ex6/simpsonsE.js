const fs = require('fs').promises;

async function addSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id: '5', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

}

function main() {
  addSimpsonsFamily();
}

main();
