import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);

    const userId = decodedToken.userId;
    const reqUserId = parseInt(req.body.userId);

    const userIdParamsUrl = req.originalUrl.split("=")[1];
    const parsUrl = parseInt(userIdParamsUrl);
    // console.log(parsUrl);
    // console.log(req.body);
    if (req._body === true) {
      // console.log(req);
      if (reqUserId === userId) {
        next();
      } else {
        throw "erreur identification userId";
      }
    } else if (parsUrl === userId) {
      // console.log("je suis la");
      // console.log(req.body);
      next();
    } else {
      throw "erreur identification url params";
    }

    // if (reqUserId && reqUserId !== userId) {
    //   throw "Invalid user ID";
    // } else {
    //   next();
    // }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

export { auth };
