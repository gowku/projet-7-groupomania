import { Sequelize } from "sequelize";

import "dotenv/config";

export default new Sequelize("groupomania", process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});
