// function require() -- NodeJS provides basically

// const value = require('./o2_var');
// console.log(value);


// const odd = value.odd;
// const even = value.even;
const { odd, even } = require('./o2_var');
// import { odd, even } from './o2_var';


function checkOddOrEven(number) {
  if (number % 2) {
      return odd;
  } else {
      return even;
  }
}

module.exports = checkOddOrEven;    // NodeJS Style (ES2015+)
// export default checkOddOrEven;   // JS Style

// module.exports = {
//   checkOddOrEven,
//   odd,
//   even,
// };

