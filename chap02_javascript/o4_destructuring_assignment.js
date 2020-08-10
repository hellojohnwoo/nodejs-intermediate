const example = { a: 10, b: { c: 303, d: 505 } }
const a = example.a;
const d = example.b.d;

const { a, b: { d } } = example;
console.log(a);   // 10
console.log(d);   // 505


arr = [1, 2, 3, 4, 5]
const x = arr[0]
const y = arr[1]
const z = arr[4]

const [x, y, , , z] = arr;