import { Sequelize } from "sequelize";

const db = new Sequelize("pplasik", "root", "", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});

export default db;