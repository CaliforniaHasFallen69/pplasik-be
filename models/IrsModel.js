import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Mahasiswa from "./MahasiswaModel.js";

const { DataTypes } = Sequelize;

const Irs = db.define(
  "irs",
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

    semester: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    sks: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    NIM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
  }
);
Mahasiswa.hasMany(Irs, { foreignKey: "NIM" });
Irs.belongsTo(Mahasiswa, { foreignKey: "NIM" });


export default Irs;
