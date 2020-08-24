const spawn = require('child_process').spawn;

var process = spawn('python', ['o6_test.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
  });      // execute Result
  
  process.stderr.on('data', function(data) {
    console.error(data.toString());
  });     // execute Error