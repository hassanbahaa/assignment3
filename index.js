const fs = require("node:fs");
const http = require("node:http");
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
//=====================
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
//=====================
// 3 - Use readable and writable streams to copy content from one file to another.

// const inputFile = "./data.txt";
// const outputFile = "./data.txt.gz";
// const readInputStream = fs.createReadStream(inputFile);
// const writeOutputStream = fs.createWriteStream(outputFile);
// readInputStream.pipe(writeOutputStream);
// writeOutputStream.on("finish", () => {
//   console.log("Pipeline finished");
// });
// ===================== Part2 ============
// 1 - Create an API that adds a new user to your users stored in a JSON file.
const port = 3000;
let products = [];
const server = http.createServer((req, res) => {
  let { url, method } = req;
  let data = "";

  if (url == "/porducts" && method == "POST") {
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      data = JSON.parse(data);
      products.push(data);
      let result = {
        message: "Product created successfully",
        products: products,
      };
      //   console.log(data);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify(result));
      //   console.log({ products });
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
