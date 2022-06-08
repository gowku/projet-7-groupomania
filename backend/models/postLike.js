import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const postLike = db.define("postlike", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

export { postLike };
