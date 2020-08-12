console.log(this);                      // Not global, Not Anonymous ( '{}' )   (JS's this mean is 'window' in Browser)
console.log(this === module.exports);                     // true
console.log(this === module.exports === {} === exports);  // false
console.log(this === exports);                            // true

function whatIsThis() {
  console.log('function', this === exports, this === global);   // false true
}
whatIsThis();

// $ node o3_this_in_nodejs
// {}
// true
// false
// true
// function false true