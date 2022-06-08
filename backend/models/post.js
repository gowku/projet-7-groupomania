import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const Post = db.define("post", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  texte: {
    type: DataTypes.STRING,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
});

export { Post };
