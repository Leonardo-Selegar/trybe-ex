const fs = require('fs').promises;

async function substituirPersonagem() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const semNelson = simpsons.filter((simpson) => simpson.id !== '5');
  const comMaggie = semNelson.concat([{id:'15', name: 'Maggie Simpson'}]);
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(comMaggie));

}

function main() {
  substituirPersonagem();
}

main();