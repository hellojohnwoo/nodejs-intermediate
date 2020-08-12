const util = require('util');
const crypto = require('crypto');


const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'The donUseMe function is deprecated and no longer used!');
dontUseMe(1, 2);



// In many cases, NodeJS does not support Promise.
// However, the trend is to use Promise gradually.

// The function used in the past is calledback.
// Callback is uncomfortable because it cannot use async, await grammar.
// If you use promisity, you can use .then and .catch.

// * There is only one condition. 
//    (error, data) => {}

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });