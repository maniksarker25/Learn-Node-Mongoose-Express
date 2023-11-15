const http = require("http");
const { buffer } = require("stream/consumers");
const fs = require("fs");

// create server by using row node js ---------

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    // streaming file reading -----------
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/read.txt"
    );
    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("The streaming is over");
    });
    readableStream.on("error", (error) => {
      console.log(error);
      res.statusCode = 500;
      res.end("Something Went Wrong");
    });
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 500");
});
