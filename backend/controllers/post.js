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
  post
    .create({
      userId: req.body.userId,
      texte: req.body.texte,
      imageUrl: `${req.protocol}://${req.get(`host`)}/images/${req.file.filename}`,
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
  // console.log("je suis ici 1 !!!!!!!!!!!!!!");
  // console.log(req.params.id);
  // post
  //   .findOne({
  //     where: {
  //       userId: req.params.id,
  //     },
  //   })
  //   .then(() => {
  //     const postObject = req.file
  //       ? {
  //           userId: req.body.userId,
  //           texte: req.body.texte,
  //           imageUrl: `${req.protocol}://${req.get(`host`)}/images/${req.file.filename}`,
  //         }
  //       : { userId: req.body.userId, texte: req.body.texte };

  //     post
  //       .update({ where: { id: req.params.id } }, { ...postObject, userId: req.params.id })
  //       .then(() => {
  //         res.status(200).json({
  //           message: "post updated successfully!",
  //         });
  //       })
  //       .catch((error) => {
  //         res.status(400).json({
  //           error,
  //         });
  //       });
  //   })
  //   .catch((error) => res.status(500).json(error));

  // const postObject = req.file
  //   ? {
  //       userId: req.body.userId,
  //       texte: req.body.texte,
  //       imageUrl: `${req.protocol}://${req.get(`host`)}/images/${req.file.filename}`,
  //     }
  //   : { userId: req.body.userId, texte: req.body.texte };

  // console.log(postObject);
  post
    .update(
      { where: { userId: req.params.id } },
      {
        userId: req.body.userId,
        texte: req.body.texte,
        imageUrl: `${req.protocol}://${req.get(`host`)}/images/${req.file.filename}`,
      }
    )
    .then(() => {
      res.status(200).json({
        message: "post updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
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
