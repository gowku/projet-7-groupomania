import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models/user.js";

const auth = async (req, res, next) => {
  // console.log("ici");
  // console.log(req);
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);

    const userId = decodedToken.userId;

    const userData = await User.findByPk(userId);

    if (!userData) {
      throw "Invalid user ID";
    } else {
      req.user = userData;
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

export { auth };
