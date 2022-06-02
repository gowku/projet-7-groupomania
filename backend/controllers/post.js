import { post } from "../models/post.js";

const getAllPost = (req, res, next) => {
  post
    .findAll()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
const createPost = (req, res, next) => {
  console.log("je suis la 2");
  console.log(req.body.texte);

  post
    .create({
      userId: req.body.userId,
      texte: req.body.texte,
      likes: req.body.likes,

      imageUrl: `${req.protocol}://${req.get(`host`)}/images/${req.file.filename}`,
      // ...req.body,
    })
    .then(() => {
      res.status(201).json({ message: "post créé" });
    })
    .catch((error) => res.status(500).json(error));
};

const postLiked = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const commentPost = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const modifyPost = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const modifyComment = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const deletePost = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const deleteComment = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

const modifyPassword = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
};

export {
  getAllPost,
  createPost,
  postLiked,
  commentPost,
  modifyPost,
  modifyComment,
  deletePost,
  deleteComment,
  modifyPassword,
};
