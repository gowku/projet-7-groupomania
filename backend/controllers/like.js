import { Like } from "../models/like.js";
import { Post } from "../models/post.js";

const postLiked = (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user.id;
  const likeValue = req.body.like;
  // console.log(likeValue);

  Post.findByPk(postId)
    .then(async (post) => {
      const [like, created] = await Like.findOrCreate({
        where: { postId: postId, userId: userId },
        defaults: { value: likeValue },
      });
      if (created) {
        await post.addLike(like);

        res.status(201).json({ message: "like créé" });
      } else {
        const liked = await Like.findOne({ where: { postId: postId, userId: userId } });
        const [like, created] = await Like.upsert({
          id: liked.id,
          value: likeValue,
        });
        // faire le comptage des likes ici
        // const count = Like.findAll(postId )

        res.status(201).json({ message: "like modifié" });
      }
    })
    .catch((error) => res.status(500).json(error));
};

export { postLiked };
