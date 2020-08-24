const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('./o7_readme.txt')
  console.log('await no1', data.toString());
  data = await fs.readFile('./o7_readme.txt')
  console.log('await no2', data.toString());
  data = await fs.readFile('./o7_readme.txt')
  console.log('await no3', data.toString());
  data = await fs.readFile('./o7_readme.txt')
  console.log('await no4', data.toString());
}

main();