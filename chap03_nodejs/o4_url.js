const url = require('url');

const { URL } = url;
const myURL = new URL('https://www.johnwoo.com/?page=3&limit=10&category=nodejs&category=javascript');
console.log('-- WHATWG Style --');
console.log('new URL()', myURL);
console.log('url.format() : ', url.format(myURL));


// Tip) If just send '/login', using just Default Node Style.
console.log('-- Default Node Style --');
const parsedURL = url.parse('https://www.johnwoo.com/?page=3&limit=10&category=nodejs&category=javascript');
console.log('url.parse() : ', parsedURL);
console.log('url.format : ', url.format(parsedURL));