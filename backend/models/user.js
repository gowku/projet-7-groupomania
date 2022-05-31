import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const user = db.define("user", {
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
  //   roleId: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
});

export { user };
