const fs = require("node:fs");
// ========= Assignment 3 =========

// 1 - Use a readable stream to read a file in chunks and log each chunk.
// const readStream = fs.createReadStream("./big.txt");
// readStream.on("open", () => {
//   console.log("file open");
// });
// readStream.on("ready", () => {
//   console.log("file is ready to be read");
// });
// readStream.on("data", (chunk) => {
//   console.log("data chunk received: ", chunk);
//   console.log("========================");
// });

// 2 - Use readable and writable streams to copy content from one file to another.
// const readFileStream = fs.createReadStream("./source.txt");
// const writeStream = fs.createWriteStream("./dist.txt");
// readFileStream.on("open", () => {
//   console.log("file open");
// });
// readFileStream.on("ready", () => {
//   console.log("file is ready to be read");
// });
// readFileStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });
// readFileStream.on("end", () => {
//   writeStream.end();
//   console.log("file copy completed");
// });
// 3 - Use readable and writable streams to copy content from one file to another.
const inputFile = "./data.txt";
const outputFile = "./data.txt.gz";
const readInputStream = fs.createReadStream(inputFile);
const writeOutputStream = fs.createWriteStream(outputFile);
readInputStream.pipe(writeOutputStream);
writeOutputStream.on("finish", () => {
  console.log("Pipeline finished");
});
