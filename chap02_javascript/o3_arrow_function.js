function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);
const object = (a, b) => ( { a, b } );      // important !    '(' { a, b } ')'

function not1(x) {
  return !x;
}

const not2 = x => !x;