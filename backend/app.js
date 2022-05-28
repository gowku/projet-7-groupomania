import express from "express";

import database from "./database/db.js";

import "dotenv/config";

import morgan from "morgan";

import bodyParser from "body-parser";

import routes from "./routes/user.js";

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

database
  .sync()
  .then(console.log("connexion a la base de donnée réussi"))
  .catch((error) => console.log(error));

app.use(bodyParser.json());

// app.use(`/images`, express.static(path.join(__dirname, `images`)));

app.use(routes);

export default app;
