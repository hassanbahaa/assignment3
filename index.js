const fs = require("node:fs");
// ========= Assignment 3 =========

// 1 - Use a readable stream to read a file in chunks and log each chunk.
const readStream = fs.createReadStream("./big.txt");
readStream.on("open", () => {
  console.log("file open");
});
readStream.on("ready", () => {
  console.log("file is ready to be read");
});
readStream.on("data", (chunk) => {
  console.log("data chunk received: ", chunk);
  console.log("========================");
});

// 2 - Use readable and writable streams to copy content from one file to another.
const readAndWriteStream = fs.createReadStream("./big.txt");
readStream.on("open", () => {
  console.log("file open");
});
readStream.on("ready", () => {
  console.log("file is ready to be read");
});
readStream.on("data", (chunk) => {
  console.log("data chunk received: ", chunk);
  console.log("========================");
});
