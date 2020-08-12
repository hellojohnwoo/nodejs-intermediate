const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.johnwoo.com/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);


// querystring
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));
