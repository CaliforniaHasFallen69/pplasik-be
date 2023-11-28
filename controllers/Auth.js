import User from "../models/UserModel.js";
import Mahasiswa from "../models/MahasiswaModel.js";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import Operator from "../models/OperatorModel.js";
import Dosenwali from "../models/DosenwaliModel.js";
import Departemen from "../models/DepartemenModel.js";

export const Login = async (req, res) => {
  console.log(req.body.email);
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const userId = user.id;
  const nama = user.nama;
  const email = user.email;
  const role = user.role;
  const islogin = user.islogin;

  const accessToken = jwt.sign(
    { userId, nama, email, role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "3h",
    }
  );

  res.status(200).json({
    id: user.id,
    nama: user.nama,
    email: user.email,
    role: user.role,
    islogin: user.islogin,
    accessToken,
  });
};

export const Me = async (req, res) => {
  console.log(req.user.email);
  const user = await User.findOne({
    attributes: ["id", "nama", "email", "role", "islogin"],
    where: {
      email: req.user.email,
    },
  });
  if (user.role === 'operator') {
    const operator = await Operator.findOne({
      where: {
        email: req.user.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json({ ...user.dataValues, operator });
  } else if (user.role === 'mahasiswa') {
    const mahasiswa = await Mahasiswa.findOne({
      where: {
        email: req.user.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json({ ...user.dataValues, mahasiswa });
  } else if(user.role === 'dosen wali') {
    const dosenwali = await Dosenwali.findOne({
      where: {
        email: req.user.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json({ ...user.dataValues, dosenwali });
  } else if (user.role === 'departemen'){
    const departemen = await Departemen.findOne({
      where: {
        email: req.user.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json({ ...user.dataValues, departemen });
  }

  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json({ ...user.dataValues, operator });
};


export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
