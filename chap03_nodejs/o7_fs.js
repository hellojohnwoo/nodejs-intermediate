const fs = require("fs").promises;

fs.readFile("./o7_readme.txt")
  .then(() => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
	});
	

// fs.readFile('./o7_readme.txt', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// 	console.log(data.toString());
// });
