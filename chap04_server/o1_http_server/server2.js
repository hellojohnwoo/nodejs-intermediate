const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./server2.html");
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8083, () => {
    console.log("Waiting for server on port8083. async await");
  });