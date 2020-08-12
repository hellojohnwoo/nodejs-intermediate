setTimeout(() => console.log('hi'), 2000);

const hello = setInterval(() => console.log('interval'), 2000);
clearInterval(hello);

//
setImmediate(() => console.log('immediate'));