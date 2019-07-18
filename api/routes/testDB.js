const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

let rej = null;
let res = null;

// If there is a connection error send an error message
mongoose.connection.once("error", error => {
  rej(error);
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  databaseConnection = "Connected to Database!"
  res(mongoose.connection);
});

const newDBC = () => {
  return new Promise((resolve, reject) => {
    rej = reject;
    res = resolve;

    mongoose.connect("mongodb://mongodb:27017/test", { useNewUrlParser: true }).catch((error) => {
      reject(error);
    });
  }).catch(() => {
    dbc = new Promise((resolve) => setTimeout(resolve, 100)).then(newDBC);
    return dbc;
  });
};

let dbc = newDBC();

const getDatabaseConnection = () => {
  return dbc;
};

router.get("/", function(req, res, next) {
  getDatabaseConnection().then(connection => {
    res.send(databaseConnection);
  });
});

module.exports = router;
