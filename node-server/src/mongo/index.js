const mongoose = require("mongoose");
const { MONGO_URI } = require("./../utils/get-env");

function initMongo() {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to mongoDB..."))
    .catch((err) => console.log(`Error while connecting to mongoDB: ${err}`));
}

module.exports = { initMongo };
