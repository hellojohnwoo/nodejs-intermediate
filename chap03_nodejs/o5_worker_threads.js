// NodeJS 14+

const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {     // Main Thread
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("-worker exit-"));
  worker.postMessage("ping");

} else {                // Worker Thread
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });

}
