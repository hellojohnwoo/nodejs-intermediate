const A = require('./o3_globalA');

globalThis.message = 'hi, global';
console.log(A());

// $ node o3_globalB
// hi, global