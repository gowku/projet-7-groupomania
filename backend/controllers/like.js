const postLiked = (req, res, next) => {
  console.log("je suis dans like !!!!!!!!!!!!!!");
  console.log(req.body);

  const postId = req.params.postId;
  const userId = req.user.id;
};

export { postLiked };
