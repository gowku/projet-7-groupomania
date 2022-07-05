import fs from "fs";
import CryptoJS from "crypto-js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models/user.js";

import userValidation from "../validation/userValidation.js";

const signup = (req, res, next) => {
  const { body } = req;
  // console.log("inscription");
  // console.log(body.email);

  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  const cryptojsEmail = CryptoJS.HmacSHA256(body.email, process.env.EMAIL).toString();

  bcrypt
    .hash(body.password, 10)
    .then((hash) => {
      User.create({
        email: cryptojsEmail,
        password: hash,
        firstName: body.firstName,
        lastName: body.lastName,
        birthDate: body.birthDate,
      })
        .then(() => {
          res.status(201).json({ message: "utilisateur créé" });
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json({ error }));
};

const login = (req, res, next) => {
  const cryptojsEmail = CryptoJS.HmacSHA256(req.body.email, process.env.EMAIL).toString();

  User.findOne({ where: { email: cryptojsEmail } })
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

const modifyProfil = (req, res, next) => {
  console.log("je suis ici !!!!!!!!!!!!!!!!!!!");
  console.log(req.body);
  // console.log(req.params);
  // console.log(req.file);

  const userId = req.params.userId;
  const body = req.body;
  const cryptojsEmail = CryptoJS.HmacSHA256(body.email, process.env.EMAIL).toString();

  User.findByPk(userId)
    .then(async (user) => {
      if (user) {
        if (body.email) user.email = cryptojsEmail;
        // if (body.password) user.password = "";
        if (body.firstName) user.firstName = body.firstName;
        if (body.lastName) user.lastName = body.lastName;
        if (body.birthDate) user.birthDate = body.birthDate;
        if (req.file) user.profilPic = `${req.protocol}://${req.get(`host`)}/images/profilPic/${req.file.filename}`;

        await user.save();
        res.status(200).json(user);
      } else {
        res.status(404).json({
          error: new Error("user not found"),
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: new Error("error"),
      });
    });
};

const getOneUser = (req, res, next) => {
  // console.log("je suis la !!!!!!!!!!!!!!!!!!!");
  const userId = req.params.userId;

  User.findByPk(userId)
    .then((user) => {
      // console.log(user);
      res.status(200).json(user);
    })
    .catch((error) => res.status(500).json(error));
};

export { signup, login, remove, modifyProfil, getOneUser };
