import sequelize from "sequelize";
import db from "../database/db.js";

const { DataTypes } = sequelize;

const role = db.define("role", {
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  normal: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export { role };
