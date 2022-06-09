import sequelize from "sequelize";
import db from "../database/db.js";
// import { role } from "./role.js";

const { DataTypes } = sequelize;

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false,
  },
});

export { User };
