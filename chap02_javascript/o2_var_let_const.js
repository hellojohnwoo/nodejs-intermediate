if (true) {
  var x = 3;
}
console.log(x);

if (true) {
  const y = 5;
}
// console.log(y);  // Error

function a() {
  var z = 7;
}
// console.log(z);  // Error


const c1 = 11;
// c1 = '22';  // Error

const c2 = { name: 'KonSoot' };
c2.name = 'const';

// const c3;  // Error
let c4 = 404;
c4 = 5050;
c4 = 119;