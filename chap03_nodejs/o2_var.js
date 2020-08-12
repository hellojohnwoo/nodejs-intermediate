const odd = "odd number";
const even = "even number";

module.exports = {
  // New Style          // Old Style
  odd,                  // odd: odd,
  even,                 // even: even,
};

// export default { odd, even };

// exports.odd = odd;
// exports.even = even;


// (Explanation)      
//    module.exports === exports === {};

// module.exports = checkOddOrEven;
//    module.exports !== exports === {};


