// $ node
process.version

process.pid

process.uptime()

process.execPath

process.cwd()       // *


// process.env
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

// NODE_OPTIONS=--max-old-space-size=8192
// UV_THREADPOOL_SIZE=8 (default max : 4)