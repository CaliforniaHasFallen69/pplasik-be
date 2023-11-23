import User from "../models/UserModel.js";
import Mahasiswa from "../models/MahasiswaModel.js";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import Operator from "../models/OperatorModel.js";

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
    accessToken,
  });
};

export const Me = async (req, res) => {
  console.log(req.user.email);
  const user = await User.findOne({
    attributes: ["id", "nama", "email", "role"],
    where: {
      email: req.user.email,
    },
  });
  const operator = await Operator.findOne({
    where: {
      email: req.user.email,
    },
  });

  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json({ ...user.dataValues, operator });
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
