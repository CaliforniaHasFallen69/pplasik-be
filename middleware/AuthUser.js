import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    console.log(token, "ini token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      req.user = user;

      console.log(user, "ini user");
      next();
    });
  } else {
    res
      .sendStatus(401)
      .json({ message: "Token tidak valid. Silahkan login kembali" });
  }
}

export const isOperator = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.user.email,
      },
    });

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    if (user.role !== "admin")
      return res.status(403).json({ message: "Anda tidak memiliki akses" });

    next();
  } catch (error) {
    return res.status(500).send({
      error: error,
      message: "Unable to validate User role!",
    });
  }
};

export const isMahasiswa = async (req, res, next) => {
  console.log(req.user);
  console.log(req.body);
  try {
    const user = await Users.findOne({
      where: {
        id: req.user.userId,
      },
    });

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    if (user.role !== "mahasiswa")
      return res.status(403).json({ message: "Anda tidak memiliki akses" });

    next();
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate User role!",
    });
  }
};

export const isDosenwali = async (req, res, next) => {
  console.log(req.user);
  console.log(req.body);
  try {
    const user = await Users.findOne({
      where: {
        id: req.user.userId,
      },
    });

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    if (user.role !== "dosen wali")
      return res.status(403).json({ message: "Anda tidak memiliki akses" });

    next();
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate User role!",
    });
  }
};
