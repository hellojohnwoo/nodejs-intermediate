const { odd, even } = require('./o2_var');
const checkNumber = require('./o2_func');

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));