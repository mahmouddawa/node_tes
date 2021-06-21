process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

if (cluster.isMaster) {
  // is the file being executed in the mster mode?
  cluster.fork();
} else {
  // index.js will be executed in the chile mode

  const express = require("express");
  const app = express();

  const crypto = require("crypto");

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi from Express");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This will run fast");
  });

  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
}
