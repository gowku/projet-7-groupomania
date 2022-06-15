import fs from "fs";
import { Post } from "../models/post.js";

const getAllPost = (req, res, next) => {
  Post.findAll()
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
  Post.create({
    userId: req.body.userId,
    texte: req.body.texte,
    imageUrl: `${req.protocol}://${req.get(`host`)}/images/postPic/${req.file.filename}`,
  })
    .then(() => {
      res.status(201).json({ message: "post créé" });
    })
    .catch((error) => res.status(500).json(error));
};

const modifyPost = (req, res, next) => {
  const postId = req.params.postId;

  Post.findByPk(postId)
    .then(async (post) => {
      if (post) {
        if (post.userId === req.user.id || req.user.isAdmin) {
          if (req.body.texte) post.texte = req.body.texte;
          if (req.file) post.file = `${req.protocol}://${req.get(`host`)}/images/postPic/${req.file.filename}`;

          await post.save();
          res.status(200).json(post);
        } else {
          res.status(401).json({
            error: new Error("Invalid user!"),
          });
        }
      } else {
        res.status(404).json({
          error: new Error("post not found"),
        });
      }
    })
    .catch((error) => res.status(500).json(error));
};

const deletePost = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!");
  const postId = req.params.postId;

  Post.findByPk(postId)
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];

      if (post.userId === req.user.id || req.user.isAdmin) {
        fs.unlink(`images/postPic/${filename}`, () => {
          console.log(post);
          post
            .destroy()
            .then(() => res.status(200).json({ message: "Post supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        });
      } else {
        res.status(401).json({
          error: new Error("Invalid user!"),
        });
      }
    })

    .catch((error) => res.status(500).json({ error }));
};

export { getAllPost, createPost, modifyPost, deletePost };
