const fs = require("fs");

let data = fs.readFileSync('./o7_readme.txt');
console.log('Sync no1', data.toString());
data = fs.readFileSync('./o7_readme.txt');
console.log('Sync no2', data.toString());
data = fs.readFileSync('./o7_readme.txt');
console.log('Sync no3', data.toString());
data = fs.readFileSync('./o7_readme.txt');
console.log('Sync no4', data.toString());
data = fs.readFileSync('./o7_readme.txt');
console.log('Sync no5', data.toString());           