import path from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);
import express from "express";
import bodyParser from "body-parser";

import database from "./database/db.js";
import { User } from "./models/user.js";
import { Post } from "./models/post.js";
import { Comment } from "./models/comment.js";
import { CommentPost } from "./models/commentPost.js";

import "dotenv/config";

import morgan from "morgan";

const app = express();

import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import commentRoutes from "./routes/comment.js";

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

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

// Comment.hasOne(Post);
Post.belongsToMany(Comment, { through: CommentPost });
Comment.belongsToMany(Post, { through: CommentPost });

// , { constraints: false }
// Post.belongsTo(Comment, { through: CommentPost });

database
  // .sync({ force: true })
  .sync()
  .then(console.log("connexion a la base de donnée réussi"))
  .catch((error) => console.log(error));

app.use(express.json());

app.use(bodyParser.json());

app.use(`/images`, express.static(path.join(__dirname, `images`)));

app.use(`/api/auth`, userRoutes);
app.use(`/api/posts`, postRoutes);
app.use(`/api/posts`, commentRoutes);

export default app;
