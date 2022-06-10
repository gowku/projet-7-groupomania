import { Post } from "../models/post.js";
import { Comment } from "../models/comment.js";
import { CommentPost } from "../models/commentPost.js";

const commentPost = (req, res, next) => {
  console.log("je suis commente un post");
  const postId = req.params.postId;
  const comment = req.body.texte;
  //   console.log(req.user);

  Post.findByPk(postId)
    .then(async (post) => {
      await Comment.create(
        {
          userId: req.body.userId,
          texte: comment,
          CommentPosts: [{ postId: req.params.postId }],
        },
        {
          include: [CommentPost],
        }
      );
      res.status(201).json({ message: "comment créé" });
    })

    .catch((error) => res.status(500).json(error));
};

const modifyComment = (req, res, next) => {
  console.log("je suis ici modifier comment !!!!!!!!!!!!!!");
  //   console.log(req.params);

  const commentId = req.params.commentId;
  Comment.findByPk(commentId)
    .then(async (comment) => {
      //   await console.log(comment);
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
  console.log("je suis ici !!!!!!!!!!!!!!");

  const commentId = req.params.commentId;
  Post.findByPk(commentId)
    .then((comment) => {
      return comment.destroy();
    })
    .then(() => res.status(200).json({ message: "comment supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

export { commentPost, modifyComment, deleteComment };
