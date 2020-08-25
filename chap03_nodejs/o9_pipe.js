const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./o9_readme.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createReadStream('./o9_writeme303.txt.gz');
readStream.pipe(zlibStream).pipe(fs.writeStream);