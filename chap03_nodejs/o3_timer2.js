const timeout = setTimeout(() => {
  console.log('After 1.5sec, Execute');
}, 1500);

const interval = setInterval(() => {
  console.log('Every 1sec, Execute');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('Not Execute, setTimeout');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('Instance Execute');
});

const immediate2 = setImmediate(() => {
  console.log('Not Execute, setImmediate');
});

clearImmediate(immediate2);


// Instance Execute
// Every 1sec, Execute
// After 1.5sec, Execute
// Every 1sec, Execute


// Second       Execute       Console

// 0            immediate     'Instance Execute'
// 0            immediate2  <- Not Working
// 1            interval      'Every 1sec, Execute'
// 1.5          timeout       'After 1.5sec, Execute'
// 2            interval      'Every 1sec, Execute'
// 2.5          timeout2    <- Not Working      
// 2.5          interval    <- Not Working 


// Tip) setImmediate > setTimeout(callBack, 0)
//      'setImmediate' is Better than 'setTimeout(callBack, 0)'