console.log('Its okay, if the require keyword is not at the top.')

module.exports = 'hi';

require('./o2_var');
// console.log(require);

console.log('require.cache');
console.log(require.cache);

console.log('require.main');
console.log(require.main === module);
console.log(require.main.filename);
