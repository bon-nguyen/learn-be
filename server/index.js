const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  // We can write our socket event listeners in here...
});

server.listen(4000, () => "Server is running on port 4000");
