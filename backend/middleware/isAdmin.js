import { User } from "../models/user.js";

const isAdmin = (req, res, next) => {
  const userId = req.body.user;

  User.findOne(userId)
    .then((user) => {
      // console.log(user);

      if (user.isAdmin) {
        next();
      } else {
        res.status(401).json({
          error: new Error("vous n'etes pas administrateur!"),
        });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
export default isAdmin;
