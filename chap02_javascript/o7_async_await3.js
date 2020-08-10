// for await (variable of promise-array)
const promise1 = Promise.resolve('success1');
const promise2 = Promise.resolve('success2');

(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();