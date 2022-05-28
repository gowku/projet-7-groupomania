import { Sequelize } from "sequelize";

import "dotenv/config";

export default new Sequelize("user", process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});
