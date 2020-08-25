const http = require("http"); // http: [80], https: [443]

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>hello, http server</h1>");
    res.write("<p>hello, node</p>");
    res.end("<p>hello, johnwoo</p>");
  })
  .listen(8088, () => {
    console.log("Waiting for server on port8088.");
  });

server.on("error", (error) => {
  console.error(error);
});


const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>hello, http server2</h1>");
  res.write("<p>hello, node2</p>");
  res.end("<p>hello, johnwoo2</p>");
})
.listen(8089, () => {
  console.log("Waiting for server on port8089.");
});

server2.on("error", (error) => {
  console.error(error);
});

// Port distinguish processes within a server.
// ex) www.johnwoo.com:80 -> www.johnwoo.com

