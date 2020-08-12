const os = require('os');

console.log('-- OS Infomation --');
console.log('os.uptime() : ', os.uptime());         // VS.  process.uptime() : Execute Time of Node
console.log('os.hostname() : ', os.hostname());
console.log('os.release() : ', os.release());

console.log('-- Path Infomation --');
console.log('os.homedir() : ', os.homedir());
console.log('os.tmpdir() : ', os.tmpdir());

console.log('-- CPU Infomation --');                // *
console.log('os.cpus() : ', os.cpus());
console.log('os.cpus().length : ', os.cpus().length);

console.log('-- Memory Infomation --');             // *
console.log('os.freemem() : ', os.freemem());         
console.log('os.totalmem() : ', os.totalmem());