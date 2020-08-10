//      Mean : Escape from CallBack Hell 
// 'Promise' : Execute the code. But, Not yet return Object
//   '.then' : Return result

const condition = true;     // true : resolve, false : reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('success');
  } else {
    reject('fail');
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })