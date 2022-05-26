const express = require("express");

require("dotenv").config();
// console.log(process.env.DB_USERNAME);

const morgan = require("morgan");
const bodyParser = require(`body-parser`);

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(bodyParser.json());

// app.use(`/images`, express.static(path.join(__dirname, `images`)));

module.exports = app;
