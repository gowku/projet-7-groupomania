import { Like } from "../models/like.js";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";

const postLiked = (req, res, next) => {
  // console.log("je suis dans like !!!!!!!!!!!!!!");
  // console.log(req.params);

  const postId = req.params.postId;
  const userId = req.user.id;
  const likeValue = req.body.like;

  Like.findAll({
    where: { userId: userId },
  })
    .then((like) => {
      // console.log(like);
      if (Array.isArray(like) && like.length) {
        Post.findByPk(postId)
          .then(async (post) => {
            const like = await Like.create({
              value: likeValue,
              userId: userId,
              postId: postId,
            });

            await post.addLike(like);
            // await like.addUser(u);
            res.status(201).json({ message: "like créé" });
          })
          .catch((error) => res.status(500).json(error));
      } else {
        console.log("je suis la!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        for (i = 0; like.lenght; i++) {
          console.log(like[i].postId);
        }
        // if (like.postId) {
        // }
      }
    })
    .catch((error) => res.status(500).json(error));

  // Post.findByPk(postId)
  //   .then((post) => {
  //     if (likeValue === 1) {
  //       return (
  //         Like.create({
  //           value: likeValue,
  //           userId: userId,
  //           postId: postId,
  //         })
  //           // .then(() => {
  //           //   return Like.addPost(Post);
  //           // })
  //           .then(() => {
  //             res.status(201).json({ message: "like créé" });
  //           })
  //           .catch((error) => res.status(500).json(error))
  //       );
  //     }
  //   })
  //   .catch();

  // Post.findByPk(postId)
  //   .then(async (post) => {
  //     if (likeValue === 1) {
  //       const like = await Like.create({
  //         value: likeValue,
  //         userId: userId,
  //         postId: postId,
  //       });
  //       // const user = await User.findByPk(userId)
  //       // console.log(user)
  //       // .then(async (user) => {
  //       //   return user;
  //       // })
  //       // .catch(
  //       //   res.status(404).json({
  //       //     error: new Error("user not found"),
  //       //   })
  //       // );
  //       await post.addLike(like);
  //       // await like.addUser(u);
  //       res.status(201).json({ message: "like créé" });
  //     }
  //   })
  //   .catch((error) => res.status(500).json(error));
};

export { postLiked };
