const fs = require('fs');

const writeStream = fs.createWriteStream('./o9_writeme.txt');
writeStream.on('finish', () => {
  console.log('file write done');
});

writeStream.write('write text\n');
writeStream.write('write text, one more');
writeStream.end();