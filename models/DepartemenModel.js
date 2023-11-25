import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Departemen = db.define(
  "departemen",
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },

    nama: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
  },

  {
    freezeTableName: true,
  }
);

Users.hasMany(Departemen, { foreignKey: "email" });
Departemen.belongsTo(Users, {
  foreignKey: "email", 
  targetKey: "email",
  });

export default Departemen;
