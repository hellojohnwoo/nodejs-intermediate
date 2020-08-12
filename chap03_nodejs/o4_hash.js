// PassWord   -(O)-> Hash Function  -(O)->  Digest
// PassWord  <-(X)-  Hash Function <-(O)-   Digest


// sha512, sha256 (Safe)         md,sha1 (Not Safe)
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('password').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('password').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('password2').digest('base64'));


// If not safe sha512 -> Moving sha3
// pbkdf2         (can not using NodeJS)  -- unidirectional encryption
// bcrypt, scrypt (can     using NodeJS)  -- unidirectional encryption


// cipher -- bidirectional encryption


// AWS KMS (Key Management Service)