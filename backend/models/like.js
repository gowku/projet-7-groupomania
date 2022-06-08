import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const Like = db.define("like", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

export { Like };
