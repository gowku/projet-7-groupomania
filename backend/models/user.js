import sequelize from "sequelize";
import db from "../database/db.js";

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
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  profilPic: {
    type: DataTypes.STRING,
    defaultValue: "http://localhost:3000/images/profilPic/defaultProfil.jpg",
    allowNull: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false,
  },
});

export { User };
