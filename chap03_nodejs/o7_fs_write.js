const fs = require("fs").promises;

fs.writeFile("./o7_writeme.txt", "write the text")
  .then(() => {
    return fs.readFile("./o7_writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
	});
	