//-------------------------IMPORTS
const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const cors = require("cors");
var morgan = require('morgan')

const loginRouter = require("./src/routes/auth/login");
const signupRouter = require("./src/routes/auth/signup");

const { PORT } = require("./src/utils/get-env");
const { checkEnvironmentVariable } = require("./src/utils/check_env_var");
const { initMongo } = require("./src/mongo/index");
const { onSocketConnection } = require("./src/socket");
const authenticateSocketConnection = require("./src/middlewares/auth-socket-connection");

//-----------------------------------CHECKING ENV VARIABLES
const envVariableError = checkEnvironmentVariable();

// -------------------------MIDDLEWARES
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// -------------------------CORS
app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
    exposedHeaders: "*",
  })
);

// -------------------------ROUTES
app.use("/api/auth/login/", loginRouter);
app.use("/api/auth/signup/", signupRouter);

// -------------------------MONGO DB CONNECTION
initMongo();

// -------------------------API CONNECTION CHECK
app.get("/", (req, res) => {
  res
    .json({ message: "Chit Chat api is runing... ", error: envVariableError })
    .status(200);
});

app.get("/api/", (req, res) => {
  res
    .json({ message: "Chit Chat api is runing... ", error: envVariableError })
    .status(200);
});

// -------------------------SETUP SERVER
const httpServer = http.createServer(app);

// -------------------------------------------SETUP SOCKET.IO
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

//-------------------------------------------SOCKET MIDDLWARES
io.use(authenticateSocketConnection);

//-------------------------------------------SOCKET CONNECTION HANDLER
io.on('connection', (socket) => onSocketConnection(io, socket));

// -------------------------PORT LISTENING
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
