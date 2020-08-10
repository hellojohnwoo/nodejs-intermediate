function oneMore() {
  console.log('one More');
}

function run() {
  console.log('run run');
  setTimeout(() => {
    console.log('wow');
  }, 0)
  new Promise((resolve) => {
    resolve('hi');
  })
    .then(console.log);
  oneMore();
}

setTimeout(run, 3000);


// run run
// one More
// hi
// wow



// *Except) Promise then, catch / process.nextTick
// *Tip!) Back Ground, Task Queue should be C++ or OS. (not sigle thread)
//        Web Worker