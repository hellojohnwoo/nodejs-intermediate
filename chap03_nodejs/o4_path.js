const path = require('path');

path.join(__dirname, 'o2_var.js');
// POSIX = macOS + Linux    
// POSIX  : /node/../o2_var.js      // Path separator : '/'

// Windows : \node\..\o2_var.js      // Path separator : '\' 

console.log(path.join(__dirname, '..', 'o2_var.js'));
console.log(path.resolve(__dirname, '..', '/o2_var.js'));   // C:\var.js (in Windos)


// $ node path
// path.sep: \
// path.delimiter : ; (Windows)      // , (POSIX)

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);

console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));

console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
  dir: 'C:\\users\\johnwoo',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\johnwoo\\\path.js'));   // *

console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));

console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zjohnwoo\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/johnwoo'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/johnwoo'));
