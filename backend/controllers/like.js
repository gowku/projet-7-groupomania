import { Like } from "../models/like.js";
import { Post } from "../models/post.js";

const postLiked = (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user.id;
  const likeValue = req.body.like;

  Post.findByPk(postId)
    .then(async (post) => {
      const [like, created] = await Like.findOrCreate({
        where: { postId: postId, userId: userId },
        defaults: { value: likeValue },
      });
      if (created) {
        await post.addLike(like);
        console.log("je suis ici!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        res.status(201).json({ message: "like créé" });
      } else {
        const liked = await Like.findOne({ where: { postId: postId, userId: userId } });

        console.log("je suis la!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(liked.id);

        const [like, created] = await Like.upsert({
          id: liked.id,
          value: likeValue,
        });
        res.status(201).json({ message: "like modifié" });
      }
    })
    .catch((error) => res.status(500).json(error));
};

export { postLiked };
