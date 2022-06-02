import express from "express";

import database from "./database/db.js";

import "dotenv/config";

import morgan from "morgan";

import bodyParser from "body-parser";

import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";

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

app.use(express.json());

app.use(bodyParser.json());

// app.use(`/images`, express.static(path.join(__dirname, `images`)));

app.use(`/api/auth`, userRoutes);
app.use(`/api/posts`, postRoutes);

export default app;
