import CryptoJS from "crypto-js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { user } from "../models/user.js";

import userValidation from "../validation/userValidation.js";

const signup = (req, res, next) => {
  const { body } = req;
  // console.log("inscription");
  // console.log(body.email);

  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  const cryptojsEmail = CryptoJS.HmacSHA256(body.email, process.env.EMAIL).toString();
  // console.log("je suis ici !!!!!");
  // console.log(cryptojsEmail);

  bcrypt
    .hash(body.password, 10)
    .then((hash) => {
      user
        .create({ email: cryptojsEmail, password: hash })
        .then(() => {
          res.status(201).json({ message: "utilisateur créé" });
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json({ error }));
};

const login = (req, res, next) => {
  // console.log("je me connecte");
  // console.log(req.body.email);

  const cryptojsEmail = CryptoJS.HmacSHA256(req.body.email, process.env.EMAIL).toString();

  user
    .findOne({ where: { email: cryptojsEmail } })
    .then((user) => {
      if (!user) console.log({ message: `There is no record of the email.` });
      else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({ error: "Mot de passe incorrect !" });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign({ userId: user.id }, process.env.TOKEN, { expiresIn: "24h" }),
            });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((err) => {
      console.log(err);

      console.log({ message: "Something went wrong trying to authenticate" });
    });
};

const remove = (req, res, next) => {
  console.log("je supprime le user");
  console.log(req.body);
};

export { signup, login, remove };
