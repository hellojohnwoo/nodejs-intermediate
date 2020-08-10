var yen = 100;
var result = 'snack price : ' + yen;

const result2 = `snack price : ${yen}`; 


function a() {}
a();
a``;


// Old Style
var sayNode = function() {
  console.log('Node');
};

var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Good';
oldObject.sayNode();          // Node
oldObject.sayJS();            // JS
console.log(oldObject.ES6);   // Good


// ES2015+ Sytle
const newObject = {
  sayJS2() {
    console.log('New JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
newObject.sayNode();        // Node
newObject.sayJS2();         // New JS
console.log(newObject.ES6); // Fantastic