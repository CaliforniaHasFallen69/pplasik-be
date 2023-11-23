import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Dosenwali = db.define(
  "dosenwali",
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

    NIP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
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

    alamat: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },

    notelepon: {
      type: DataTypes.BIGINT,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    tempatlahir: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    tanggallahir: {
      type: DataTypes.DATE,

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

Users.hasMany(Dosenwali);
Dosenwali.belongsTo(Users, { foreignKey: "email" });


export default Dosenwali;
