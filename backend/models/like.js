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
  value: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
    allowNull: false,
  },
});

export { Like };
