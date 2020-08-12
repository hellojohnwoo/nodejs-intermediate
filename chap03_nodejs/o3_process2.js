// process.exit(code)

let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log('End !!');
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

// $ node exit
// 1
// 2
// 3
// 4
// End !!

// $ node
// > process.uptime()
// 9.1234567

// > process.exit(0)
// Server Turn Off

// > process.exit(1)
// Server Turn Off with Error