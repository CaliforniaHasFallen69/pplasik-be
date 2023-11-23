import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Mahasiswa = db.define(
  "mahasiswa",
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

    NIM: {
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

    angkatan: {
      type: DataTypes.INTEGER,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    tempatlahir: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    tanggallahir: {
      type: DataTypes.DATE,

      allowNull: true,
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

    kota: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    provinsi: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    alamat: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },

    notelepon: {
      type: DataTypes.BIGINT,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    jalurmasuk: {
      type: DataTypes.STRING,

      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    iddosen: {
      type: DataTypes.INTEGER,
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
Mahasiswa.belongsTo(Users, {
  foreignKey: "email", // Kolom di tabel Mahasiswa yang menjadi foreign key
  targetKey: "email", // Kolom di tabel Users yang menjadi target key
});

export default Mahasiswa;
