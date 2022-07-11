import { Post } from "../models/post.js";
import { Comment } from "../models/comment.js";

const commentPost = (req, res, next) => {
  console.log("je suis commente un post");
  const postId = req.params.postId;
  const userId = req.body.userId;
  const commentaire = req.body.texte;

  Post.findByPk(postId)
    .then(async (post) => {
      const comment = await Comment.create({
        userId: userId,
        texte: commentaire,
      });
      await post.addComment(comment);
      res.status(201).json({ message: "comment créé" });
    })

    .catch((error) => res.status(500).json(error));
};

const modifyComment = (req, res, next) => {
  const commentId = req.params.commentId;

  Comment.findByPk(commentId)
    .then(async (comment) => {
      if (comment) {
        if (comment.userId === req.user.id || req.user.isAdmin) {
          if (req.body.texte) comment.texte = req.body.texte;
          await comment.save();
          res.status(200).json(comment);
        } else {
          res.status(401).json({
            error: new Error("Invalid user!"),
          });
        }
      } else {
        res.status(404).json({
          error: new Error("comment not found"),
        });
      }
    })
    .catch((error) => res.status(500).json(error));
};

const deleteComment = (req, res, next) => {
  const commentId = req.params.commentId;

  Comment.findByPk(commentId).then(async (comment) => {
    // console.log(comment);

    if (comment.userId === req.user.id || req.user.isAdmin) {
      await comment.destroy();
      res.status(200).json({ message: "comment supprimé !" });
    } else {
      (error) => res.status(400).json({ error });
    }
  });
};

export { commentPost, modifyComment, deleteComment };
