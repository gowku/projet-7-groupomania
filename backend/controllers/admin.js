import fs from "fs";
import { Comment } from "../models/comment.js";
import { User } from "../models/user.js";
import { Post } from "../models/post.js";

const adminDeleteUser = (req, res, next) => {
  const userId = req.params.userId;

  User.findByPk(userId)
    .then((user) => {
      const filename = user.profilPic.split("/images/profilPic")[1];

      fs.unlink(`images/profilPic/${filename}`, () => {
        user
          .destroy()
          .then(() => res.status(200).json({ message: "User supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

const adminDeletePost = (req, res, next) => {
  console.log("je suis ici");
  const postId = req.params.postId;

  Post.findByPk(postId)
    .then((post) => {
      const filename = post.imageUrl.split("/images/postPic")[1];

      if (req.user.isAdmin) {
        fs.unlink(`images/postPic/${filename}`, () => {
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
const adminDeleteComment = (req, res, next) => {
  const commentId = req.params.commentId;

  Comment.findByPk(commentId).then(async (comment) => {
    if (req.user.isAdmin) {
      await comment.destroy();
      res.status(200).json({ message: "comment supprimé !" });
    } else {
      (error) => res.status(400).json({ error });
    }
  });
};

const getAllUser = async (req, res, next) => {
  console.log("je suis ici");

  try {
    const users = await User.findAll();
    await res.status(200).json(users);
  } catch {
    (error) => res.status(500).json(error);
  }
};

export { adminDeleteUser, adminDeletePost, adminDeleteComment, getAllUser };
