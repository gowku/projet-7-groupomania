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
        // if (likeValue === 1) {
        //   const likes = await Post.upsert({
        //     id: postId,
        //     like: +1,
        //   });
        // } else if (likeValue === 0) {
        //   const likes = await Post.upsert({
        //     id: postId,
        //     like: -1,
        //   });
        // }
        await post.addLike(like);

        res.status(201).json({ message: "like créé" });
      } else {
        const liked = await Like.findOne({ where: { postId: postId, userId: userId } });
        const [like, created] = await Like.upsert({
          id: liked.id,
          value: likeValue,
        });
        // if (likeValue === 1) {
        //   await Post.upsert({
        //     id: postId,
        //     like: +1,
        //   });
        // } else if (likeValue === 0) {
        //   await Post.upsert({
        //     id: postId,
        //     like: -1,
        //   });
        // }
        res.status(201).json({ message: "like modifié" });
      }
    })
    .catch((error) => res.status(500).json(error));
};

export { postLiked };
