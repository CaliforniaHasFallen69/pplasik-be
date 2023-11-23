import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Mahasiswa from "./MahasiswaModel.js";

const { DataTypes } = Sequelize;

const Khs = db.define(
  "khs",
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
    skskumulatif: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    ipsemester: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    ipkumulatif: {
      type: DataTypes.INTEGER,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    NIM: {
      type: DataTypes.INTEGER,
    
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
  },
  {
    freezeTableName: true,
  }
);
Mahasiswa.hasMany(Khs, {
  foreignKey: "NIM",
});
Khs.belongsTo(Mahasiswa, {
  foreignKey: "NIM",
});

export default Khs;
