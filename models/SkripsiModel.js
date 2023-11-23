import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Mahasiswa from "./MahasiswaModel.js";

const { DataTypes } = Sequelize;

const Skripsi = db.define(
  "skripsi",
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
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
    nilaiskripsi: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    NIM: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },

  {
    freezeTableName: true,
  }
);

Mahasiswa.hasMany(Skripsi, { foreignKey: "NIM" });
Skripsi.belongsTo(Mahasiswa, { foreignKey: "NIM" });
export default Skripsi;
