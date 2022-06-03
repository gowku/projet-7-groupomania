import sequelize from "sequelize";
import db from "../database/db.js";
// import { role } from "./role.js";
import { post } from "./post.js";

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
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false,
  },
});

// user.associate = function(models) {
//   user.hasMany(models.Article);
// };
// return User;

// user.hasOne(role);
// role.belongsTo(user);

user.hasMany(post);
post.belongsTo(user);

export { user };
