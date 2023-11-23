import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Mahasiswa from "./MahasiswaModel.js";

const { DataTypes } = Sequelize;

const Pkl = db.define(
  "pkl",
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
  
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nilaipkl: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Mahasiswa.hasMany(Pkl, { foreignKey: "NIM" });
Pkl.belongsTo(Mahasiswa, { foreignKey: "NIM" });

export default Pkl;
