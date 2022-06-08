import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const Comment = db.define("comment", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  texte: {
    type: DataTypes.STRING,
  },
});

export { Comment };
